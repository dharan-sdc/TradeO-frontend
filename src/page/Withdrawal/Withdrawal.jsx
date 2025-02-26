import { AvatarImage } from '@/components/ui/avatar'

import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Avatar } from '@radix-ui/react-avatar'

import React from 'react'

const Withdrawal = () => {
  return (
    <div className='p-7 lg:p-20'>
      <h1 className='font-bold text-3xl pb-10'>Withdrawal Menu</h1>
      <div className="border border-gray-200 rounded overflow-hidden">
        <Table>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[250px]">Date</TableHead>

              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="text-right" >Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 1, 1].map((item, index) => <TableRow key={index}>
              {/* <TableCell className="font-medium">Bitcoin</TableCell> */}
              <TableCell>
                <p>July 13,2003 <span>at</span> 11:32 </p>

              </TableCell>


              <TableCell>Bank Account</TableCell>
              <TableCell>420</TableCell>
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

export default Withdrawal