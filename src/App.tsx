import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { CartProvider } from "./context/CartContext";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <BottomTabNavigator />
        </GestureHandlerRootView>
      </CartProvider>
    </QueryClientProvider>
  );
}
