import { AvatarImage } from '@/components/ui/avatar'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar } from '@radix-ui/react-avatar'
import React from 'react'

const Portfolio = () => {
  return (
    <div className='p-5 lg:p-20'>
      <h1 className='font-bold text-3xl pb-5'>Portfolio</h1>
      <div className="border border-gray-200 rounded overflow-hidden">
        <Table>

          <TableHeader>
            <TableRow>
              <TableHead className="">Assets</TableHead>

              <TableHead>Price</TableHead>
              <TableHead>Unit</TableHead>
              <TableHead>Change</TableHead>
              <TableHead>Change(%)</TableHead>
              <TableHead className="text-right">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 1, 1, 1, 1].map((item, index) => <TableRow key={index}>
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
              <TableCell>-3.42638</TableCell>
              <TableCell className="text-right">$79,98,303.00</TableCell>
            </TableRow>)}

          </TableBody>
        </Table>
      </div>

    </div>
  )
}

export default Portfolio