import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='px-5'>
        <div className='flex gap-2 text-azulMar font-medium'>
           <Link href="#">Terms</Link> 
           <Link href="#">Privacy</Link> 
           <Link href="#">Security</Link> 
           <Link href="#">Version</Link> 
        </div>
        <hr className='my-4' /> {/* Línea divisora */}
        <h1 className='font-semibold text-gris'>© 2023 Hirefy, LLC.</h1>
    </div>
  )
}

export default Footer