import Link from 'next/link'
import React from 'react'

export default function RegisterPage() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-300'>
        <div className='w-[400px] p-6 rounded-2xl shadow-xl bg-white'>
            <span className='flex justify-center text-3xl font-bold'>Schedulr</span>
            <p className='text-xl font-semibold mt-10'>Create an Account</p>
            <p className='text-gray-400 text-sm'>Organize your ideas. Achieve your goals.</p>

            <div className='flex flex-col w-full my-5 gap-3'>
                <input type="text" className='w-full border border-gray-400 rounded-lg p-2' placeholder='Name'/>
                <input type="text" className='w-full border border-gray-400 rounded-lg p-2' placeholder='Email'/>
                <input type="text" className='w-full border border-gray-400 rounded-lg p-2' placeholder='Password'/>
            </div>

            <button className='w-full bg-blue-500 text-white font-semibold py-2 px-5 rounded lg mb-3'>Register</button>

            <p className='text-gray-400 text-center'>Already have an account? <Link href='/login' className='text-blue-500'>Login</Link></p>
        </div>
    </div>
  )
}
