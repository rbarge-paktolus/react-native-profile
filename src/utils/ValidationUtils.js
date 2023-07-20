// validationUtils.js

// Function to validate the username
export const validateUsername = (username) => {
    if (username.trim() === '') {
        return {
            valid: false,
            message: 'Username is required',
        };
    }

    // Add more validation rules as needed

    return {
        valid: true,
        message: '',
    };
};

// Function to validate the password
export const validatePassword = (password) => {
    if (password.trim() === '') {
        return {
            valid: false,
            message: 'Password is required',
        };
    }

    // Add more validation rules as needed

    return {
        valid: true,
        message: '',
    };
};
