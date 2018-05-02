import axios from "axios";

import authHeader from "../_helpers/auth-header";

const handleResponse = response =>
    response.status === 200
        ? response.data
        : Promise.reject(response.statusText);

// const login = (username, password) =>
//     axios.post("/auth/login", { username, password }).then(handleResponse);

const login = ({ username, password }) => {
    const data = JSON.stringify({ password, username });

    axios.post("/auth/login", data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
};

// const signup = data =>
//     axios.post("/auth/register", { ...data }).then(handleResponse);

const signup = data => {
    const data = JSON.stringify(data);

    axios.post("/auth/register", data, {
        headers: {
            "Content-Type": "application/json"
        }
    });
};

const getCurrentUser = () =>
    axios.get("/api/users/me/", { headers: authHeader() }).then(handleResponse);

const userService = {
    login,
    signup,
    getCurrentUser
};

export default userService;
