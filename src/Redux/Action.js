import { USER_REQUEST, USER_SUCESS, USER_ERROR } from './Type';
import axios from 'axios';
export const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

export const userSucess = (users) => {
  console.log('usersucces==>', users);
  return {
    type: USER_SUCESS,
    payload: users,
  };
};

export const userFailed = (error) => {
  return {
    type: USER_ERROR,
    payload: error,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        const user = response.data;
        dispatch(userSucess(user));
        // console.log('user===>', user);
      })
      .catch((error) => {
        const errorm = error.message;
        dispatch(errorm);
      });
  };
};
