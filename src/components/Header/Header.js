import React from "react";
import { HeaderContainer, HeaderTitle, OptionsContainer } from "./HeaderStyles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LOGOUT } from "../../Utils";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>Chat It Out</HeaderTitle>
        <OptionsContainer>
          <h4>
            {user?.firstName} {user?.lastName}
          </h4>
          {user ? (
            <h4
              onClick={() => {
                dispatch({ type: LOGOUT });
                navigate("/");
              }}
            >
              Logout
            </h4>
          ) : null}
        </OptionsContainer>
      </HeaderContainer>
    </>
  );
}

export default Header;
