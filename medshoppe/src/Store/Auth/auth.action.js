import { AUTH_ERROR, AUTH_LOADING, AUTH_LOGOUT, AUTH_SIGNIN_SUCCESS, AUTH_SIGNUP_SUCCESS } from "./auth.types";
import axios from 'axios';
const host = 'https://crimson-indri-sock.cyclic.app';
export const signinAPI = (data) => async (dispatch) => {
   
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${host}/user/signin`, data);
        dispatch({ type: AUTH_SIGNIN_SUCCESS, token: res.data.AccessToken, user: res.data.username});
        // console.log(res.data.AccessToken);

        return res.data;
    }
    catch (e) {
        dispatch({ type: AUTH_ERROR })
        return e.response.data;
    }
}
export const signupAPI = (data) => async (dispatch) => {
    console.log(data);
    dispatch({ type: AUTH_LOADING });
    try {
        let res = await axios.post(`${host}/user/signup`, data);
        dispatch({ type: AUTH_SIGNUP_SUCCESS, token: res.data.token, user: res.data.user });
        return res.data;
    }
    catch (e) {
        dispatch({ type: AUTH_ERROR })
        return e.response.data;
    }
}
export const logoutAPI = () => {
    return {type:AUTH_LOGOUT}
}







