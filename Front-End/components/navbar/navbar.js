import React from 'react'
import Link from 'next/link'
import { Button } from '../ui/button'
import Image from 'next/image'



export default function Navbar() {
  return (
    <nav className='flex justify-between items-center h-12 px-6 py-4 bg-[#FFFFFF]'>

        <div>
            <Link href='/' className='flex gap-1 items-center'>
              <Image 
                src='/tmark.png' 
                width={50}
                height={50}
              /> 
              <h1 className='text-2xl font-extrabold text-gray-500'>Trustmark</h1>
            </Link>
        </div>

        <div className='flex gap-6'>
            <Link href='/' className='border-b-2 border-transparent hover:border-blue-600'>
              Example
            </Link>

            <Link href='/' className='border-b-2 border-transparent hover:border-blue-600'>
              Example
            </Link>

            <Link href='/' className='border-b-2 border-transparent hover:border-blue-600'>
              Example
            </Link>
        </div>

        <div className='items-center'>
            <Button variant='bank' size='bank'>Login</Button>
        </div>

    </nav>
  )
}
