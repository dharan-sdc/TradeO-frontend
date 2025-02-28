import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { BookmarkFilledIcon, BookmarkIcon, DotIcon } from '@radix-ui/react-icons'
import React, { useEffect } from 'react'
import TreadingForm from './TreadingForm'
import StackChart from '../Home/StackChart'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCoinDetails } from '@/State/Coin/Action'
import { store } from '@/State/Store'





const StockDetails = () => {

  const coin = useSelector(store => store.coin)

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(fetchCoinDetails({ coinId: id, jwt: localStorage.getItem("jwt") }));
  }, [id, dispatch]); // Added dispatch as a dependency

  const dummyCoinData = {
    image: { large: "https://th.bing.com/th?id=ODL.edfcf373d17146688b2c295935da724d&w=100&h=100&c=12&pcl=faf9f7&o=6&dpr=1.3&pid=AlgoBlockDebug" },  // Use a local default image
    symbol: "BTC",
    name: "Bitcoin",
    market_data: {
      current_price: { inr: 9999 },
      market_cap_change_24h: 9999,
      market_cap_change_percentage_24h: 0.0987,
    },
  };
  const coinData = coin.coinDetails || dummyCoinData;

  return (
    <div className='p-5 mt-5'>
      <div className='flex justify-between'>
        <div className='flex gap-5 items-center'>

          <div>
            <Avatar>
              <AvatarImage src={coinData?.image.large} />

            </Avatar>
          </div>
          <div>
            <div className='flex items-center gap-2'>
              <p>{coinData?.symbol.toUpperCase()}</p>
              <DotIcon className='text-gray-400' />
              <p className='text-gray-400'>{coinData?.name}</p>

            </div>
            <div className='flex items-end gap-2'>
              <p className='text-xl font-bold'>${coinData?.market_data.current_price.inr}</p>
              <p className='text-red-600'>
                <span>-{coinData?.market_data.market_cap_change_24h}</span>
                <span>(-{coinData?.market_data.market_cap_change_percentage_24h}%)</span>
              </p>

            </div>
          </div>

        </div>

        <div className='flex items-center gap-4'>
          <Button>
            {true ? (<BookmarkFilledIcon className='h-6 w-6' />) : (<BookmarkIcon className='h-6 w-6' />)}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button size="lg">Tread</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How Much Do you want to spend?</DialogTitle>

              </DialogHeader>
              <TreadingForm />
            </DialogContent>
          </Dialog>

        </div>
      </div>
      <div className='mt-14 '>
        <StackChart coinId={id} />
      </div>

    </div>
  )
}

export default StockDetails