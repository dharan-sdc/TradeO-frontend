import { Button } from '@/components/ui/button'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import React, { useEffect } from 'react'
import AssetTable from './AssetTable'
import StackChart from './StackChart'
import { Avatar } from '@radix-ui/react-avatar'
import { AvatarImage } from '@/components/ui/avatar'
import { Cross1Icon, DotIcon } from '@radix-ui/react-icons'
import { Gauge, Lightbulb, MessageCircle } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { getCoinList, getTop50CoinList } from '@/State/Coin/Action'
import { useDispatch, useSelector } from 'react-redux'



const Home = () => {
  const [category, setCategory] = React.useState("all");
  const [inputValue, setInputValue] = React.useState("");
  const [isBotRealease, setIsBotRealease] = React.useState(false)

  const dispatch = useDispatch()
  const { coin } = useSelector(store => store)

  const handleBotRealease = () => setIsBotRealease(!isBotRealease);
  const handleCategory = (value) => {
    setCategory(value);
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleKeyPress = (event) => {
    if (event.key == 'Enter') {
      console.log(inputValue)
    }
    setInputValue("")
  }

  useEffect(() => {
    dispatch(getTop50CoinList())
  }, [category])

  useEffect(() => {
    dispatch(getCoinList(1))
  }, [])

  return (
    <div className='relative'>
      <div className='lg:flex'>
        <div className='lg:w-[50%] lg:border-r'>

          <div className='p-3 flex items-center gap-4'>
            <Button onClick={() => handleCategory("all")} variant={category == "all" ? "default" : "outline"} className="rounded-full">All</Button>

            <Button onClick={() => handleCategory("top50")} variant={category == "top50" ? "default" : "outline"} className="rounded-full">Top 50</Button>

            <Button onClick={() => handleCategory("topGainers")} variant={category == "topGainers" ? "default" : "outline"} className="rounded-full">Top Profitable</Button>

            <Button onClick={() => handleCategory("topLosers")} variant={category == "topLosers" ? "default" : "outline"} className="rounded-full">Top Lossable</Button>
          </div>
          <AssetTable coin={category == "all" ? coin.coinList : coin.top50} category={category} />
          <div>
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>

          </div>

        </div>
        <div className='hidden lg:block lg:w-[50%] p-5'>
          <StackChart coinId={"bitcoin"} />

          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage src="https://assets.coingecko.com/coins/images/279/standard/ethereum.png?1696501628" />
              </Avatar>
            </div>
            <div>
              <div className='flex items-center gap-2'>
                <p>ETH</p>
                <DotIcon className='text-gray-400' />
                <p className='text-gray-400'>TradeO</p>
              </div>
              <div className='flex items-end gap-2'>
                <p className='text-xl font-bold'>5464</p>
                <p className='text-red-500'>
                  <span>-13192962630.7865</span>
                  <span>(-0.298986%)</span>
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
      <section className='absolute bottom-5 right-5 z-40 flex flex-col justify-end items-end gap-2'>


        {isBotRealease && <div className='rounded-md w[20ren] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-white shadow-lg'>
          <div className='flex justify-between items-center border-b px-6 h-[12%]'>
            <p>EDITH Chatbot</p>
            <Button onClick={handleBotRealease} variant="ghost" size="icon">
              <Cross1Icon />
            </Button>
          </div>
          <div className='h-[76%] flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container'>
            <div className='self-start pb-5 w-auto'>
              <div className='justify-end self-end px-5 py-2 rounded-md bg-orange-500 w-auto text-cyan-50'>
                <p>Hey,Test Driver 42</p>
                <p>Welcome to EDITH chatbot</p>
                <p>You can ask crypto related any question</p>
              </div>
            </div>

            {
              [1, 1, 1, 1].map((item, i) => (
                <div key={i} className={`${i % 2 == 0 ? "self-start" : "self-end"} "pb-5 w-auto" `}>

                  {i % 2 == 0 ? <div className='justify-end self-end px-5 py-2 rounded-md bg-orange-500 w-auto text-cyan-50'>
                    <p>prompt : Who are You ?</p>
                  </div> : <div className='justify-end self-end px-5 py-2 rounded-md bg-orange-500 w-auto text-cyan-50'>
                    <p>resonpse : hey,I,m User112</p>

                  </div>}

                </div>
              ))}

          </div>

          <div className='h-[12%] border-t'>
            <Input
              className='w-full h-full order-none outline-none'
              placeholder='Ask Queries .. '
              onChange={handleChange}
              value={inputValue}
              onKeyboardPress={handleKeyPress}
            />
          </div>
        </div>}

        <div className='relative w-[10rem] cursor-pointer group '>
          <Button
            onClick={handleBotRealease}
            className="w-full h-[3rem] gap-2 items-center">
            <MessageCircle className='-rotate-90' />
            <span className='text-2xl'>E D I T H</span>
          </Button>

        </div>

      </section>
    </div>
  )
}

export default Home