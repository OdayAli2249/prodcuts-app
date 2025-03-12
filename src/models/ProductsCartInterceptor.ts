import { Product } from "../types";
import { CartInterceptor } from "./CartInterceptor.interface";

type ProductCartItem = {
    product: Product;
    amount: number;
    canIncrease: boolean;
};

export class ProductsCartInterceptor extends CartInterceptor<number, ProductCartItem, Product> {
    private static instance: ProductsCartInterceptor;

    private constructor() {
        super();
    }

    public static getInstance(): ProductsCartInterceptor {
        if (!ProductsCartInterceptor.instance) {
            ProductsCartInterceptor.instance = new ProductsCartInterceptor()
                .setMaxAmount(3)
                .setMinAmount(0);
        }
        return ProductsCartInterceptor.instance;
    }

    public setMaxAmount(value: number): this {
        this.maxAmount = value;
        return this;
    }

    public setMinAmount(value: number): this {
        this.minAmount = value;
        return this;
    }

    increaseInterceptor(
        cartItems: Map<number, ProductCartItem>, callback: (id: number) => void, item: Product,
        itemId: number,

    ): void {
        const cartItem = cartItems.get(itemId);
        if (!cartItem) {
            cartItems.set(itemId, { product: item, amount: 1, canIncrease: true });
            return
        }

        callback(itemId);

        if (cartItem.amount >= this.maxAmount) {
            cartItem.canIncrease = false;
        }
    }

    decreaseInterceptor(
        cartItems: Map<number, ProductCartItem>, callback: (id: number) => void, itemId: number
    ): void {
        callback(itemId);
        const cartItem = cartItems.get(itemId);

        if (cartItem && cartItem.amount < this.maxAmount) {
            cartItem.canIncrease = true;
        }
        if (cartItem && cartItem?.amount <= this.minAmount) {
            cartItems.delete(cartItem.product.id);
        }
    }
}
