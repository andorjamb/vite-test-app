import { NavLink } from "react-router-dom";
import "../globals.scss";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <h2>Sidebar</h2>
      <NavLink to="/dashboard/report">
        <h3>Reports</h3>
      </NavLink>
      <ul>
        <li>Person A</li>
        <li>Person B</li>
      </ul>
      <NavLink to="/dashboard/allcharts">
        <h3>AllCharts</h3>
      </NavLink>
      <NavLink to="/dashboard/chartview">
        <h3>Chartview</h3>
      </NavLink>
    </div>
  );
};

export default Sidebar;
