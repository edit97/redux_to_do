import axios from "axios";

export const request = () => {
    const requestData = {
        url: `https://jsonplaceholder.typicode.com/todos`,
        method: 'GET',
    };

    return axios.request(requestData)
};
