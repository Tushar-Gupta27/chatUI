import styled from "styled-components";

export const ConversationWrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  margin: 5px 0 8px;
  border-radius: 5px;
  :hover {
    background: rgba(231 231 231);
  }
`;
export const ConversationThumbnail = styled.div`
  --online: ${({ isOnline }) => (isOnline ? " #6cf70f" : "gray")};
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 12px;
  background: ${({ randomColor }) => `#${randomColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  border: 3px solid #55a7fa;
  /* ::before {
    content: "";
    position: absolute;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    top: -6px;
    right: -6px;
    background: var(--online);
    border: 2px solid white;
  } */
`;
export const ConversationName = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
`;
