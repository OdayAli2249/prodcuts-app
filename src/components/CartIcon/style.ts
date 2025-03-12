import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        position: "relative",
        padding: 10,
    },
    badge: {
        position: "absolute",
        top: 5,
        right: 5,
        backgroundColor: "red",
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    badgeText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
    },
});
