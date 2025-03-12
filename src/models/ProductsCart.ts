import { ProductsCartInterceptor } from "./ProductsCartInterceptor";
import { Cart } from "./Cart.interface";
import { Product, ProductCartItem } from "../types";

export class ProductsCart extends Cart<number, ProductCartItem, Product> {
    private static instance: ProductsCart;

    private constructor() {
        super();
    }

    public static getInstance(): ProductsCart {
        if (!ProductsCart.instance) {
            ProductsCart.instance = new ProductsCart()
                .setCartItems(new Map())
                .setStep(1)
                .setInterceptor(ProductsCartInterceptor.getInstance());
        }
        return ProductsCart.instance;
    }

    public setCartItems(items: Map<number, ProductCartItem>): this {
        this.cartItems = items;
        return this;
    }

    public setStep(value: number): this {
        this.step = value;
        return this;
    }

    public setInterceptor(inspector: ProductsCartInterceptor): this {
        this.inspector = inspector;
        return this;
    }

    increaseItemAmount(itemId: number, item: Product): void {
        this.inspector.increaseInterceptor(this.cartItems, (id) => {
            this.cartItems.get(id)!.amount += this.step;
        }, item, itemId);
    }

    decreaseItemAmount(itemId: number): void {
        this.inspector.decreaseInterceptor(this.cartItems, (id) => {
            this.cartItems.get(id)!.amount -= this.step;
        }, itemId);
    }

    hasItem(itemId: number): boolean {
        return this.cartItems.has(itemId);
    }

    removeItem(itemId: number): void {
        this.cartItems.delete(itemId);
    }

    getItem(itemId: number): ProductCartItem | undefined {
        return this.cartItems.get(itemId);
    }

    public getCartItems(): Map<number, ProductCartItem> {
        return this.cartItems;
    }

    public getCartItemsAsArray(): ProductCartItem[] {
        const arr: ProductCartItem[] = []
        this.cartItems.forEach((value) => {
            arr.push(value)
        })
        return arr;
    }


}
