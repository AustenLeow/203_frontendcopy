import React from 'react'

export default function signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#fafafa]">
      <div className="flex items-center justify-center w-full">
        <div className="flex w-full min-h-screen">
          <div className="w-1/2 p-5 text-center">
            <p>(insert image)</p>
          </div>
          <div className="w-1/2 p-5">
            <h2 className='text-2xl font-bold mb-2'>
              Create Account
            </h2>
            <div className='border-2 w-10 border-gray-400 inline-block mb-10'>
            </div>
            <div className='flex flex-col'>
              <div>
                <p>
                  Full Name
                </p>
              </div>
              <div className='bg-gray-200 w-80 flex items-center mb-2'>
                <input type="name" name="name" className='bg-gray-200 outline-none text-sm w-80' />
              </div>
              <div>
                <p>
                  Email
                </p>
              </div>
              <div className='bg-gray-200 w-80 flex items-center mb-2'>
                <input type="email" name="email" className='bg-gray-200 outline-none text-sm w-80' />
              </div>
              <div>
                <p>
                  Password
                </p>
              </div>
              <div className='bg-gray-200 w-80 flex items-center mb-5'>
                <input type="password" name="password" className='bg-gray-200 outline-none text-sm w-80' />
              </div>
            </div>
            <a href='#' className='bg-[#A4B07E] rounded-xl px-5 py-2 inline-block font-semibold text-white mb-10'>
                Create
            </a>
            <div>
              Already have an account?
              <a href='/login' className='text-[#A4B07E] p-3'>
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
