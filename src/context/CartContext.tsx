import React, { createContext, useReducer, useContext } from "react";
import { ProductsCart } from "../models/ProductsCart";
import { Bill, CartAction, ProductCartItem } from "../types";
import { CartActionTypes } from "../enums";

type ContextState = {
    cartItemsArray: ProductCartItem[];
    cartItems: Map<number, ProductCartItem>;
    bill: Bill;
}

type ContextValue = {
    state?: ContextState;
    dispatch?: React.Dispatch<CartAction>;
}

const cartInstance = ProductsCart.getInstance();

const cartReducer = (state: ContextState, action: CartAction) => {
    switch (action.type) {
        case CartActionTypes.INCREASE:
            cartInstance.increaseItemAmount(action.payload.product.id, action.payload.product!);
            break;
        case CartActionTypes.DECREASE:
            cartInstance.decreaseItemAmount(action.payload.product.id);
            break;
        case CartActionTypes.DELETE:
            cartInstance.removeItem(action.payload.product.id);
            break;
        default:
            return state;
    }
    return {
        cartItemsArray: cartInstance.getCartItemsAsArray(),
        cartItems: cartInstance.getCartItems(),
        bill: cartInstance.calculateBill(),
    };
};

const CartContext = createContext<ContextValue>({});

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, {
        cartItemsArray: cartInstance.getCartItemsAsArray(),
        cartItems: cartInstance.getCartItems(),
        bill: cartInstance.calculateBill(),
    });

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
