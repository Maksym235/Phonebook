import styled from "@emotion/styled";

export const Conteiner = styled.div`
  z-index: 1000;
  position: absolute;
  top: -94px;
  left: -20px;
  width: 100vw;
  height: 90vh;
  background-color: #1b1b1b;
  background-image: url("./assets/bgLines3x.png");
  background-size: cover;
`;

export const WrapperContent = styled.div`
  padding: 20px;
`;

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  position: absolute;
  padding: 0;
  margin-top: 10px;
  background-color: transparent;
  border: none;
`;

export const LogOut = styled.button`
  cursor: pointer;
  z-index: 1000;
  display: inline-flex;
  height: 49px;
  padding: 13px 59px;
  justify-content: center;
  align-items: center;
  border: none;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 50px;
  font-size: 17px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background-color: #bcbff2;
  color: #000;
`;
