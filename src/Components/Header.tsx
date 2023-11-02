import Image from 'next/image'
import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const Header = () => {
  return (
    <div className='flex justify-between bg-azulMar rounded-tr-5 px-5 py-5 items-center'>
        <div className='flex gap-3 items-center'>
            <Image 
                src="/hirefyLogo.png"
                height={31}
                width={31}
                alt='Hirefy logo'
            />
            <h1 className="font-extrabold leading-6 text-white text-lg">Hirefy</h1>
        </div>

        <AiOutlineClose className="text-white text-xl" />
    </div>
  )
}

export default Header