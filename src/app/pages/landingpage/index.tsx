import Header from '@/app/components/Header/Header'
import React from 'react'
import { landingParagraph } from '@/app/utils/landingDatas'
import illu1 from "./../../assets/illu/Illustrations_1.png"
import Image from 'next/image'
import { Payments } from '@/app/utils/landingDatas'
import CustomEmailInput from '@/app/components/InputBtn/CustomEmail'
const LandingPage = () => {
    return (
        <div className='h-[70vh]'>

            <Header />
            <div className='flex flex-row items-center justify-between mt-40'>
                <div className='flex flex-col items-start'>
                    <p className='text-[50px] w-[70%]'>
                        Always Track & <br /> {landingParagraph.mainParagraph}
                    </p>
                    <p className='w-1/2 text-[15px] mt-5 mb-5'>
                        {landingParagraph.subParagarph}
                    </p>
                    <CustomEmailInput />
                    <div className='flex flex-row items-center gap-10 mt-5'>
                        <Image className='w-13 h-8' src={Payments.mastercard} alt="s" />
                        <Image className='w-13 h-8' src={Payments.paypal} alt="s" />
                        <Image className='w-13 h-8' src={Payments.visa} alt="s" />
                    </div>

                </div>
                <Image className='w-80 h-[45vh]' src={illu1} alt="s" />
            </div>
        </div>
    )
}

export default LandingPage