import React from 'react'
import Image from 'next/image'
import illu2 from "./../../assets/illu//Asset 8.png"
import { secondTitle } from '@/app/utils/landingDatas'
const SecondPage = () => {
    return (
        <div className='flex flex-row items-center justify-between w-full h-[90vh]'>
            <Image src={illu2} alt='illustarion' />
            <div>
                <p>
                    {secondTitle.headText}
                </p>
                <p>
                    {secondTitle.subText}
                </p>
                <p>{secondTitle.abous[1]}</p>

            </div>
        </div>
    )
}

export default SecondPage