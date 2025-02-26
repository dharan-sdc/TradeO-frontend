
import React from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { DialogClose } from '@/components/ui/dialog'

const PaymentDetailsForm = () => {
  const form = useForm({
    resolver: "",
    defaultValues: {
      accountHolderName: "",
      ifsc: "",
      accountNumber: "",
      bankName: ""
    }
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className='px-10 py-2'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'>
          <FormField
            control={form.control}
            name="accountHolderName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Holder Name</FormLabel>
                <FormControl>
                  <Input
                    //name="accountHolderName"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Tradeo" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>

            )}
          />

          <FormField
            control={form.control}
            name="ifsc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>IFSC Code</FormLabel>
                <FormControl>
                  <Input
                    //name="ifsc"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Tradeo" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>

            )}
          />

          <FormField
            control={form.control}
            name="accountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Account Number</FormLabel>
                <FormControl>
                  <Input
                    //name="account"
                    className="border w-full border-gray-700 p-5"
                    placeholder="********1307" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>

            )}
          />

          <FormField
            control={form.control}
            name="confirmAccountNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Account Number</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-700 p-5"
                    placeholder="confirm a/c number" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>

            )}
          />

          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bank Name</FormLabel>
                <FormControl>
                  <Input
                    className="border w-full border-gray-700 p-5"
                    placeholder="SDC funds bank" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>

            )}
          />
          <DialogClose className='w-full'>
            <Button type="submit" className="w-full py-5">
              Add Payment Details
            </Button>
          </DialogClose>

        </form>
      </Form>
    </div>
  )
}

export default PaymentDetailsForm