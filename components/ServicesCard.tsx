import React from 'react';
import Image from 'next/image';
import { ServicesCardProps } from '@/types';

const ServicesCard = ({ scIconSrc = './icon-easy-wins.svg', scTitle = 'Insert Title', scDescription = 'Insert Description' }: ServicesCardProps) => {
    return (
        <div className="srvcs__item text-center text-[#737373] font-bold flex flex-col gap-5 w-80 px-10 py-8 tracking-[0.0125rem]">
            <div className="srvcs__icon">
                <Image
                    src={scIconSrc}
                    alt='Services'
                    width={72}
                    height={72}
                    className='object-contain max-w-full mx-auto block'
                />
            </div>
            <div className="srvcs__title text-[#252B42] text-2xl tracking=[0.0063rem]">
                <h3>{scTitle}</h3>
            </div>
            <div className="srvcs__description text-sm">
                <span>{scDescription}</span>
            </div>
        </div>
    )
}

export default ServicesCard