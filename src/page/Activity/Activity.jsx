import { AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar } from '@radix-ui/react-avatar'
import { BookmarkFilledIcon } from '@radix-ui/react-icons'
import React from 'react'

const Activity = () => {
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
              <TableHead className="text-right" >Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <TableRow key={index}>
              {/* <TableCell className="font-medium">Bitcoin</TableCell> */}
              <TableCell>
                <p>13/07/2003</p>
                <p className='text-gray-400'>07:22</p>
              </TableCell>
              <TableCell className=" flex items-center gap-2">

                <Avatar className='-z-50 w-8 h-8'>
                  <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" />

                </Avatar>
                <span className='font-bold font-serif'>Bitcoin</span>

              </TableCell>

              <TableCell>4804198544404</TableCell>
              <TableCell>158423828298773</TableCell>
              <TableCell>-3.42638</TableCell>
              <TableCell>158423828298773</TableCell>
              <TableCell className="text-right">
                345
              </TableCell>
            </TableRow>)}

          </TableBody>
        </Table>
      </div>

    </div>
  )
}

export default Activity