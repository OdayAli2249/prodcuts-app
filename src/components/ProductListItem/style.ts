import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 12,
        borderRadius: 10,
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 10,
    },
    info: {
        flex: 1,
        marginLeft: 12,
        justifyContent: "center",
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#333",
    },
    brand: {
        fontSize: 14,
        color: "#777",
    },
    price: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#E63946",
        marginTop: 4,
    },
});
