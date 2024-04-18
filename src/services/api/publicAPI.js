import axios from "axios";

const publicAPI = axios.create({
    baseURL:"https://api.allodoc.md/users"
})

export default publicAPI;