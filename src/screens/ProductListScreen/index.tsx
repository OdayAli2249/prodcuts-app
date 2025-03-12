import React, { useCallback } from "react";
import { View, FlatList, Text, ActivityIndicator, RefreshControl } from "react-native";
import { ProductListItem } from "../../components/ProductListItem";
import { Product } from "../../types";
import { styles } from "./style";
import useApiCall from "../../hooks/useApiCall";
import { useQueryClient } from "@tanstack/react-query";
import { productsRequestCollection } from "../../api/products";

export const ProductListScreen = () => {
    const queryClient = useQueryClient();
    const { data: products, isLoading, isError } = useApiCall<Product[]>(productsRequestCollection.getProducts);

    const onRefresh = useCallback(() => {
        queryClient.invalidateQueries({ queryKey: [productsRequestCollection.getProducts.queryKey] });
    }, [queryClient]);

    return (
        <View style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#2A9D8F" />
            ) : isError ? (
                <Text style={styles.errorText}>Failed to load products. Please try again.</Text>
            ) : products?.length === 0 ? (
                <Text style={styles.emptyText}>No products available.</Text>
            ) : (
                <FlatList
                    data={products}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <ProductListItem product={item} />}
                    refreshControl={
                        <RefreshControl refreshing={isLoading} onRefresh={onRefresh} />
                    }
                />
            )}
        </View>
    );
};
