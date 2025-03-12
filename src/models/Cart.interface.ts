import { Bill } from "../types";
import { CartInterceptor } from "./CartInterceptor.interface";

export abstract class Cart<K, V extends { amount: number; product: any; }, I> {
    protected cartItems: Map<K, V> = new Map();
    protected step: number = 1;
    protected inspector!: CartInterceptor<K, V, I>;

    abstract increaseItemAmount(itemId: K, item: I): void;
    abstract decreaseItemAmount(itemId: K): void;
    abstract hasItem(itemId: K): boolean;
    abstract removeItem(itemId: K): void;
    abstract getItem(itemId: K): V | undefined;
    public abstract getCartItems(): Map<K, V>;
    public abstract getCartItemsAsArray(): V[];

    calculateBill(): Bill {
        let totalItems = 0;
        let totalPrice = 0;

        this.cartItems.forEach((value) => {
            totalItems += value.amount;
            totalPrice += value.amount * value.product.price;
        })

        return { totalItems, totalPrice };
    }
}
