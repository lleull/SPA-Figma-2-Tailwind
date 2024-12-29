import { options } from '@/app/utils/landingDatas'
import React from 'react'

const Header = () => {
    return (
        <div className='w-full'>
            <div>


                <ul>
                    {
                        options.map((i) => {
                            return (
                                <li key={i.id}>{i.name}</li>
                            )
                        })
                    }
                </ul>
            </div>
            <div>
                <button>
                    Sign in
                </button>
                <button>
                    log in
                </button>
            </div>

        </div>
    )
}

export default Header