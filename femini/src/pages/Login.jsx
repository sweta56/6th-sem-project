import React from 'react'
import logo from '../assets/logo.jpg'
import { LockClosedIcon } from '@heroicons/react/solid'
const Login = () => {
  return (
    <div className="relative"  >
      <div className='min-h-screen bg-pink-100 flex flex-col justify-center'>
        <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 pr-6 border border-gray-300'>
          <form action="" className="space-y-6">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src={logo}
                alt={logo}
              />
              <h2 className="mt-6 text-center text-3xl font-bold text-black">Log in to your account</h2>
            </div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md ">
              <div className="flex justify-center">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className=" m-2  appearance-none rounded-none relative block w-[350px] px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div className="flex justify-center">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-[350px] px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-400 focus:border-pink-400  sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="flex ">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-pink-400 focus:ring-pink-400 border-pink-400 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-800">
                  Remember me

                </label>

                <div className="text-sm">
                  <a href="" className="font-medium pl-7 text-pink-400 hover:text-pink-400">
                    Forgot your password?
                  </a>
                </div>
              </div>




            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="group relative w-[200px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-400 hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-pink-400 group-hover:text-pink-400" aria-hidden="true" />
                </span>
                Log in
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>








  )


}

export default Login;