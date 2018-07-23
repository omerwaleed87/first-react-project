import axios from "axios";

const axiousInstance = axios.create({
    baseURL : "https://person-app-37cd4.firebaseio.com",
});

export default axiousInstance;