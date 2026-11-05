import axios from 'axios';

export default axios.create({
    baseURL:'http://16.16.215.198.8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
