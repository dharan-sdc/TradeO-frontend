import { AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getUserWatchlist, addItemToWatchlist } from '@/State/Watchlist/Action'
import { Avatar } from '@radix-ui/react-avatar'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Watchlist = () => {
  const watchlist = useSelector(store => store.watchlist)
  const dispatch = useDispatch()

  const handleRemoveToWatchlist = (value) => {
    dispatch(addItemToWatchlist({
      coinId: value,
      jwt: localStorage.getItem("jwt")
    }))
  }

  useEffect(() => {
    dispatch(getUserWatchlist(localStorage.getItem("jwt")))
  }, [dispatch]) // Fix: Added dependency

  return (
    <div className='p-7 lg:p-20'>
      <h1 className='font-bold text-3xl pb-10'>Watchlist</h1>
      <div className="border border-gray-200 rounded overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Coin</TableHead>
              <TableHead>Volume</TableHead>
              <TableHead>Market Cap</TableHead>
              <TableHead>24hrs</TableHead>
              <TableHead className="">Price</TableHead>
              <TableHead className="text-right text-red-600">Marked</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {watchlist?.items?.slice().reverse().map((item, index) => ( // Fix: Used correct variable name
              <TableRow key={index}>
                <TableCell className="flex items-center gap-2">
                  <Avatar className='-z-50 w-8 h-8'>
                    <AvatarImage src={item.image} />
                  </Avatar>
                  <span className='font-bold font-serif'>{item.name}</span>
                </TableCell>
                <TableCell>{item.total_volume}</TableCell>
                <TableCell>{item.market_cap}</TableCell>
                <TableCell>{item.price_change_percentage_24h}</TableCell>
                <TableCell className="">${item.current_price}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    onClick={() => handleRemoveToWatchlist(item.id)} size="icon" className="h-10 w-10">


                    <BookmarkFilledIcon className='w-6 h-6' />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default Watchlist
