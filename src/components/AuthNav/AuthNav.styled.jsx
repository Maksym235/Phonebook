import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Conteiner = styled.nav`
  display: flex;
  gap: 15px;
  margin-left: auto;
  margin-right: 80px;
`;

export const LogIn = styled(NavLink)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 13px 59px;
  gap: 10px;
  background: #1b1b1b;
  border-radius: 50px;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  color: #ffffff;

  border: 1px solid tomato;
`;
