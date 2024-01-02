"use client";

import React from "react";
import { ProductCardProps } from "@/types";

export const calcDiscount = (discountPercentage: number, price: number) => {
    const convToDecimal = discountPercentage / 100;
    const discountedPrice = price - (convToDecimal * price);
    return discountedPrice.toFixed(2);
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { id, title, brand, price, discountPercentage, thumbnail } = product;

    const discPrice = calcDiscount(discountPercentage, price);

    return (
        <div className="ftrd__product-item max-w-full w-[18rem] xl:w-[183px] mx-auto text-center">
            <canvas className="bg-cover bg-no-repeat bg-center block max-w-full w-full" width={183} height={238} style={{ backgroundImage: `url(${thumbnail})` }}></canvas>
            <div className="ftrd__details flex flex-col gap-2.5 px-5 py-6 font-bold">
                <div className="text-[#252B42] text-base capitalize">
                    <span>{title.toLowerCase()}</span>
                </div>
                <div className="text-[#737373] text-sm">
                    <span>{brand}</span>
                </div>
                <div className="ftrd__price flex justify-center items-center gap-x-1.5 text-base">
                    <div className="text-[#BDBDBD]">
                        <span>${price}</span>
                    </div>
                    <div className="text-[#23856D]">
                        <span>${discPrice}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard