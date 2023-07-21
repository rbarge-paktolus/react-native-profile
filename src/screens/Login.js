import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions , Text} from 'react-native';
import TextInputComponent from '../components/TextInput';
import ButtonComponent from '../components/Button';
import { validateUsername, validatePassword } from '../utils/ValidationUtils';
import { loginAPI } from '../apis/ApiCalls';

import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigation = useNavigation();
    
    const handleLogin = async () => {
        // Implement your login logic here
        const usernameValidation = validateUsername(username);
        const passwordValidation = validatePassword(password);

        if (!usernameValidation.valid) {
            // Display the username validation error message
            console.log('Username validation error:', usernameValidation.message);
            setUsernameError(usernameValidation.message);
            return;
        }

        if (!passwordValidation.valid) {
            // Display the password validation error message
            console.log('Password validation error:', passwordValidation.message);
            setPasswordError(passwordValidation.message);
            return;
        }

        setUsernameError('');
        setPasswordError('');

        console.log('Username:', username);
        console.log('Password:', password);

        try {
            // Call the loginAPI function with username and password
            // const response = await loginAPI(username, password);
            // console.log('Login response:', response);
            // Handle the API response and perform any necessary actions
            navigation.navigate('Dashboard');
        } catch (error) {
            console.error('Error while logging in:', error);
            // Handle the error, show error message, etc.
        }
    };

    return (
        <View style={styles.container}>
            {/* Logo */}
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/google.png')} // Replace with your logo image
                    style={styles.logo}
                />
            </View>

            <View style={styles.buttonContainer}>
                <TextInputComponent
                    placeholder="Username"
                    value={username}
                    onChangeText={setUsername}
                    error={usernameError}
                    secureTextEntry={false}
                />
                <TextInputComponent
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    error={passwordError}
                    secureTextEntry={true}
                />
                <ButtonComponent title="Login" onPress={handleLogin} />
                {/* Text below the button */}
                <View style={styles.textContainer}>
                    <Text style={styles.signupText}>Don't have an account?</Text>
                    <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
                </View>
            </View>
        </View>
    );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: windowWidth * 0.5, // Set the width of the logo to half of the screen width
        height: windowWidth * 0.5, // Set the height proportionally
        resizeMode: 'contain', // Adjust the image size to fit the container
    },
    
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
    },

    textContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        justifyContent: 'space-between', 
        marginTop: 10,
    },
    forgotPasswordText: {
        color: 'blue',
    },
    signupText: {
        color: 'blue',
    },
});

export default LoginScreen;
