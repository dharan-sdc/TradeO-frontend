import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import React, { useEffect, useState } from 'react'
import PaymentDetailsForm from './PaymentDetailsForm'
import { Button } from '@/components/ui/button'
import { store } from '@/State/Store'
import { useDispatch, useSelector } from 'react-redux'
import { getPaymentDetails } from '@/State/Withdrawal/Action'

const PaymentDetails = () => {
  const { withdrawal } = useSelector(store => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPaymentDetails({ jwt: localStorage.getItem("jwt") }))

  }, [])
  console.log("Payment --- ", withdrawal.paymentDetails)
  return (
    <div className='px-20'>
      <h1 className='text-3xl font-bold py-10'>TradeO Deposit Fund Bank Details</h1>

      {withdrawal.paymentDetails ? (<Card>
        <CardHeader>
          <CardTitle className="mb">
            Payment Details
          </CardTitle>
          <CardDescription>
            <div className='flex items-center' >
              <p className='w-32'>Account Number</p>
              <p className='text-gray-400'>: {withdrawal.paymentDetails?.accountNumber
                ? `**** **** **** ${withdrawal.paymentDetails.accountNumber.slice(-4)}`
                : 'N/A'}</p>
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className='flex items-center' >
            <p className='w-32'>A/C Holder Name</p>
            <p className='text-gray-400'>: {withdrawal.paymentDetails?.accountHolderName}</p>
          </div>
          <div className='flex items-center'>
            <p className='w-32'>Bank Name</p>
            <p className='text-gray-400'>: {withdrawal.paymentDetails?.bankName}</p>
          </div>
          <div className='flex items-center'>
            <p className='w-32'>IFSC</p>
            <p className='text-gray-400'>: {withdrawal.paymentDetails?.ifsc}</p>
          </div>
        </CardContent>
      </Card>) : (<Dialog >
        <DialogTrigger >
          <Button className='py-6 mt-2'>Add payment details</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Payment Details</DialogTitle>

          </DialogHeader>
          <PaymentDetailsForm />
        </DialogContent>
      </Dialog>)
      }



    </div >
  )
}

export default PaymentDetails