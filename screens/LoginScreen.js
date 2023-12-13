import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function LoginScreen() {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} placeholder="Email" />
                <TextInput style={styles.input} placeholder="Şifre" />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.outlineButton]}>
                    <Text style={styles.outlineButtonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#e16702",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginTop: 5,
        borderRadius: 10,
    },
    buttonContainer: {
        width: '60%',
        marginTop: 40,
    },
    button: {
        backgroundColor: '#0782F9',
        padding: 15,
        alignItems: 'center',
        borderRadius: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: "bold",
    },
    outlineButton: {
        backgroundColor: 'white',
        marginTop: 5,
    },
    outlineButtonText: {
        color: '#0782F9',
        fontSize: 16,
    }
});
