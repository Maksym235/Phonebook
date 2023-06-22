import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import { UserMenu } from "../UserMenu/UserMenu";
import { Header } from "./AppBar.styled";
import logo from "../../assets/logo.svg";
//--------------REDUX-------------
import { useAuth } from "../hooks/useAuth";
import { NavLink } from "react-router-dom";

export function AppBar() {
  const { isLoggedIn } = useAuth();
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
