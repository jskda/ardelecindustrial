import MainMenu from './MainMenu';
import InnerMenu from './InnerMenu';
import { useLocation } from "react-router-dom";

export default function Header() {
const location = useLocation();
const isHome = location.pathname === "/";
  return (
      <header>
      {isHome ? <MainMenu /> : <InnerMenu />}
    </header>
  )
}