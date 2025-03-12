import React, { useState } from "react";
import { View, FlatList, Text, TouchableOpacity, Alert } from "react-native";
import { CartListItem } from "../../components/CartListItem";
import { styles } from "./style";
import { BottomSheet } from "react-native-btr";
import { useCart } from "../../context/CartContext";
import { useNavigation } from "@react-navigation/native";

export const CartScreen = () => {
    const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
    const { state } = useCart();
    const navigation = useNavigation();

    const handleConfirm = () => {
        Alert.alert(
            "Congratulations!",
            "You have completed the task.",
            [
                {
                    text: "Save",
                    onPress: () => {
                        setBottomSheetVisible(false);
                        // navigation.navigate("Products");
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            {(state?.cartItemsArray?.length ?? 0) > 0 ? (
                <>
                    <FlatList
                        data={state?.cartItemsArray}
                        keyExtractor={(item) => item.product.id.toString()}
                        renderItem={({ item }) => <CartListItem product={item.product} />}
                    />
                    <TouchableOpacity
                        style={styles.viewBillButton}
                        onPress={() => setBottomSheetVisible(true)}
                    >
                        <Text style={styles.buttonText}>View Bill</Text>
                    </TouchableOpacity>

                    {/* Bottom Sheet */}
                    <BottomSheet
                        visible={isBottomSheetVisible}
                        onBackButtonPress={() => setBottomSheetVisible(false)}
                        onBackdropPress={() => setBottomSheetVisible(false)}
                    >
                        <View style={styles.bottomSheetContainer}>
                            <Text style={styles.billText}>{`Total Items: ${state?.bill.totalItems}`}</Text>
                            <Text style={styles.billText}>{`Total Price: $${state?.bill.totalPrice}`}</Text>

                            {/* Confirm Button */}
                            <TouchableOpacity style={styles.confirmButton} onPress={handleConfirm}>
                                <Text style={styles.confirmButtonText}>Confirm</Text>
                            </TouchableOpacity>
                        </View>
                    </BottomSheet>
                </>
            ) : (
                <Text style={styles.emptyText}>Your cart is empty.</Text>
            )}
        </View>
    );
};