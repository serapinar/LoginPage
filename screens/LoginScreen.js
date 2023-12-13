import {StyleSheet, Text, View, KeyboardAvoidingView, Image} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {auth} from "../firebase";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
            const user = userCredentials.user;
            console.log("USER", user.email);
        })
            .catch( (error)=> alert (error.message));
    };
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}/>
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry value={password}
                    onChangeText={text => setPassword(text)}/>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUp} style={[styles.button, styles.outlineButton]}>
                    <Text style={styles.outlineButtonText}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e16702",
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
    },
    tinyLogo: {
        width: 150,
        height: 150,
        marginBottom:20
    },
});
