import React from "react";
import Link from "next/link";
import { LatestCardProps } from "@/types";

const LatestCard = ({ lcBackgroundImage}: LatestCardProps) => {
    return (
        <div 
            className="mn__lc w-full h-full flex flex-col justify-start items-start gap-1.5 text=[#252B42] p-6 bg-cover bg-no-repeat bg-center" 
            style={{ backgroundImage: `url(${lcBackgroundImage})` }}
        >
            <div className="lc-stock text-sm text-[#2DC071] font-bold tracking-[0.0125rem]">
                <span>5 items</span>
            </div>
            <div className="lc-title font-bold tracking-[0.0063rem] uppercase">
                <span>Furniture</span>
            </div>
            <Link href="" className="lc-read-more font-bold text-sm tracking-[0.0125rem] capitalize">
                <span>Read More</span>
            </Link>
        </div>
    )
}

export default LatestCard