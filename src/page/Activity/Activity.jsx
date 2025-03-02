import { AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getAllOrdersForUser } from '@/State/Order/Action'
import { calculateProfit } from '@/Utilis/calculateProfit'
import { Avatar } from '@radix-ui/react-avatar'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Activity = () => {
  const dispatch = useDispatch()
  const order = useSelector(store => store.order)

  useEffect(() => {
    dispatch(getAllOrdersForUser({ jwt: localStorage.getItem('jwt') }))
  }, [])

  console.log("test 01 ; ", order.orders)
  return (
    <div className='p-7 lg:p-20'>
      <h1 className='font-bold text-3xl pb-10'>Activity Space</h1>
      <div className="border border-gray-200 rounded overflow-hidden">
        <Table>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Date & Time</TableHead>

              <TableHead>Treading Pair</TableHead>
              <TableHead>Buy Price</TableHead>
              <TableHead>Sell Price</TableHead>
              <TableHead>Order Type</TableHead>
              <TableHead >Profit & Loss</TableHead>
              <TableHead>Hold Volume</TableHead>
              <TableHead className="text-right" >Price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {order.orders?.slice().reverse().map((item, index) => <TableRow key={index}>
              {/* <TableCell className="font-medium">Bitcoin</TableCell> */}
              <TableCell>
                <p>{item.timestamp.toString().split('T')[0]}</p>
                <p className='text-gray-400'>{item.timestamp.toString().split('T')[1].split('.')[0]}</p>
              </TableCell>
              <TableCell className=" flex items-center gap-2">

                <Avatar className='-z-50 w-8 h-8'>
                  <AvatarImage src={item.orderItem.coin.image} />

                </Avatar>
                <span className='font-bold font-serif'>{item.orderItem.coin.name}</span>

              </TableCell>

              <TableCell>{item.orderItem.buyPrice}</TableCell>
              <TableCell>{item.orderItem.sellPrice}</TableCell>
              <TableCell>{item.orderType}</TableCell>
              <TableCell> {calculateProfit(item)}</TableCell>
              <TableCell>{item.orderItem?.quantity}</TableCell>
              <TableCell className="text-right">
                {item.price}
              </TableCell>
            </TableRow>)}

          </TableBody>
        </Table>
      </div>

    </div>
  )
}

export default Activity