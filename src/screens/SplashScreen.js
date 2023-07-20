// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
    // Simulate a splash screen effect using useEffect
    const navigation = useNavigation();

    useEffect(() => {
        // Replace the setTimeout with actual tasks or data loading
        setTimeout(() => {
            // Navigate to the Login screen after a delay
            // You can use navigation library (e.g., React Navigation) for this
            // For simplicity, let's just log a message here
            console.log('Navigating to Login...');
            navigation.navigate('Login');
        }, 2000); // 2000ms = 2 seconds (adjust as per your preference)
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.splashText}>My App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    splashText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#007AFF', // You can choose any color you like
    },
});

export default SplashScreen;
