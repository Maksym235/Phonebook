import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { Header } from "./AppBar.styled";
import logo from "../../assets/logo.svg";
import logoMobile from "../../assets/logoMobile.png";
//--------------REDUX-------------
import { useAuth } from "../hooks/useAuth";
import { NavLink, useLocation } from "react-router-dom";
import { useMatchMedia } from "../hooks/useMatchMedia";
export function AppBar() {
  const { isMobile } = useMatchMedia();
  const { pathname } = useLocation();
  const { isLoggedIn } = useAuth();
  console.log(pathname);
  console.log(isLoggedIn);
  if (pathname === "/verify") {
    return (
      <Header style={{ marginTop: "20px" }}>
        <NavLink to="/">
          <img src={logo} alt="logo" />
        </NavLink>
      </Header>
    );
  }
  if (isMobile) {
    return (
      <Header isMobile>
        <button>Bu</button>
        <NavLink to="/">
          <img src={logoMobile} alt="logo" />
        </NavLink>
        <button>user</button>
      </Header>
    );
  }
  return (
    <Header>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}
