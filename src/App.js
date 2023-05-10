import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import Chat from "./components/ChatPage/Chat";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "./Utils";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    var retreived = JSON.parse(localStorage.getItem("chatUser"));
    if (retreived) {
      dispatch({ type: LOGIN, payload: retreived });
      navigate("/chat");
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
