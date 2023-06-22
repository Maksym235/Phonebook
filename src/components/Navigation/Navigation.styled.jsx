import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
export const Conteiner = styled.div`
  display: flex;
  gap: 60px;
  margin-left: 100px;
  padding: 28px 0px;
`;
export const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 600;
  font-size: 17px;
  line-height: 26px;
  display: flex;
  align-items: flex-end;
  color: #ffffff;
`;
