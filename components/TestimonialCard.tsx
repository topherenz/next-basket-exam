import React from 'react';
import Image from 'next/image';

const TestimonialCard = () => {
    return (
        <div className="tstmnl__item flex flex-col p-7 gap-5 font-bold text-sm text-[#737373] tracking-[0.0125rem]">
            <div className="tstmnl__image">
                <Image 
                    src="/testimonial-image-a.png"
                    alt="Testimonial"
                    width={90}
                    height={90}
                    className="object-contain max-w-full block mx-auto"
                />
            </div>
            <div className="tstmnl__rating">
                <Image 
                    src="/stars-image.png"
                    alt="Rating"
                    width={130}
                    height={22}
                    className="object-contain max-w-full block mx-auto"
                />
            </div>
            <div className="tstmnl__comment">
                <span>Slate helps you see how many more days you need to work to reach your financial goal.</span>
            </div>
            <div className="tstmnl__author flex flex-col gap-0">
                <span className="tstmnl__name-author text-[#23A6F0]">Regina Miles</span>
                <span className="tstmnl__role-author text-[#252B42]">Designer</span>
            </div>
        </div>
    )
}

export default TestimonialCard