import axios from 'axios'

const wgf = axios.create({
    baseURL: '/api'
})

export default wgf