import axios from 'axios';
// const API = axios.create({ baseURL: 'http://localhost:5000/api' });
const API = axios.create({ baseURL: 'https://w3-task-1-backend.onrender.com/api' });
export default API;

// import.meta.env.VITE_BACKEND_URL
// import axios from 'axios';

// const API = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL,
// });

// export default API;
