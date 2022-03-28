import {USER_REQUEST,USER_SUCESS,USER_ERROR} from "./Type"

export const userRequest=()=>{
return{
  type:USER_REQUEST
}
}

export const userSucess=(users)=>{
  return {
    type:USER_SUCESS,
    payload:users
  }
}


export const userFailed=(error)=>{
  return {
    type:USER_ERROR,
    payload:error
  }
}