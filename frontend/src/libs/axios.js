import axios from 'axios';

/*
서버에 요청을 날리는 axios instance
https://yamoo9.github.io/axios/guide/api.html#%EC%9D%B8%EC%8A%A4%ED%84%B4%EC%8A%A4-%EC%83%9D%EC%84%B1
*/

const apiRequest = axios.create({
  baseURL: 'https://j8a303.p.ssafy.io/api', // 요청 날릴 서버 주소
  // withCredentials: true, // 쿠키 사용을 위해 설정
});

// // request 인터셉터
// apiRequest.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

// // response 인터셉터
// apiRequest.interceptors.response.use(
//   (response) => {
//     console.log('response', response);
//     return response;
//   },
//   async (error) => {
//     console.log('error', error);
//   },
// );

export default apiRequest;
