import axios from "axios";

import {baseURL, TOKEN} from "../constants";


const apiService = axios.create({
    baseURL,
    headers: {
        Authorization: 'Bearer ' + TOKEN
    }
})

export {
    apiService
}