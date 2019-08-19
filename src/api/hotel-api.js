import axios from 'axios';

export const getHotels = async () => {
    return await axios.get('https://jsonplaceholder.typicode.com/users');
};