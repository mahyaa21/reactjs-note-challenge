import axios from 'axios';
function api() {
    return {
        loginUser: (data: any) => {
            const options = {
                data: {
                    email: 'mahyaka12@gmail.com',
                    password: '123456789'
                }
            }
            const url = 'https://challenge.pushe.co/api/v1/auth/token';
            const requestConfig: RequestConfig = {
                headers: {
                    'Authorization': `jwt ${data.token}`
                },
            };
            let instance = axios.create(requestConfig);
            return  instance.post(url, data, { ...requestConfig, ...options })
        }
    };

}
export default api();