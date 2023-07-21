// TextInputComponent.js
import React, { useState } from 'react';
import { TextInput, StyleSheet, View ,Text} from 'react-native';

const TextInputComponent = ({ placeholder, value, onChangeText, error, secureTextEntry }) => {
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
    },
    errorText: {
        color: 'red',
    },
});

export default TextInputComponent;
