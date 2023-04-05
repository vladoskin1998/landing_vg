import axios from "axios"

const href =
    window.location.hostname === "localhost"
        ? "http://localhost:5001/"
        : window.location.href

const $api = axios.create({})

export const $authApi = axios.create({
    baseURL: href,
})

const $adminApi = axios.create({})

$adminApi.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})
