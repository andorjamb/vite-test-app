import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import "../globals.scss";

const Dashboard = () => {
  return (
    <div className="dashboard_container">
      <Sidebar />
      <Outlet  />
    </div>
  );
};

export default Dashboard;
