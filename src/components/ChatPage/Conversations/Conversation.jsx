import React, { useEffect, useState } from "react";
import {
  ConversationWrapper,
  ConversationName,
  ConversationThumbnail,
} from "./ConversationStyles";
import { useSelector } from "react-redux";
import axios from "axios";
import {API_PATH} from "../../../Utils"

function Conversation({ conversationItem, changeConvo, onlineUsers }) {
  const { user } = useSelector((state) => state.auth);
  const [friend, setFriend] = useState({});
  // console.log(onlineUsers, friend);

  useEffect(() => {
    async function getUser() {
      try {
        const friendId = conversationItem.members.find((m) => m !== user?._id);
        const { data } = await axios.get(
          `${API_PATH}/users?userId=${friendId}`
        );
        setFriend(data[0]);
      } catch (err) {
        console.log(err);
      }
    }

    getUser();
  }, [user?._id, conversationItem]);
  if (Object.entries(friend).length !== 0) {
    return (
      <ConversationWrapper
        title={
          onlineUsers?.includes(friend._id)
            ? `${friend.firstName} is Online`
            : `${friend.firstName} is Offline`
        }
        onClick={() => {
          changeConvo(conversationItem);
        }}
      >
        <ConversationThumbnail
          isOnline={onlineUsers?.includes(friend._id)}
          randomColor={friend._id.substring(10, 16)}
        >
          {friend.firstName[0]}
        </ConversationThumbnail>
        <ConversationName>
          {friend.firstName + " " + friend.lastName}
        </ConversationName>
      </ConversationWrapper>
    );
  } else return null;
}

export default Conversation;
