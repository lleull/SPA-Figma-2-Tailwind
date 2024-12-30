import Header from '@/app/components/Header/Header'
import React from 'react'
import { landingParagraph } from '@/app/utils/landingDatas'
import illu1 from "./../../assets/illu/Illustrations_1.png"
import Image from 'next/image'
import { Payments } from '@/app/utils/landingDatas'
const LandingPage = () => {
    return (
        <div>

            <Header />
            <div>
                <div className='flex flex-col items-start'>
                    <p className='text-[40px] w-1/2'>
                        Always Track & <br /> {landingParagraph.mainParagraph}
                    </p>
                    <p>
                        {landingParagraph.subParagarph}
                    </p>

                    <div className='flex flex-row items-center gap-10'>
                        <Image src={Payments.mastercard} alt="s" />
                        <Image src={Payments.paypal} alt="s" />
                        <Image src={Payments.visa} alt="s" />
                    </div>

                </div>
                <Image src={illu1} alt="s" />
            </div>
        </div>
    )
}

export default LandingPage