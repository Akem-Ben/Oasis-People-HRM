import axios from "axios";
import config from "./axiosLinkToBackend";
import { useNavigate } from "react-router-dom";

const { apiHost } = config().secrets;

const customAxios = axios.create({
    baseURL: `${apiHost}`,
});

const navigate = useNavigate()

const responseHandler = (response) => {
    if (response?.status === 403) {
        localStorage.clear();
        navigate("/");
    }
    return response;
};

const errorHandler = (error) => {
    if (error.response?.status === 403) {
        localStorage.clear();
        navigate("/");
    }
    return Promise.reject(error);
};

customAxios.interceptors.request.use(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (request) => {
        const token = `Bearer ${localStorage.getItem("token") || ""}`;
        if (token) {
            request.headers = {
                ...request.headers,
                Authorization: token,
            };
        }

        return request;
    },
    (error) => Promise.reject(error)
);

customAxios.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error)
);

// Step-4: Export the newly created Axios instance to be used in different locations.
export default customAxios;