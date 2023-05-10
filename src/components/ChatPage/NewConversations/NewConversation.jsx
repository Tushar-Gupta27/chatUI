import React, { useEffect, useState } from "react";
import {
  ConversationWrapper,
  ConversationName,
  ConversationThumbnail,
} from "./ConversationStyles";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_PATH } from "../../../Utils";

function NewConversation({ userList, convoMembers, changeConvo }) {
  const { user } = useSelector((state) => state.auth);
  const [restUsers, setRestUsers] = useState([]);
  function formattingUsers() {
    const temp1 = userList.filter((u) => u._id !== user?._id);
    const temp = temp1.filter((u) => !convoMembers.includes(u._id));
    setRestUsers(temp);
  }
  useEffect(() => {
    formattingUsers();
  }, [user?._id, userList]);

  async function handleNewConvo(secondid) {
    const { data } = await axios.post(`${API_PATH}/conversation/`, {
      senderId: user?._id,
      receiverId: secondid,
    });
    changeConvo(data);
  }
  return (
    <>
      {restUsers.length !== 0 &&
        restUsers.map((r) => (
          <ConversationWrapper
            key={r._id}
            onClick={() => handleNewConvo(r._id)}
          >
            <ConversationThumbnail randomColor={r._id.substring(10, 16)}>
              {r.firstName[0]}
            </ConversationThumbnail>
            <ConversationName>{`${r.firstName} ${r.lastName}`}</ConversationName>
          </ConversationWrapper>
        ))}
    </>
  );

  // else return null;
}

export default NewConversation;
