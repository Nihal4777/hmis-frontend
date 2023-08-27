import React, { useEffect, useState } from "react";
import LeftHeading from "./dashboard/LeftHeading";
// import MainDonut from "./dashboard/MainDonut";
// import SubDonut from "./dashboard/SubDonut";
// import EmptySubDonut from "./dashboard/EmptySubDonut";
import ClassButtons from "./dashboard/ClassButtons";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
const DashboardContent = () => {
  const [classData, setCLassData] = useState([]);
  const [chartData, setChartData] = useState([]);

  if (!Cookies.get("token")) return <div>Not Valid</div>;
  const fetchClass = async () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")} `,
    };
    const fetchClass = await fetch(
      `${import.meta.env.VITE_API}api/`,
      {
        method: "get",
        headers,
      }
    );
    const response = await fetchClass.json();
    setCLassData(response);
  };
  var d = new Date();
  var date = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();
  if (month < 10 && date < 10) var fullDate = year + "-0" + month + "-0" + date;
  else if (month < 10) var fullDate = year + "-0" + month + "-" + date;
  else var fullDate = year + "-" + month + "-" + date;
  const fetchPresence = async () => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")} `,
    };
    const presence = await fetch(
      `${import.meta.env.VITE_API}api/`,
      {
        method: "get",
        headers,
      }
    );
    const response = await presence.json();
    setChartData(response);
  };
  useEffect(() => {
    // fetchPresence();
    // fetchClass();
  }, []);
  return (
    <div className="container-fluid dashboard" style={{ marginLeft: "10px" }}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <LeftHeading title={Cookies.get("userName")} />
        </div>
      </div>
      <div className="row d-flex justify-content-evenly p-2">
        <div className="col-xl-4 col-md-12 custom_boxshadow m-1 ">
          {/* {chartData.data ? (
            <MainDonut
              present={chartData.sumPresentCount}
              absent={chartData.overall_total - chartData.sumPresentCount}
            />
          ) : (
            <ClassDetails_EmptyMainDonut />
          )} */}
        </div>
        <div
          className="col-xl-7 col-md-12 custom_boxshadow m-1"
          style={{ zIndex: "" }}
        >
          <div
            className="d-flex flex-wrap justify-content-start"
            style={{
              height: "200px",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            {chartData.data &&
              chartData.data.map((item, key) => {
                return (
                  item.present_count != null ?
                  <>
                    <SubDonut
                      key={key}
                      present={item.present_count}
                      absent={item.total_students - item.present_count}
                      title1={`${item.std}-${item.section}`}
                      title2={`(${new Date(item.created_at).getHours().toString()}:${new Date(item.created_at).getMinutes().toString()})`}
                    />
                  </>
                  : 
                  <>
                  <EmptySubDonut
                  key={key}
                  title1={`${item.std}-${item.section}`}
                  title2={`(${new Date(item.created_at).getHours().toString()}:${new Date(item.created_at).getMinutes().toString()})`}
                />
                  </>
                );
              })}
          </div>
        </div>
      </div>
      <div className="d-flex mt-3 flex-wrap justify-content-start">
        {classData &&
          classData.map((item, key) => {
            return (
              <ClassButtons
                key={key}
                standard={`${item.std}-${item.section}`}
                classId={item.id}
                name={item.name}
              />
            );
          })}
      </div>
    </div>
  );
};

export default DashboardContent;
