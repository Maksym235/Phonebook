import { Conteiner, ImgBg } from "./Home.styled";
import { HomeInfo } from "../../components/HomeInfo/HomeInfo";
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu";
import { useMatchMedia } from "../../components/hooks/useMatchMedia";
import { useState } from "react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const { isMobile } = useMatchMedia();

  const togleOpen = () => {
    setIsOpen((state) => !state);
  };

  return (
    <Conteiner>
      <button onClick={togleOpen}>open</button>
      {isOpen && <BurgerMenu togleOpen={togleOpen} />}
      {/* <ImgBg></ImgBg> */}
    </Conteiner>
  );
}
