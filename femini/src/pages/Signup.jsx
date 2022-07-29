import avatar from '../assets/avatar.jpg'

const Signup = () => {
  return (
    <div className="relative top-[80px]"  >
      <div className='min-h-screen bg-pink-100 flex flex-col justify-center'>
        <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 pr-6 border border-gray-300'>
        <h1 className='text-4xl md:text-4xl lg:text-6xl font-bold mb-4 text-center'>Sign Up</h1>
          <h2 className='mb-20 text-gray-500 text-sm md:text-lg lg:text-lg pl-[50px]'>Already have an account? <a className='text-pink-400' href='/login'>LogIn</a></h2>
          <form action="" className="space-y-6">
            <div>
            <div className='flex justify-center'>
              <img className='w-md h-[125px] mb-5 rounded-full' src={avatar}
                alt={avatar} />
            </div>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md ">
            <div className="flex justify-center">
            <label htmlFor="first-name" className="sr-only">
                  Name
                </label>
                 <input type="text" name='name'  className="m-2  appearance-none rounded-none relative block w-[350px] px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                  placeholder="First Name" />
            </div>
            <div className="flex justify-center">
            <label htmlFor="last-name" className="sr-only">
                  Name
                </label>
                 <input type="text" name='name'  className="m-2  appearance-none rounded-none relative block w-[350px] px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                  placeholder="Last Name" />
            </div>
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
                  className="m-2 appearance-none rounded-none relative block w-[350px] px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-pink-400 focus:border-pink-400  sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div className="flex justify-center">
              <label htmlFor="phone-number" className="sr-only">
                  Phone Number
                </label>
               <input  type="number" name='number' className="m-2  appearance-none rounded-none relative block w-[350px] px-3 py-2 border placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-pink-400 focus:border-pink-400 focus:z-10 sm:text-sm"
                  placeholder="Phone Number"/>
               </div>
           
              <div className="pt-2 pl-6">
                <input
                  id="agree"
                  name="agree"
                  type="checkbox"
                  className="h-4 w-4 text-pink-400 focus:ring-pink-400 border-pink-400 rounded"
                />
                <label htmlFor="agree" className='pl-2 pr-2 font-bold text-gray-700 text-[15px] justify-center'>
                  I agree to the terms and conditions

                </label> 
           
              </div>     
              <div class=" items-center justify-between relative flex flex-col pt-5">
              <button class="bg-pink-400 hover:bg-pink-300 hover:text-pink-400 text-white font-bold w-half  py-2 mr-5 mb-4 rounded-full focus:outline-none focus:shadow-outline border-pink-400 text-xl lg:px-20" type="button">
                Sign Up
                </button>
                </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>

  )
}
export default Signup;