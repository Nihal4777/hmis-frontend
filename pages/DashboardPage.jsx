import React from "react";
import SideBar from "../components/SideBar";
import DashboardContent from "../components/DashboardContent";
import Cookies from "js-cookie";

const DashboardPage = ({title}) => {
  if(!(Cookies.get("token"))) return <div>Not Valid</div>
  const fetchAPI = async () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    };
    const fetchClass = await fetch(
      `${import.meta.env.VITE_API}api/getClasses`,
      {
        method: "get",
        headers,
      }
    );
    const d = await fetchClass.json();
  };
  return (
    <div style={{overflowX: "hidden"}}>
      <div className="dashboard_header" style={{ position: "fixed", width: "100%", zIndex: "999"}}>{title}</div>
      <div className="row">
        <div className="col-md-1" style={{ width: "6.333333%", zIndex: "999" }}>
          <SideBar btn='' active={1}/>
        </div>
        <div className="col-md-11" style={{ marginTop: "50px" }}>
          <DashboardContent />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
