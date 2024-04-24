import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./views/Layout.jsx";
import Home from "./pages/Home.jsx";
import ChartView from "./views/ChartView.jsx";
import { Reports } from "./pages/Reports.jsx";
import AllCharts from "./views/AllCharts.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import DashboardLanding from "./views/DashboardLanding.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />}></Route>
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="/dashboard/" element={<DashboardLanding />}></Route>
        <Route path="/dashboard/chartview" element={<ChartView />}></Route>
        <Route path="/dashboard/allcharts" element={<AllCharts />}></Route>
        <Route path="/dashboard/allcharts:year" element={<AllCharts />}></Route>
        <Route path="/dashboard/report" element={<Reports />}></Route>
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
