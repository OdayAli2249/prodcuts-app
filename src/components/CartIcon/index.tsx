import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import { useCart } from "../../context/CartContext";
import { CartIconProps } from "./types";

export const CartIcon = ({ onPress }: CartIconProps) => {
    const { state } = useCart();
    const totalItems = state?.bill.totalItems ?? 0;

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Ionicons name="cart" size={28} color="black" />
            {totalItems > 0 && (
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{totalItems}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};
