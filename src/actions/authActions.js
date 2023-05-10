import axios from "axios";
import { LOGIN, API_PATH } from "../Utils";

const axiosInstance = axios.create({ baseURL: API_PATH });

export const signInAction = (signInData, navigate) => async (dispatch) => {
  try {
    const { data } = await axiosInstance.post("/users/signin", signInData);
    dispatch({ type: LOGIN, payload: data });
    navigate("/chat-ui/chat");
  } catch (error) {
    console.log(error);
  }
};

export const signUpAction = (signUpData, navigate) => async (dispatch) => {
  try {
    const { data } = await axiosInstance.post("/users/signup", signUpData);
    dispatch({ type: LOGIN, payload: data });
    navigate("/chat-ui/chat");
  } catch (error) {
    console.error(error);
  }
};
