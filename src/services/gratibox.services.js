import axios from 'axios';

const URL_API = process.env.REACT_APP_URL_API;

const signUp = (body) => {
  console.log(process.env.REACT_APP_URL_API);
  console.log('---');
  return axios.post(`${URL_API}/sign-up`, body);
};

export default signUp;
