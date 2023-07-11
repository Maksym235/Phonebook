import styled from "@emotion/styled";
import { MdAttachEmail } from "react-icons/md";
export const EmailIncon = styled(MdAttachEmail)`
  padding-top: 20px;
`;

export const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  background-image: url("/public/assets/FormBg.jpg");
  background-size: cover;
  border-radius: 50px;
  width: 800px;
`;

export const Title = styled.h2`
  color: #1b1b1b;
`;

export const Text = styled.p`
  color: #1b1b1b;
  padding: 0px 20px;
  font-size: 24px;
`;
