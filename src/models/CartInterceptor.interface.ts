export abstract class CartInterceptor<K, V, I> {
    protected maxAmount: number = 3;
    protected minAmount: number = 0;

    abstract increaseInterceptor(
        cartItems: Map<K, V>, callback: (id: K) => void, item: I, itemId?: K
    ): void;

    abstract decreaseInterceptor(
        cartItems: Map<K, V>, callback: (id: K) => void, itemId?: K
    ): void;
}
