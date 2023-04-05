import axios from "axios"

const href =
    window.location.hostname === "localhost"
        ? "http://localhost:5001/"
        : window.location.href

const $api = axios.create({
    baseURL: href + 'user/',
})

export const $authApi = axios.create({
    baseURL: href,
})

export const $adminApi = axios.create({
    baseURL: href + 'admin/',
})

$adminApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})
