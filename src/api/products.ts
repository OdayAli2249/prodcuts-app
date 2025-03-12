import { RequestCollection } from "../types";

export const productsRequestCollection: RequestCollection = {
    getProducts: {
        url: "/products",
        queryKey: 'PRODUCTS',
        method: 'GET'
    }
};
