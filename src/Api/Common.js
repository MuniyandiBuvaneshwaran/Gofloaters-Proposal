import axios from 'axios';

// Define the base URL of the API
const API_BASE_URL = 'https://gofloaters.firebaseapp.com';

export const fetchProposalData = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/proposal/${id}`);
        return response.data; // Return the data
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; // Throw the error to handle it in the component
    }
};
