import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID qjF7NUPq9PCE7VUBTuof42wwuaM4ct33i5IQT2y2Z7k'
    }
});