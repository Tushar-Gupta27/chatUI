import styled from "styled-components";

export const ChatWrapper = styled.div`
  height: calc(100vh - 65px);
  display: flex;
  gap: 5px;
  background-color: #def1ff;
`;

export const ChatMenu = styled.div`
  flex: 1;
  background-color: white;
  border-radius: 10px;
`;
export const ChatBox = styled.div`
  flex: 3;
  background-color: white;
  border-radius: 10px;
`;
export const ChatMenuWrapper = styled.div`
  height: 100%;
  overflow-y: auto;
  padding: 10px;
  /* background: red; */
  input {
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
    height: 40px;
    padding: 6px;
    border-radius: 5px;
  }
  p {
    margin: 8px 0;
    font-size: 1.1rem;
  }
  .msg {
    font-size: 0.9rem;
    color: #888;
    text-align: center;
  }
`;
export const ChatBoxWrapper = styled.div`
  position: relative;
  height: 100%;
  padding: 10px 2px 10px 10px;
  display: flex;
  flex-direction: column;
  .chatBoxTop {
    height: 100%;
    overflow-y: scroll;
    padding: 6px;

    ::-webkit-scrollbar {
      width: 5px;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #1877f2;
      border-radius: 10px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #1877f2;
    }
  }
  .chatBoxBottom {
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  span {
    position: absolute;
    width: 100%;
    top: 10%;
    padding: 0 15px;
    font-size: 3rem;
    color: rgba(0 0 0 / 0.3);
    text-align: center;
  }
`;
export const TextArea = styled.textarea`
  flex: 1 1 auto;
  height: 90px;
  padding: 10px;
`;
export const Send = styled.button`
  width: 85px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: teal;
  color: white;
`;
