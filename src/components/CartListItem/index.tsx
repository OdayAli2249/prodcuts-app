import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";
import { AmountCounter } from "../AmountCounter";
import { CartListItemProps } from "./types";

export const CartListItem = ({ product }: CartListItemProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{product.name}</Text>
                <AmountCounter product={product} />
            </View>
        </View>
    );
};
