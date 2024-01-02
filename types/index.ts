export interface LatestCardProps {
    lcBackgroundImage: string;
    lcFontSize?: string;
}

export interface ProductProps {
    id: number;
    title: string;
    brand: string;
    price: number;
    discountPercentage: number;
    thumbnail: string;
}

export type ProductState = ProductProps[] & { message?: string };

export interface ProductCardProps {
    product: ProductProps;
}

export interface FilterProps {
    limit?: number;
}

export interface LoadMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
}

export interface ServicesCardProps {
    scIconSrc?: string;
    scTitle?: string;
    scDescription?: string;
}

export interface PostCardProps {
    pcBackgroundImage?: string;
}