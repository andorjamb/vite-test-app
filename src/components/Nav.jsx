import { NavLink } from "react-router-dom";
import "../globals.scss";

const Nav = () => {
  return (
    <div className="nav_container">
      {/*    <NavLink to="/dashboard/Report">Report</NavLink>
      <NavLink to="/dashboard/Chartview">Chart</NavLink> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </div>
  );
};

export default Nav;
