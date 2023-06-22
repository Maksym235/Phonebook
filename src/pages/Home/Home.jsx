import { Conteiner } from "./Home.styled";
import { HomeInfo } from "../../components/HomeInfo/HomeInfo";
// import { useState } from "react";
// import { Modal } from "../../components/Modal/Modal";

export default function Home() {
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const togleModal = () => {
  //   setIsModalOpen(!isModalOpen);
  // };
  return (
    <Conteiner>
      <HomeInfo />
    </Conteiner>
  );
}
