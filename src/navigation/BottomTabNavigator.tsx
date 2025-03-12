import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { ProductListScreen } from "../screens/ProductListScreen";
import { CartScreen } from "../screens/CartScreen";
import { Ionicons } from "@expo/vector-icons";
import { CartIcon } from "../components/CartIcon";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route, navigation }) => ({
                    tabBarIcon: ({ color, size }) => {
                        return (
                            <Ionicons
                                name={route.name === "Products" ? "list-outline" : "cart-outline"}
                                size={size}
                                color={color}
                            />
                        );
                    },
                    tabBarActiveTintColor: "#2A9D8F",
                    tabBarInactiveTintColor: "gray",
                    headerStyle: { backgroundColor: "#2A9D8F" },
                    headerTintColor: "white",
                    tabBarStyle: {
                        paddingBottom: 5,
                        height: 60,
                        borderTopWidth: 1,
                        borderTopColor: "#ddd",
                    },
                    headerRight: () => <CartIcon onPress={() => navigation.navigate("Cart")} />, // Add CartIcon to headerRight
                })}
            >
                <Tab.Screen name="Products" component={ProductListScreen} />
                <Tab.Screen name="Cart" component={CartScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTabNavigator;
