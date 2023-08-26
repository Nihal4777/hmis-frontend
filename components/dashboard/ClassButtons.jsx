import React from "react";
import { Link } from "react-router-dom";

const ClassButtons = ({ standard, classId, name }) => {
  return (
    <Link to={`/class-details/${classId}`} className="links">
      <div className="class_select_checkbox_button">
        <div className="class_button_box ">
          <div className="class_button_heading">{standard}</div>
          <div className="class_button_sub_heading">{name != null ? name:`No doctor assigned`}</div>
        </div>
      </div>
    </Link>
  );
};

export default ClassButtons;
