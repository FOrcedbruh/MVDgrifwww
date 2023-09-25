import axios from 'axios';




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://abf5-154-47-24-154.ngrok-free.app',
    // Authorization: 'Token 3ae7399c2fb938265eb2c46438e8f5862ac3f776'
})


  


export {instance};