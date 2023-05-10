import { LOGIN, LOGOUT } from "../Utils";

const authReducer = (authData = { user: null }, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("chatUser", JSON.stringify(action.payload));
      return { ...authData, user: action.payload };
    case LOGOUT:
      localStorage.removeItem("chatUser");
      return { user: null };
    default:
      return authData;
  }
};

export default authReducer;
