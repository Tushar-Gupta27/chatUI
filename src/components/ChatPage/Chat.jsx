import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  ChatBox,
  ChatBoxWrapper,
  ChatMenu,
  ChatMenuWrapper,
  ChatWrapper,
  TextArea,
  Send,
} from "./ChatStyles";
import Conversation from "./Conversations/Conversation";
import NewConversation from "./NewConversations/NewConversation";
import Message from "./Message/Message";
import { useSelector } from "react-redux";
import axios from "axios";
import { API_PATH } from "../../Utils";
import { io } from "socket.io-client";

export default function Chat() {
  const { user } = useSelector((state) => state.auth);
  const scrollRef = useRef();
  const socket = useRef();
  const [convos, setConvos] = useState([]);
  const [online, setOnline] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState({});
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [arrivalMsg, setArrivalMsg] = useState({});
  //STARTING THE CONNECTION
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    //GETTING LATEST MESSAGE
    socket.current.on("getMessage", (data) => {
      setArrivalMsg({
        sender: data.sender,
        text: data.text,
        createdAt: Date.now(),
      });
      console.log(arrivalMsg);
    });
  }, []);
  // console.log(socket);

  //ADDING TO MESSAGE LIST
  useEffect(() => {
    arrivalMsg &&
      currentChat?.members?.includes(arrivalMsg.sender) &&
      setMessages((prev) => [...prev, arrivalMsg]);
  }, [currentChat, arrivalMsg]);
  //ADDING TO CONNECTION LIST
  useEffect(() => {
    if (user !== null) socket.current.emit("addUser", user?._id);
    socket.current.on("getUsers", (userList) => {
      console.log(userList);
      setOnline(userList.map((u) => u.userid));
    });
  }, [user]);
  // here ws stands for WebSocket

  //USE EFFECT TO GET CONVOS and ALL Users
  useLayoutEffect(() => {
    async function getConversations(id) {
      try {
        const { data } = await axios.get(`${API_PATH}/conversation/${id}`);
        setConvos(data);
      } catch (error) {
        console.log(error);
      }
    }
    async function getAllUsers() {
      try {
        const { data } = await axios.get(`${API_PATH}/users/`);
        setAllUsers(data);
      } catch (err) {
        console.log(err);
      }
    }

    getConversations(user?._id);
    getAllUsers();
  }, [user?._id]);
  //USE EFFECT TO GET MESSAGES OF CONVO
  useEffect(() => {
    async function getMessages(id) {
      try {
        const { data } = await axios.get(`${API_PATH}/message/${id}`);
        setMessages(data);
        setNewMessage("");
      } catch (error) {
        console.log(error);
      }
    }
    if (currentChat) getMessages(currentChat._id);
  }, [currentChat]);
  //USE EFFECT TO SCROLL
  useEffect(() => {
    // console.log(scrollRef.current);
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  //HANDLING MESSAGE SEND
  async function handleSend() {
    const toPost = {
      conversationId: currentChat._id,
      sender: user?._id,
      text: newMessage,
    };
    const receiverid = currentChat.members.find((m) => m !== user?._id);
    socket.current.emit("sendMessage", {
      senderid: user?._id,
      receiverid: receiverid,
      text: newMessage,
    });
    try {
      const { data } = await axios.post(`${API_PATH}/message/`, toPost);
      setMessages((prev) => [...prev, data]);
      setNewMessage("");
    } catch (err) {
      console.log(err);
    }
  }
  //allUsers.length!==0 &&
  return (
    <ChatWrapper>
      <ChatMenu>
        <ChatMenuWrapper>
          {/* <input type="text" placeholder="Search for friends" /> */}
          <strong>
            <p>Your Conversations</p>
          </strong>
          {convos.conversations?.length !== 0 ? (
            convos.conversations?.map((convo) => (
              <Conversation
                key={convo._id}
                onlineUsers={online}
                changeConvo={setCurrentChat}
                conversationItem={convo}
              />
            ))
          ) : (
            <p className="msg">You don't have any conversations</p>
          )}
          <strong>
            <p>Other People you may know</p>
          </strong>
          <div>
            <NewConversation
              userList={allUsers}
              convoMembers={convos.convoMembers}
              changeConvo={setCurrentChat}
            />
          </div>
        </ChatMenuWrapper>
      </ChatMenu>
      <ChatBox>
        <ChatBoxWrapper>
          {currentChat?._id ? (
            <>
              <div className="chatBoxTop">
                {messages.length !== 0
                  ? messages.map((m, idx) =>
                      idx === messages.length - 1 ? (
                        <div ref={scrollRef} key={m._id}>
                          <Message
                            messageItem={m}
                            own={m.sender === user?._id}
                          />
                        </div>
                      ) : (
                        <div key={m._id}>
                          <Message
                            messageItem={m}
                            own={m.sender === user?._id}
                          />
                        </div>
                      )
                    )
                  : "You don't have a message history"}
              </div>
              <div className="chatBoxBottom">
                <TextArea
                  placeholder="Write Something.."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                ></TextArea>
                <Send onClick={handleSend}>Send</Send>
              </div>
            </>
          ) : (
            <span>Select a conversation to chat!</span>
          )}
        </ChatBoxWrapper>
      </ChatBox>
    </ChatWrapper>
  );
}
