import axios from 'axios';




const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://98ef-46-188-120-131.ngrok-free.app/',
    // Authorization: 'Token 3ae7399c2fb938265eb2c46438e8f5862ac3f776'
})


  


export {instance};