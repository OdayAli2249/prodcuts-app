import { CartActionTypes } from "./enums";

export type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    rating: number;
    brand: string;
    color: string;
};

export type ProductCartItem = {
    product: Product;
    amount: number;
    canIncrease: boolean;
};


export type ApiCallMethod = 'GET'  // we only have get method for now

export type RequestConfig = {
    queryKey: string;
    url: string;
    method?: ApiCallMethod
}

export type RequestCollection = {
    [key: string]: RequestConfig;
}

export type UseApiCallOptions = {
    key?: string;
    url: string;
}

export type Bill = {
    totalItems: number;
    totalPrice: number;
}

export type CartAction = {
    type: CartActionTypes;
    payload: { product: Product };
};