import styled from "styled-components";

export const MessageWrapper = styled.div`
  --imgOrder: ${({ own }) => (own ? "2" : "1")};
  --textOrder: ${({ own }) => (own ? "1" : "2")};
  --messageClr: ${({ own }) => (!own ? "#1877f2" : "rgb(245 241 241)")};
  --messageText: ${({ own }) => (own ? " black" : "white")};

  margin-top: 8px;
  display: flex;
  flex-direction: column;
  align-items: ${({ own }) => (own ? "flex-end" : "flex-start")};
  .messageTop {
    display: flex;
    align-items: center;
  }
  :first-child {
    margin-top: 20px;
  }
`;
export const MessageImg = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  margin: 0 12px;
  background: ${({ randomColor }) => `#${randomColor}`};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  order: var(--imgOrder);
`;
export const MessageText = styled.p`
  font-size: 0.9rem;
  padding: 10px;
  background-color: var(--messageClr);
  border-radius: 20px;
  color: var(--messageText);
  max-width: 500px;
  order: var(--textOrder);
`;
export const MessageDate = styled.div`
  font-size: 0.8rem;
  padding: 3px 10px;
  margin: 0 8px;
`;
