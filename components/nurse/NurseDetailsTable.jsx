import React, { useEffect, useRef, useState } from "react";
import InputFields from "./InputFields";
import Cookies from "js-cookie";
import { toast } from "react-toastify";

const NurseDetailsTable = () => {
    const closeEdit = useRef(null);
  const [classes, setClasses] = useState({});
  const standard = document.getElementById("stdSelected");
  const section = document.getElementById("sectionSelected");
  const [std, setStd] = useState([]);
  const [btnLoader, setBtnLoader] = useState(false);
  const [viewData, setViewData] = useState([]);
  const [sectionSelected, setSectionSelected] = useState([]);
  const [fetchSectionID, setFetchSectionID] = useState([]);
  // if (!Cookies.get("token")) return <div>Not Valid</div>;
  // const fetchSTD = async () => {
  //   const headers = {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${Cookies.get("token")}`,
  //   };
  //   const fetchClass = await fetch(
  //     `${import.meta.env.VITE_API}api/getStandards/`,
  //     {
  //       method: "get",
  //       headers,
  //     }
  //   );
  //   const d = await fetchClass.json();
  //   d.data.map((e) => setStd((arr) => [...arr, e]));
  // };
  // const fetchSECTION = async () => {
  //   setSectionSelected([]);
  //   const headers = {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${Cookies.get("token")}`,
  //   };
  //   const fetchDivisions = await fetch(
  //     `${import.meta.env.VITE_API}api/getDivisions/${standard.value}`,
  //     {
  //       method: "get",
  //       headers,
  //     }
  //   );
  //   const d = await fetchDivisions.json();
  //   setFetchSectionID(d.data);
  //   const [sectionId] = d.data.map((e) =>
  //     setSectionSelected((arr) => [...arr, e])
  //   );
  // };
  // useEffect(() => {
  //   fetchSTD();
  // }, []);
  // const changeStandardSelected = (e) => {
  //   fetchSECTION();
  // };

  const closeRef = useRef(null);
  const [teacher, setTeacher] = useState([]);
  const [viewId, setViewId] = useState("");
  const [updatedData, setUpdatedData] = useState({
    reg_id: "",
    name: "",
    subject: "",
    dob: "",
    gender: "",
    Emergency_contact: "",
    whatsapp_contact: "",
    address_1: "",
    city: "",
    zip: "",
    class_id: "",
  });
  const fetchAPI = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    };
    const teachers = await fetch(
      `${import.meta.env.VITE_API}api/teachers`,
      {
        method: "get",
        headers,
      }
    );
    const t = await teachers.json();
    setTeacher(t.data);
  };
  useEffect(() => {
    // fetchCLasses();
    // fetchAPI();
  }, [viewId]);

  // Delte Teacher
  const deleteTeacher = async () => {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    };
    const students = await fetch(
      `${import.meta.env.VITE_API}api/teacher/${viewId}`,
      {
        method: "delete",
        headers,
      }
    );
    const response = await students.json();
    if (response.status === "success") {
      toast.success("Teacher Deleted Successfully");
      setViewId("");
    } else {
      toast.error(response.message);
    }
  };

  // Update Teacher
  const updateTeacher = async () => {
    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${Cookies.get("token")}`,
    };
    const body = JSON.stringify({
      ...updatedData,
    });
    const students = await fetch(
      `${import.meta.env.VITE_API}api/teacher/${viewId}`,
      {
        method: "put",
        headers,
        body,
      }
    );
    const response = await students.json();
    if (response.status === "success") {
      toast.success("Teacher Updated Successfully");
      closeEdit.current.click();
      setViewId("");
      setBtnLoader(false);
    } else {
      toast.error("Teacher not updated");
      setBtnLoader(false);
    }
  };
  // const fetchCLasses = async () => {
  //   const headers = {
  //     Accept: "application/json",
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${Cookies.get("token")}`,
  //   };
  //   const fetchClass = await fetch(
  //     `${import.meta.env.VITE_API}api/getClasses`,
  //     {
  //       method: "get",
  //       headers,
  //     }
  //   );
  //   const d = await fetchClass.json();
  //   var count = 0;
  //   let obj = {};
  //   d.map((item, key) => {
  //     obj = { ...obj };
  //     obj[item.id] = item.std + " " + item.section;
  //     count++;
  //     if (count == d.length) {
  //       setClasses(obj);
  //     }
  //   });
  // };
  return (
    <>
      <tbody>
        {teacher
          .filter((val) => {
            if (searchTerm === "") return teacher;
            else if (
              val.reg_id == searchTerm ||
              val.user.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item, key) => {
            return (
              <tr key={key}>
                <td>{item.reg_id}</td>
                <td>{item.user.name}</td>
                <td>{item.subject}</td>
                <td>{classes[item.class_id]}</td>
                <td>
                  +91 {item.whatsapp_contact}{" "}
                  <a
                    className="links"
                    target="_blank"
                    href={`https://wa.me/+91${item.whatsapp_contact}`}
                  >
                    <i className="table_bi bi bi-whatsapp"></i>
                  </a>
                </td>
                <td className="d-flex">
                  <i
                    data-bs-toggle="offcanvas"
                    data-bs-target="#viewOffcanvas"
                    aria-controls="viewOffcanvas"
                    className="table_bi bi bi-eye mx-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      teacher
                        .filter((item1) => item1.id === item.id)
                        .map((item, key) => {
                          setViewData({ ...item, name: item.user.name });
                        });
                      setViewId(item.id);
                    }}
                  ></i>
                  <i
                    data-bs-toggle="offcanvas"
                    data-bs-target="#editOffcanvas"
                    aria-controls="editOffcanvas"
                    className="table_bi bi bi-pen mx-2"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      teacher
                        .filter((item1) => item1.id === item.id)
                        .map((item, key) => {
                          setUpdatedData({ ...item, name: item.user.name });
                        });
                      setViewId(item.id);
                    }}
                  ></i>
                  <i
                    className="table_bi bi bi-trash mx-2"
                    style={{ cursor: "pointer" }}
                    data-bs-toggle="modal"
                    data-bs-target="#deleteModal"
                    onClick={() => {
                      setViewId(item.id);
                    }}
                  ></i>
                </td>
              </tr>
            );
          })}
      </tbody>

      {viewData && (
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="viewOffcanvas"
          aria-labelledby="viewOffcanvasLabel"
          style={{ width: "50%" }}
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="viewOffcanvasLabel">
              View Teacher Details
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <div className="top_bar d-flex justify-content-center align-items-center">
              <div className="profile_image">
                {viewData.profile_pic !== null ? (
                  <img
                    src={`${import.meta.env.VITE_API}public/${viewData.profile_pic}`}
                    alt={viewData.profile_pic}
                    height={150}
                    style={{ clipPath: "circle(at 50% 35%)" }}
                  />
                ) : (
                  <div className="profile_box">
                    <div className="profile_box_text">
                      <p>{viewData.name.charAt(0).toUpperCase()}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div>
              <div>Academic Details</div>
              <div className="row">
                <InputFields title="Registration Id" value={viewData.reg_id} />
                <InputFields title="Subject" value={viewData.subject} />
                <InputFields
                  title="Standard"
                  value={classes[viewData.class_id]}
                />
              </div>
              <div className="divider"></div>
              <div className="row">
                <div>Personal Details</div>
                <InputFields title="Full Name" value={viewData.name} />
                <InputFields title="Gender" value={viewData.gender} />
                <InputFields title="Date of Birth" value={viewData.dob} />
                <InputFields title="City" value={viewData.city} />
                <InputFields title="Address" value={viewData.address_1} />
                <InputFields title="PIN-code" value={viewData.zip} />
                <InputFields
                  title="Emergency Contact"
                  value={viewData.Emergency_contact}
                />
                <InputFields
                  title="WhatsApp number"
                  value={viewData.whatsapp_contact}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="editOffcanvas"
        data-bs-backdrop="static"
        aria-labelledby="editOffcanvasLabel"
        style={{ width: "50%" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="editOffcanvasLabel">
            Edit Teacher Details
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
            ref={closeEdit}
          ></button>
        </div>
        <div className="offcanvas-body">
          <div>
            <div>Academic Details</div>
            <div className="row">
              <div className="col-md-6">
                <div className="input_heading">Registration Id</div>
                <div className="input_fields">
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Write here"
                    value={updatedData.reg_id}
                    onChange={(e) => {
                      setUpdatedData({
                        ...updatedData,
                        reg_id: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_heading">Subject</div>
                <div className="input_fields">
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Write here"
                    value={updatedData.subject}
                    onChange={(e) => {
                      setUpdatedData({
                        ...updatedData,
                        subject: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_heading">Standard</div>
                <div className="input_fields">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    id="stdSelected"
                    // onChange={changeStandardSelected}
                  >
                    {std &&
                      std.map((data, key) => {
                        return (
                          <option key={key} value={data} selected>
                            {data}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_heading">Section</div>
                <div className="input_fields">
                  <select
                    defaultValue="Default"
                    className="form-select"
                    aria-label="Default select example"
                    id="sectionSelected"
                    onChange={(e) => {
                      fetchSectionID
                        .filter((item) => item.section == section.value)
                        .map((i) => {
                          setUpdatedData({
                            ...updatedData,
                            class_id: i.id,
                          });
                        });
                    }}
                  >
                    <option value="Default" selected>
                      Select Section
                    </option>
                    {sectionSelected &&
                      sectionSelected.map((data, key) => {
                        return (
                          <option key={key} value={data.section}>
                            {data.section}
                          </option>
                        );
                      })}
                  </select>
                </div>
              </div>
            </div>
            <div className="divider"></div>
            <div className="row">
              <div>Personal Details</div>
              <div className="col-md-6">
                <div className="input_heading">Full Name</div>
                <div className="input_fields">
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Write here"
                    value={updatedData.name}
                    onChange={(e) => {
                      setUpdatedData({
                        ...updatedData,
                        name: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_heading">Gender</div>
                <div className="input_fields">
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Write here"
                    value={updatedData.gender}
                    onChange={(e) => {
                      setUpdatedData({
                        ...updatedData,
                        gender: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_heading">Date of Birth</div>
                <div className="input_fields">
                  <input
                    type="date"
                    placeholder="Write here"
                    value={updatedData.dob}
                    onChange={(e) => {
                      var d = new Date(e.target.value);
                      d.getMonth() + 1 < 10
                        ? setUpdatedData({
                            ...updatedData,
                            dob: `${d.getDate()}-0${
                              d.getMonth() + 1
                            }-${d.getFullYear()}`,
                          })
                        : setUpdatedData({
                            ...updatedData,
                            dob: `${d.getDate()}-${
                              d.getMonth() + 1
                            }-${d.getFullYear()}`,
                          });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_heading">City</div>
                <div className="input_fields">
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Write here"
                    value={updatedData.city}
                    onChange={(e) => {
                      setUpdatedData({
                        ...updatedData,
                        city: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_heading">Address</div>
                <div className="input_fields">
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Write here"
                    value={updatedData.address_1}
                    onChange={(e) => {
                      setUpdatedData({
                        ...updatedData,
                        address_1: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_heading">PIN-code</div>
                <div className="input_fields">
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Write here"
                    value={updatedData.zip}
                    onChange={(e) => {
                      setUpdatedData({
                        ...updatedData,
                        zip: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_heading">Emergency Contact</div>
                <div className="input_fields">
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Write here"
                    value={updatedData.Emergency_contact}
                    onChange={(e) => {
                      setUpdatedData({
                        ...updatedData,
                        Emergency_contact: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="input_heading">WhatsApp number</div>
                <div className="input_fields">
                  <input
                    type="text"
                    className="w-100"
                    placeholder="Write here"
                    value={updatedData.whatsapp_contact}
                    onChange={(e) => {
                      setUpdatedData({
                        ...updatedData,
                        whatsapp_contact: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="clear_btn"
            data-bs-dismiss="offcanvas"
          >
            Close
          </button>
          <button
            type="button"
            className="submit_btn mx-2"
            onClick={(e) => {
              updateTeacher();
              setBtnLoader(true);
            }}
            style={{ background: "rgba(168, 38, 130, 1)", color: "white" }}
          >
            {btnLoader ? (
              <>
                <span
                  class="spinner-border spinner-border-sm me-3"
                  aria-hidden="true"
                ></span>
                <span role="status">Loading...</span>
              </>
            ) : (
              `Add Teacher`
            )}
          </button>
        </div>
      </div>

      <div
        className="modal fade"
        id="deleteModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered"style={{ minWidth: "100vw", backdropFilter: "blur(3px)" }}>
          <div className="modal-content d-block mx-auto" style={{ background: "#fff", width: "40vw" }}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="deleteModalLabel">
                Delete Student
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Confirm Delete</div>
            <div className="modal-footer">
              <button
                type="button"
                className="clear_btn"
                data-bs-dismiss="modal"
                ref={closeRef}
              >
                Close
              </button>
              <button
                type="button"
                className="submit_btn bg-danger"
                onClick={() => {
                  deleteTeacher();
                  closeRef.current.click();
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NurseDetailsTable;
