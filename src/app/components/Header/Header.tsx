import { options } from '@/app/utils/landingDatas'
import React from 'react'
import icon from "./../../assets/icon/LogoBlack.png"
import Image from 'next/image'
const Header = () => {
    return (
        <div className='w-full flex items-center justify-between flex-row'>
            <div className='flex flex-row items-center w-1/2 mt-10'>

                <Image src={icon} alt="sd" />
                <ul className='flex flex-row items-center gap-10 ml-10'>
                    {
                        options.map((i) => {
                            return (
                                <li className='hover:bg-red-300' key={i.id}>{i.name}</li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className='flex flxe-row items-center  gap-3'>
                <button className='w-32 pt-3 pb-3 pl-4 pr-4 flex items-center justify-center bg-black text-white' >
                    Sign in
                </button>
                <button className='w-32 pt-3 pb-3 pl-4 pr-4 flex items-center justify-center bg-white text-black'>
                    log in
                </button>
            </div>

        </div>
    )
}

export default Header