import { USER_REQUEST, USER_SUCESS, USER_ERROR } from './Type';


const initialstate={
  Loading :true,
  users:[],
  error:""
}

export const userReducer = (state = initialState, action) => {
  switch (action.payload) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case USER_SUCESS:
      return {
        ...state,
        loading :false,
        users:action.payload,
        error:""
      };
      case USER_ERROR:
      return{
        ...state,
        loading:false,
        users:[],
        error:action.payload
      }
      return state
  }
};
