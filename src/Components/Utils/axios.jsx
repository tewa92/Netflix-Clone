import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
});

export default instance;










// import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.themoviedb.org/3",
//   params: {
//     api_key: "c6bd18fd4f7b608bfa30602ff0d9fce2",
//   },
// });
// export default instance;
