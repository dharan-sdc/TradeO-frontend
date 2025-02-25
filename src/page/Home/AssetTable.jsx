import { AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar } from '@radix-ui/react-avatar'
import React from 'react'

const AssetTable = () => {
  return (
    <Table>

      <TableHeader>
        <TableRow>
          <TableHead className="w-[250px]">Coin</TableHead>

          <TableHead>Volume</TableHead>
          <TableHead>Market Cap</TableHead>
          <TableHead>24hrs</TableHead>
          <TableHead className="text-right">Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => <TableRow key={index}>
          {/* <TableCell className="font-medium">Bitcoin</TableCell> */}
          <TableCell className=" flex items-center gap-2">
            <Avatar className='-z-50 w-8 h-8'>
              <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" />

            </Avatar>
            <span className='font-bold font-serif'>Bitcoin</span>
            <span className='font-medium font-mono'>BTN</span>
          </TableCell>

          <TableCell>4804198544404</TableCell>
          <TableCell>158423828298773</TableCell>
          <TableCell>-3.42638</TableCell>
          <TableCell className="text-right">$79,98,303.00</TableCell>
        </TableRow>)}

      </TableBody>
    </Table>


  )
}

export default AssetTable