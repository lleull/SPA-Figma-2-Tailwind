import Header from '@/app/components/Header/Header'
import React from 'react'
import { landingParagraph } from '@/app/utils/landingDatas'
const LandingPage = () => {
    return (
        <div>

            <Header />
            <div>
                <div className='flex flex-col items-start'>
                    <p>
                        {landingParagraph.mainParagraph}
                    </p>
                    <p>
                        {landingParagraph.subParagarph}
                    </p>

                </div>

            </div>
        </div>
    )
}

export default LandingPage