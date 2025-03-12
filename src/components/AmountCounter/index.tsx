import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import { useCart } from "../../context/CartContext";
import { CartActionTypes } from "../../enums";
import { AmountCounterProps } from "./types";

export const AmountCounter = ({ product }: AmountCounterProps) => {
    const { state, dispatch } = useCart();
    const cartItem = state?.cartItems.get(product.id);

    return (
        <View style={styles.actions}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch?.({ type: CartActionTypes.DECREASE, payload: { product } })}
                disabled={!cartItem || cartItem.amount === 0}
            >
                <Ionicons name="remove-circle-outline" size={24} color={!cartItem ? "#ccc" : "#E63946"} />
            </TouchableOpacity>

            <Text style={styles.quantity}>{cartItem?.amount || 0}</Text>

            <TouchableOpacity
                style={styles.button}
                onPress={() => dispatch?.({ type: CartActionTypes.INCREASE, payload: { product } })}
                disabled={cartItem?.canIncrease === false}
            >
                <Ionicons name="add-circle-outline" size={24} color={cartItem?.canIncrease === false ? "#ccc" : "#2A9D8F"} />
            </TouchableOpacity>
        </View>
    );
};