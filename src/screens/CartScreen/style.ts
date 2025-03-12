import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f9f9f9",
    },
    emptyText: {
        textAlign: "center",
        fontSize: 18,
        marginTop: 50,
        color: "#777",
    },
    viewBillButton: {
        backgroundColor: "#2A9D8F",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        margin: 8,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    bottomSheetContainer: {
        backgroundColor: "#fff",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    billText: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    confirmButton: {
        backgroundColor: "#2A9D8F",
        padding: 10,
        borderRadius: 8,
        marginTop: 10,
        alignItems: "center",
    },
    confirmButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});
