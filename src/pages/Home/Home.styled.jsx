import styled from "@emotion/styled";

export const Conteiner = styled.div`
  position: relative;
  display: flex;
  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;

export const ImgBg = styled.div`
  width: 300px;
  height: 315px;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #bcbff2;
  background-image: url("./src/assets/mainMobile.png");
  background-repeat: no-repeat;
  background-position: center center;
  @media (min-width: 1280px) {
    top: -122px;
    right: -80px;
    position: absolute;
    width: 700px;
    height: 929px;
    flex-shrink: 0;
    border-radius: 50px 0px 0px 50px;
    background-color: #bcbff2;
    background-image: url("./src/assets/mainIimg.png");
    background-repeat: no-repeat;
    background-position: center center;
  }
`;
