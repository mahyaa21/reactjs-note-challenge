import axios from 'axios';
export const loginUser = async () => {
    try {
        const response = await axios.post("https://challenge.pushe.co/api/v1/auth/token", {
            email: 'mahyaka12@gmail.com',
            password: '123456789'
        });
        const data = await response;
        console.log('user srvc', data)
        return data;
    } catch (e) {
        console.log(e)
    }
}