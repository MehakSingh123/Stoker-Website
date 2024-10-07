import React from "react";
import { Route, Routes } from "react-router-dom";
import Funds from "./Funds";
import Holdings from "./Holdings";
import NotFound from "./NotFound";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContextProvider";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
        <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
