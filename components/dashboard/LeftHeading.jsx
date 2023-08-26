import { useEffect, useState } from 'react';
import React from "react";

const LeftHeading = ({ title }) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var d = new Date();
  var date = d.getDate();
  var day = d.getDay();
  var month = d.getMonth();
  var year = d.getFullYear();
  const [greeting, setGreeting] = useState("");
  useEffect(()=>{
    var time = d.getHours();
    if (time < 12) {
      setGreeting("Good Morning");
    }else if (time < 16) {
      setGreeting("Good Afternoon");
    }else if(time < 20) {
      setGreeting("Good Evening");
    }

  },[])


  return (
    <div className="left_heading">
      <p className="dashboard_left_heading">{greeting}, {title}</p>
      <p className="dashboard_left_subheading">
      {`${months[month]} ${date}, ${year}`}
        <span className="dashboard_left_subheading_day"> {`${days[day]}`}</span>
      </p>
    </div>
  );
};

export default LeftHeading;
