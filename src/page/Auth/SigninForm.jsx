import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useDispatch } from "react-redux"
import { login } from "@/State/Auth/Action"
import { useNavigate } from "react-router-dom"


const SigninForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const form = useForm({
    resolver: "",
    defaultValues: {
      email: "",
      password: "",
    }
  })

  const onSubmit = (data) => {
    dispatch(login({ data, navigate }))
    console.log(data)
  }

  return (
    <div >
      <h1 className='text-xl font-bold text-center pb-3'>Login</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6'>


          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>

                <FormControl>
                  <Input
                    //name="ifsc"
                    className="border w-full border-gray-700 p-5"
                    placeholder="tradeo@gmail.com" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>

            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>

                <FormControl>
                  <Input
                    //name="account"
                    className="border w-full border-gray-700 p-5"
                    placeholder="Secure Passcode" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>

            )}
          />


          <Button type="submit" className="w-full py-5">
            Welcome Back
          </Button>


        </form>
      </Form>
    </div>
  )
}

export default SigninForm