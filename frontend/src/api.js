import axios from 'axios';


const API_BASE = import.meta.env.VITE_API_BASE
const response = await fetch(`${API_BASE}/api/birthdays`);
const client = axios.create({ baseURL: API_BASE + '/api' });


export default client;
