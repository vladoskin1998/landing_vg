import axios from "axios"

const $api = axios.create({})

const $authApi = axios.create({})

const $adminApi = axios.create({})

$adminApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})
