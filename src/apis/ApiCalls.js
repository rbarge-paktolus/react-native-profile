import axios from 'axios';

const baseURL = 'https://api.example.com'; // Replace with your API base URL

export const loginAPI = async (username, password) => {
    try {
        // Make a POST request to the login API endpoint with username and password
        const response = await axios.post(baseURL, {
            username,
            password,
        });

        // Assuming the API returns the response data with a token
        const { token } = response.data;

        // You can perform any additional handling of the API response here before returning it
        return { token }; // Return the token or any other data from the response as needed
    } catch (error) {
        // Handle API errors, such as invalid credentials, network errors, etc.
        throw error;
    }
};
