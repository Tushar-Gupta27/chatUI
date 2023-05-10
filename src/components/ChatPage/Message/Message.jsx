import React, { useState, useLayoutEffect } from "react";
import {
  MessageDate,
  MessageImg,
  MessageText,
  MessageWrapper,
} from "./MessageStyles";
import { format } from "timeago.js";
import axios from "axios";
import { API_PATH } from "../../../Utils";

function Message({ messageItem, own }) {
  // CAN ADD USER IMAGE BY FETCHING IT UPDATE LATER MAYBE
  const [messager, setMessager] = useState({});

  useLayoutEffect(() => {
    async function getMessager() {
      try {
        const { data } = await axios.get(
          `${API_PATH}/users?userId=${messageItem.sender}`
        );
        setMessager(data[0]);
      } catch (error) {
        console.log(error);
      }
    }
    getMessager();
  }, []);
  if (Object.entries(messager).length !== 0) {
    return (
      <MessageWrapper own={own}>
        <div className="messageTop">
          <MessageImg randomColor={messager._id.substring(10, 16)}>
            {messager?.firstName[0]}
          </MessageImg>
          <MessageText>{messageItem.text}</MessageText>
        </div>
        <MessageDate>
          <p>{`${format(messageItem.createdAt)} • ${messager.firstName} ${
            messager.lastName
          }`}</p>
        </MessageDate>
      </MessageWrapper>
    );
  }
}

export default Message;
