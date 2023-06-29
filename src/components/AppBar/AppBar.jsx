import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { Header } from "./AppBar.styled";
import logo from "../../assets/logo.svg";
//--------------REDUX-------------
import { useAuth } from "../hooks/useAuth";
import { NavLink, useLocation } from "react-router-dom";

export function AppBar() {
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
