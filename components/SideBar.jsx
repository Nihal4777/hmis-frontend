import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import dashboardImg from "../assets/Images/dashboard.png";
import { toast } from "react-toastify";

const SideBar = ({ btn, modal, active, t}) => {
  const [sidebarToggle, setSidebarToggle] = useState("locked");
  const [sidebarHoverable, setSidebarHoverable] = useState("hoverable");
  const [sidebarClose, setSidebarClose] = useState("close");
  const navigate = useNavigate();

  // Function to toggle the lock state of the sidebar
  const toggleLock = () => {
    // If the sidebar is not locked
    if (sidebarToggle === "locked") {
      setSidebarToggle("");
      setSidebarHoverable("hoverable"); // TO SET HOVERABLE EFFECT SET IT TO NULL STRING
    } else {
      setSidebarHoverable("hoverable");
      setSidebarToggle("locked");
    }
  };
  // Function to hide the sidebar when the mouse leaves
  const hideSidebar = () => {
    if (sidebarHoverable === "hoverable") setSidebarClose("close");
  };
  // Function to show the sidebar when the mouse enter
  const showSidebar = () => {
    if (sidebarHoverable === "hoverable") setSidebarClose("");
  };
  // Function to show and hide the sidebar
  const toggleSidebar = () => {
    if (sidebarClose === "close") setSidebarClose("");
    else setSidebarClose("close");
  };
  // If the window width is less than 800px, close the sidebar and remove hoverability and lock
  useEffect(() => {
    return () => {
      if (window.innerWidth < 800) {
        setSidebarClose("close");
        setSidebarToggle("");
        setSidebarHoverable("");
      }
    };
  }, [window.innerWidth]);
  const logoutAPI = async () => {
    const event = await fetch(
      `${import.meta.env.VITE_API}api/logout`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    const response = await event.json();
    if (response.status == "success") {
      Cookies.remove("token");
      Cookies.remove("userName");
      navigate("/");
      toast.success("Logged out successfully");
    }
  };
  return (
    <>
      <nav
        className={`sidebar ${sidebarToggle} ${sidebarClose}`}
        onMouseEnter={showSidebar}
        onMouseLeave={hideSidebar}
        style={{ zIndex: "99999" }}
      >

        <div className="menu_container">
          <div className="menu_items">
            <ul className="menu_item">

              <li className={active == 1 ? "list active" : "list"}>
                <Link
                  to="/dashboard"
                  className="link d-flex align-items-center"
                  style={{ padding: "10px 0" }}
                > 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="50"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M17.5 7.5H7.5V17.5H17.5V7.5Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M32.5 7.5H22.5V17.5H32.5V7.5Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.5 22.5H7.5V32.5H17.5V22.5Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M32.5 22.5H22.5V32.5H32.5V22.5Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {/* <img src={dashboardImg}alt="" /> */}
                  <span>Dashboard</span>
                </Link>
              </li>

              <li className={active == 2 ? "list active" : "list"}>
                <Link
                  to="/teacher-details"
                  className="link d-flex align-items-center"
                  style={{ padding: "10px 0" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M5 10V22.5"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.47375 33.7499C9.72293 31.831 11.4314 30.2544 13.4442 29.163C15.4569 28.0716 17.7103 27.5 20 27.5C22.2896 27.5 24.543 28.0716 26.5558 29.163C28.5686 30.2544 30.277 31.831 31.5262 33.7498"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35 10L20 15L5 10L20 5L35 10Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M26.4589 12.8469C27.6038 14.0997 28.3597 15.6583 28.6345 17.333C28.9093 19.0077 28.6912 20.7262 28.0067 22.2792C27.3222 23.8321 26.2008 25.1525 24.7792 26.0794C23.3576 27.0064 21.6971 27.4999 20 27.4999C18.3029 27.4999 16.6424 27.0064 15.2208 26.0794C13.7992 25.1525 12.6779 23.8321 11.9933 22.2792C11.3088 20.7262 11.0907 19.0077 11.3655 17.333C11.6403 15.6583 12.3962 14.0997 13.5411 12.8469"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Teachers</span>
                </Link>
              </li>
              <li className={active == 3 ? "list active" : "list"}>
                <Link
                  to="/student-listing"
                  className="link d-flex align-items-center"
                  style={{ padding: "10px 0" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M20 25C23.4518 25 26.25 22.2018 26.25 18.75C26.25 15.2982 23.4518 12.5 20 12.5C16.5482 12.5 13.75 15.2982 13.75 18.75C13.75 22.2018 16.5482 25 20 25Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M32.5 6.25H7.5C6.80964 6.25 6.25 6.80964 6.25 7.5V32.5C6.25 33.1904 6.80964 33.75 7.5 33.75H32.5C33.1904 33.75 33.75 33.1904 33.75 32.5V7.5C33.75 6.80964 33.1904 6.25 32.5 6.25Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.02881 33.75C9.59592 31.2644 10.9903 29.045 12.9834 27.4554C14.9766 25.8657 17.4506 25 20 25C22.5495 25 25.0234 25.8657 27.0166 27.4554C29.0098 29.045 30.4041 31.2644 30.9713 33.75"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Students</span>
                </Link>
              </li>
              <li className={active == 4 ? "list active" : "list"}>
                <Link
                  to="/calender"
                  className="link d-flex align-items-center"
                  style={{ padding: "10px 0" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M32.5 6.25H7.5C6.80964 6.25 6.25 6.80964 6.25 7.5V32.5C6.25 33.1904 6.80964 33.75 7.5 33.75H32.5C33.1904 33.75 33.75 33.1904 33.75 32.5V7.5C33.75 6.80964 33.1904 6.25 32.5 6.25Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.5 3.75V8.75"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.5 3.75V8.75"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.25 13.75H33.75"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Calender</span>
                </Link>
              </li>
              <li className={active == 5 ? "list active" : "list"}>
                <Link
                  to="/manageclasses"
                  className="link d-flex align-items-center"
                  style={{ padding: "10px 0" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M20 28.125C23.4518 28.125 26.25 25.3268 26.25 21.875C26.25 18.4232 23.4518 15.625 20 15.625C16.5482 15.625 13.75 18.4232 13.75 21.875C13.75 25.3268 16.5482 28.125 20 28.125Z"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30.625 18.125C32.0806 18.1238 33.5164 18.462 34.8184 19.1129C36.1204 19.7638 37.2526 20.7093 38.1252 21.8743"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M1.87451 21.8747C2.74708 20.7095 3.87935 19.7639 5.18138 19.113C6.4834 18.4621 7.91929 18.1238 9.37495 18.125"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.0054 33.7499C11.8265 32.0633 13.1053 30.6416 14.6957 29.647C16.2861 28.6524 18.1242 28.125 20 28.125C21.8758 28.125 23.7138 28.6524 25.3043 29.647C26.8947 30.6416 28.1735 32.0633 28.9946 33.7498"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.37505 18.125C8.42635 18.1248 7.49729 17.8548 6.69635 17.3463C5.8954 16.8379 5.25563 16.1121 4.85174 15.2537C4.44785 14.3953 4.29651 13.4396 4.41539 12.4984C4.53428 11.5572 4.91848 10.6692 5.52313 9.93822C6.12779 9.20719 6.92794 8.66326 7.83015 8.36996C8.73237 8.07666 9.6994 8.04608 10.6183 8.28181C11.5373 8.51753 12.3702 9.00982 13.0198 9.7012C13.6694 10.3926 14.109 11.2545 14.2871 12.1863"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.713 12.1864C25.891 11.2544 26.3305 10.3923 26.9802 9.70081C27.6298 9.00928 28.4628 8.51686 29.3819 8.28104C30.3009 8.04523 31.2681 8.07576 32.1704 8.36907C33.0728 8.66238 33.873 9.20636 34.4778 9.93748C35.0825 10.6686 35.4668 11.5567 35.5857 12.498C35.7045 13.4394 35.5531 14.3951 35.1492 15.2536C34.7452 16.1121 34.1053 16.838 33.3042 17.3464C32.5031 17.8549 31.5739 18.1249 30.6251 18.125"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Classes</span>
                </Link>
              </li>
              <li
                className={active == 6 ? "list active" : "list"}
                onClick={(e) => {
                  logoutAPI();
                }}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="link d-flex align-items-center"
                  style={{ padding: "10px 0" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                  >
                    <path
                      d="M14.8334 12.6C15.35 6.60002 18.4334 4.15002 25.1834 4.15002H25.4C32.85 4.15002 35.8334 7.13336 35.8334 14.5834V25.45C35.8334 32.9 32.85 35.8834 25.4 35.8834H25.1834C18.4834 35.8834 15.4 33.4667 14.85 27.5667"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25 20H6.03333"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.74996 14.4166L4.16663 20L9.74996 25.5833"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>Logout</span>
                </div>
              </li>
            </ul>
          </div>
          {/* <div className="sidebar_profile d-flex align-items-center">
            <span className="nav_image">
              <img src="images/profile.jpg" alt="logo_img" />
            </span>
            <div className="data_text">
              <span className="name">David Oliva</span>
              <span className="email">david@gmail.com</span>
            </div>
          </div> */}
        </div>
      </nav>
      <nav className="navbar">
        <i
          className="bi bi-list d-flex justify-content-between align-items-center"
          id="sidebar-open"
          onClick={toggleSidebar}
        >
          {/* <div className="add_class_btn">Add Class</div> */}
        </i>
        {btn != "" ? (
          <div
            style={{ cursor: "pointer" }}
            className="add_class_btn"
            data-bs-toggle="modal"
            data-bs-target={`#${modal}`}
          >
            {btn}
          </div>
        ) : (
          ""
        )}
      </nav>
      {/* <ClaenderModal t={t}/> */}
    </>
  );
};

export default SideBar;
