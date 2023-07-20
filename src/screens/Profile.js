// src/screens/Profile.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Profile = ({ id }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.successText}>Success!</Text>
            <Text style={styles.messageText}>Your post request was successful.</Text>
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
    successText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#007AFF', // You can choose any color you like
    },
    messageText: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default Profile;
