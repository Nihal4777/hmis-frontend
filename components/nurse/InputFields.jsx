import React from "react";

const InputFields = ({title, value}) => {
  return (
    <div className="col-md-6 ">
      <div className="input_heading offcanvas_academic_details_row">{title}</div>
      <div className="input_fields">
        <input
          type="text"
          className="w-100"
          placeholder="Write here"
          readOnly
          value={value}
        />
      </div>
    </div>
  );
};

export default InputFields;
