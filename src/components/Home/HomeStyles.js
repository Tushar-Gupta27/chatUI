import styled from "styled-components";

export const HomeWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px 70px;
  gap: 40px;
`;
export const Greeting = styled.h1`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 3.6rem;
  color: rgba(0 0 0 / 40%);
`;
export const FormContainer = styled.form`
  width: 400px;
  padding: 20px 15px;
  border-radius: 8px;
  box-shadow: 2px 2px 4px 0 rgba(0 0 0 / 40%);
  h2 {
    text-align: center;
    font-size: 1.4rem;
    color: rgba(0 0 0 / 50%);
  }
`;
export const FieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 10px 0 0;
`;
export const MultiField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  ${FieldWrapper} {
    flex: 1;
  }
`;
export const TextField = styled.input`
  width: 100%;
  border: none;
  outline: none;
  height: 40px;
  border-radius: 10px;
  background: #f0f7fc;
  padding: 4px 10px;
  font-size: 1.1rem;
  font-weight: 200;
  border-bottom: 0.5px solid rgba(31 65 99/ 70%);
  ::placeholder {
    color: #adaaaa;
  }
`;
export const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 400;
  color: rgba(0 0 0 / 50%);
  margin: 5px 4px;
`;
export const Submit = styled.button`
  display: block;
  margin: 20px auto 0 auto;
  padding: 8px 20px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 1.1rem;
  background: #4fa5fc;
  cursor: pointer;
  color: white;
`;

export const ChangeMethod = styled.p`
  padding: 5px 0;
  margin: 14px 0 0;
  text-align: right;
  color: #1877f2;
  transition: 150ms;
  &:hover {
    transform: scale(1.02);
  }
`;
