import React, { useState } from "react";
import {
  HomeWrapper,
  FormContainer,
  TextField,
  Submit,
  FieldWrapper,
  Label,
  Greeting,
  MultiField,
  ChangeMethod,
} from "./HomeStyles";
import { useDispatch } from "react-redux";
import { signInAction, signUpAction } from "../../actions/authActions";
import { useNavigate } from "react-router-dom";
function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [isSignUp, setIsSignUp] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signUpAction(data, navigate));
    } else {
      dispatch(signInAction(data, navigate));
    }
  }
  return (
    <HomeWrapper>
      <Greeting>Welcome to Chat It Out!!</Greeting>
      <FormContainer onSubmit={handleSubmit}>
        <h2>Enter your Details</h2>
        {isSignUp && (
          <>
            <MultiField>
              <FieldWrapper>
                <Label htmlFor="firstName">First Name</Label>
                <TextField
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                  id="firstName"
                  placeholder="First Name"
                />
              </FieldWrapper>
              <FieldWrapper>
                <Label htmlFor="lastName">Last Name</Label>
                <TextField
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                  id="lastName"
                  placeholder="Last Name"
                />
              </FieldWrapper>
            </MultiField>
          </>
        )}
        <FieldWrapper>
          <Label htmlFor="email">Email</Label>
          <TextField
            type="text"
            name="email"
            value={data.email}
            onChange={handleChange}
            id="email"
            placeholder="Email"
          />
        </FieldWrapper>
        <FieldWrapper>
          <Label htmlFor="password">Password</Label>
          <TextField
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            id="password"
            placeholder="Password"
          />
        </FieldWrapper>
        <Submit type="submit">{isSignUp ? "SignUp" : "Login"}</Submit>
        <ChangeMethod onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp
            ? "Already have an account? Login."
            : "Don't have an account? Sign Up."}
        </ChangeMethod>
      </FormContainer>
    </HomeWrapper>
  );
}

export default Home;
