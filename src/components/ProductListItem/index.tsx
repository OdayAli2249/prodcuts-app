import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./style";
import { AmountCounter } from "../AmountCounter";
import { ProductListItemProps } from "./types";

export const ProductListItem = ({ product }: ProductListItemProps) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: product.image }} style={styles.image} />
            <View style={styles.info}>
                <Text style={styles.name}>{product.name}</Text>
                <Text style={styles.brand}>{product.brand}</Text>
                <Text style={styles.price}>${product.price.toFixed(2)}</Text>
                <AmountCounter product={product} />
            </View>
        </View>
    );
};
