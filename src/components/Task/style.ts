import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    taskContainer: {
        backgroundColor: '#262626',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333333',
        width: '100%',
        height: 64,
        marginBottom: 10,
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    taskContainerChecked: {
        backgroundColor: '#333333',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#333333',
        width: '100%',
        height: 64,
        marginBottom: 10,
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    taskText: {
        color: '#F2F2F2',
        fontSize: 18,
    },

    taskTextChecked: {
        color: '#808080',
        fontSize: 18,
        textDecorationLine: 'line-through'
    }
})