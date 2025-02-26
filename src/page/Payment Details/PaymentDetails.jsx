import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import React from 'react'
import PaymentDetailsForm from './PaymentDetailsForm'
import { Button } from '@/components/ui/button'

const PaymentDetails = () => {
  return (
    <div className='px-20'>
      <h1 className='text-3xl font-bold py-10'>Payment Details</h1>

      <Card>
        <CardHeader>
          <CardTitle>
            SDC Fund bank
          </CardTitle>
          <CardDescription>
            A/C no :
            *************2109
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex items-center' >
            <p className='w-32'>A/C Holder</p>
            <p className='text-gray-400'>: Ms Wonder</p>
          </div>
          <div className='flex items-center'>
            <p className='w-32'>IFSC</p>
            <p className='text-gray-400'>: SDCFB000000013</p>
          </div>
        </CardContent>
      </Card>

      <Dialog >
        <DialogTrigger >
          <Button className='py-6 mt-2'>Add payment details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>

          </DialogHeader>
          <PaymentDetailsForm />
        </DialogContent>
      </Dialog>

    </div>
  )
}

export default PaymentDetails