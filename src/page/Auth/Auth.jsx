import React from 'react'
import "./Auth.css"
import { Button } from '@/components/ui/button'
import { useLocation, useNavigate } from 'react-router-dom'
import ForgetPasswordForm from './ForgetPasswordForm'
import SigninForm from './SigninForm'
import SignupForm from './SignupForm'

const Auth = () => {
  const navigate = useNavigate()
  const location = useLocation();
  return (
    <div className='h-screen relative authContainer '>
      <div className='absolute top-0 right-0 left-0 bottom-0 bg-[#030700] bg-opacity-40'>

        <div className='bgBlur absolute top-1/2 right-40 transform -translate-y-1/2 flex flex-col justify-center items-center h-[35rem] w-[30rem] rounded-md z-50 bg-black bg-opacity-50 shadow-2xl shadow-white px-10'>

          <h1 className='text-6xl font-bold pb-9'>
            <span className='font-bold text-blue-600'>TradeO</span>
            <span className='text-orange-400'> Coin</span>
          </h1>

          {location.pathname == "/signup" ?

            (<section className='text-white w-full'>
              <SignupForm />
              <div className='flex items-center justify-center p-2'>
                <span className="mr-6">You have already account</span>
                <Button onClick={() => navigate("/signin")} variant="ghost"
                >
                  Login
                </Button>
              </div>
            </section>) :

            location.pathname == "/forgot-password" ?
              (<section className='text-white w-full'>
                <ForgetPasswordForm />
                <div className='flex items-center justify-center p-2'>
                  <span className="mr-6">Back to Login ?</span>
                  <Button onClick={() => navigate("/signin")} variant="ghost">
                    Login
                  </Button>
                </div>
              </section>) : (

                <section className='text-white w-full'>
                  <SigninForm />
                  <div className='flex items-center justify-center p-2'>
                    <span className="mr-6">{" You don't have account ? "}</span>
                    <Button onClick={() => navigate("/signup")} variant="ghost" >
                      Register
                    </Button>
                  </div>

                  <div className='w-full py-5 '>

                    <Button onClick={() => navigate("/forgot-password")} variant="ghost" className=" w-full" >
                      Forgot Password
                    </Button>
                  </div>

                </section>)

          }

        </div>

      </div>

    </div>
  )
}

export default Auth