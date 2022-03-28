import { USER_REQUEST, USER_SUCESS, USER_ERROR } from './Type';

const initialstate = {
  Loading: true,
  users: [],
  error: '',
};

export const userReducer = (state = initialstate, action) => {
  switch (action.payload) {
    case USER_REQUEST:
      return {
        ...state,
        Loading: true,
      };
    case USER_SUCESS:
      return {
        ...state,
        Loading: false,
        users: action.payload,
        error: '',
      };
    case USER_ERROR:
      return {
        ...state,
        Loading: false,
        users: [],
        error: action.payload,
      };
      return state;
  }
};
