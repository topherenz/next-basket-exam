import { FilterProps } from "@/types";

export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    
    searchParams.set(type, value);
    
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
};

export async function fetchProducts(filters: FilterProps) {
    const { limit } = filters;
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&select=title,brand,price,discountPercentage,thumbnail`);
    const result = await response.json();
    return result["products"];
}