import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import "../globals.scss";

const Layout = () => {
  return (
    <div className="layout_container">
      <Nav />
      <Outlet />
    </div>
  );
};

export default Layout;
