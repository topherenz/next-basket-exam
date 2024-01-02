"use client";

import { LoadMoreProps } from "@/types";

const LoadMore = ({ pageNumber, isNext, setLimit }: LoadMoreProps) => {
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 10;

        setLimit(newLimit);
    };

    return (
        <div className="text-center mt-20">
            {!isNext && (
                <button
                    onClick={handleNavigation}
                    className="uppercase font-bold text-[#23A6F0] px-10 py-4 max-w-full inline-block border border-[#23A6F0] rounded-md"
                >
                    Load More Products
                </button>
            )}
        </div>
    )
}

export default LoadMore