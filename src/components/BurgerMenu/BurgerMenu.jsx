import { Navigation } from "../Navigation/Navigation";
import {
  Conteiner,
  CloseBtn,
  Wrap,
  LogOut,
  WrapperContent,
} from "./BurgerMenu.styled";
import { AiOutlineClose } from "react-icons/ai";
import logoMobile from "../../assets/logoMobile.png";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/Auth/authOperations";
export const BurgerMenu = ({ togleOpen }) => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  const handleClose = () => {
    togleOpen();
  };
  return (
    <Conteiner>
      <WrapperContent>
        <CloseBtn onClick={handleClose}>
          <AiOutlineClose color="#bcbff2" size={35} />
        </CloseBtn>
        <Wrap>
          <img src={logoMobile} alt="logo" />
        </Wrap>
        <Navigation />
        <LogOut type="button" onClick={handleLogOut}>
          Log out
        </LogOut>
      </WrapperContent>
    </Conteiner>
  );
};
