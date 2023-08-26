import Cookies from "js-cookie";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../images/logo.png";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const [visibility, setVisibility] = useState(false);
  const icon = visibility ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={() => setVisibility((visibility) => !visibility)}
      className="eye_svg"
    >
      <path
        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.41998 13.98 8.41998 12C8.41998 10.02 10.02 8.42 12 8.42C13.98 8.42 15.58 10.02 15.58 12Z"
        stroke="#B4B2C3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C18.82 5.8 15.53 3.72 12 3.72C8.47003 3.72 5.18003 5.8 2.89003 9.4C1.99003 10.81 1.99003 13.18 2.89003 14.59C5.18003 18.19 8.47003 20.27 12 20.27Z"
        stroke="#7091F5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      onClick={() => setVisibility((visibility) => !visibility)}
      className="eye_svg"
    >
      <path
        d="M14.53 9.47L9.46998 14.53C8.81998 13.88 8.41998 12.99 8.41998 12C8.41998 10.02 10.02 8.42 12 8.42C12.99 8.42 13.88 8.82 14.53 9.47Z"
        stroke="#7091F5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73C8.47003 3.73 5.18003 5.81 2.89003 9.41C1.99003 10.82 1.99003 13.19 2.89003 14.6C3.68003 15.84 4.60003 16.91 5.60003 17.77"
        stroke="#7091F5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.41998 19.53C9.55998 20.01 10.77 20.27 12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C20.78 8.88 20.42 8.39 20.05 7.93"
        stroke="#7091F5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.51 12.7C15.25 14.11 14.1 15.26 12.69 15.52"
        stroke="#7091F5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.47 14.53L2 22"
        stroke="#7091F5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 2L14.53 9.47"
        stroke="#7091F5"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const inputType = visibility ? "text" : "password";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
  const fetchAPI = async () => {
    const login = await fetch(`${import.meta.env.VITE_API}api/spa/auth`, {
      method: "post",
      headers,
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await login.json();
    if (data.status == "success") {
      toast.success("Successfully Logged in");
      Cookies.set("token", data.token, { expires: 1 });
      Cookies.set("userName", data.user.name, { expires: 1 });
      setLoader(false)
      navigate("/dashboard");
    } else {
      toast.error(data.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ overflow: "hidden", height: "100vh" }}
    >
      <div className="login_image_right">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="353"
          height="1117"
          viewBox="0 0 353 1117"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M180.804 -55.5259C180.804 -55.5259 74.5515 15.2803 85.0875 98.8046C89.657 135.029 110.458 143.229 131.805 151.644C152.198 159.683 173.088 167.919 180.804 200.967C194.231 258.479 143.52 262.164 92.5498 265.867C41.4304 269.582 -9.94941 273.315 2.85192 331.387C9.70486 362.475 26.8169 373.062 43.9468 383.659C61.0266 394.225 78.1241 404.802 85.0875 435.724C93.4221 472.735 78.5443 502.105 63.7593 531.292C48.8053 560.812 33.9463 590.145 43.2956 627.007C52.1504 661.919 75.539 666.597 98.4217 671.174C122.071 675.904 145.179 680.526 151.145 718.301C158.92 767.522 132.891 785.413 103.698 805.479C80.3786 821.508 55.0398 838.924 43.2956 874.805C41.6916 879.706 40.1051 884.477 38.5527 889.145C22.9162 936.163 10.7411 972.773 19.0294 1026.96C31.081 1105.76 121.487 1153.04 121.487 1153.04H290.632C290.632 1153.04 200.226 1105.76 188.175 1026.96C179.887 972.773 192.062 936.163 207.698 889.145C209.25 884.477 210.837 879.706 212.441 874.805C224.185 838.924 249.524 821.508 272.843 805.479C302.037 785.413 328.065 767.522 320.291 718.301C314.324 680.526 291.216 675.904 267.567 671.174C244.684 666.597 221.296 661.919 212.441 627.007C203.092 590.145 217.951 560.812 232.905 531.292C247.69 502.105 262.568 472.735 254.233 435.724C247.27 404.802 230.172 394.225 213.092 383.659C195.962 373.062 178.85 362.475 171.997 331.387C159.196 273.315 210.576 269.582 261.695 265.867C312.665 262.164 363.376 258.479 349.949 200.967C342.234 167.919 321.343 159.683 300.951 151.644C279.604 143.229 258.802 135.029 254.233 98.8046C243.697 15.2803 349.949 -55.5259 349.949 -55.5259H180.804Z"
            fill="#7091F5"
          />
        </svg>
      </div>
      <div className="login_image_left">
        <svg
          width="435"
          height="297"
          viewBox="0 0 435 297"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="mask0_216_2125"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="435"
            height="298"
          >
            <rect y="0.807617" width="434.736" height="296.67" fill="#C4C4C4" />
          </mask>
          <g mask="url(#mask0_216_2125)">
            <mask
              id="mask1_216_2125"
              style={{ maskType: "alpha" }}
              maskUnits="userSpaceOnUse"
              x="0"
              y="-293"
              width="1527"
              height="591"
            >
              <rect
                y="-292.068"
                width="1526.88"
                height="589.545"
                fill="#050038"
              />
            </mask>
            <g mask="url(#mask1_216_2125)">
              <path
                d="M70.0369 104.463C41.6288 29.3846 -50.0217 73.1806 -92.296 104.463L-112.588 446.884L412.457 365.717C388.784 357.263 344.988 328.178 359.192 279.478C376.947 218.603 333.827 193.239 209.541 200.848C85.2554 208.458 105.547 198.312 70.0369 104.463Z"
                fill="#7091F5"
              />
            </g>
          </g>
        </svg>
      </div>
      <div
        className="login_main_heading_contaniner d-flex justify-content-center align-items-center"
        style={{ zIndex: 2 }}
      >
        <div className="login_page_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="login_main_heading_text">Smart HMIS.</div>
      </div>
      <form
        method="POST"
        className="login_form container d-flex flex-column justify-content-center align-items-center"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="login_heading text-center">Sign in to Smart HMIS</div>
        <div className="login_input_box">
          <input
            type="email"
            placeholder="Enter your mail"
            className="login-form-input"
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="envelop_svg"
          >
            <g opacity="0.3">
              <path
                d="M21 4.5H3C2.80109 4.5 2.61032 4.57902 2.46967 4.71967C2.32902 4.86032 2.25 5.05109 2.25 5.25V18C2.25 18.3978 2.40804 18.7794 2.68934 19.0607C2.97064 19.342 3.35218 19.5 3.75 19.5H20.25C20.6478 19.5 21.0294 19.342 21.3107 19.0607C21.592 18.7794 21.75 18.3978 21.75 18V5.25C21.75 5.05109 21.671 4.86032 21.5303 4.71967C21.3897 4.57902 21.1989 4.5 21 4.5ZM9.25312 12L3.75 17.0438V6.95625L9.25312 12ZM10.3594 13.0219L11.4937 14.0531C11.632 14.1796 11.8126 14.2498 12 14.2498C12.1874 14.2498 12.368 14.1796 12.5062 14.0531L13.6406 13.0219L19.0687 18H4.93125L10.3594 13.0219ZM14.7469 12L20.25 6.95625V17.0438L14.7469 12Z"
                fill="#050038"
              />
            </g>
          </svg>
        </div>
        <div className="login_input_box" style={{ marginTop: "16px" }}>
          <input
            type={inputType}
            placeholder="Password"
            className="login-form-input"
            required="required"
            onChange={(e) => setPassword(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            className="password_svg"
          >
            <g opacity="0.3">
              <path
                d="M12.25 14.25C12.8713 14.25 13.375 13.7463 13.375 13.125C13.375 12.5037 12.8713 12 12.25 12C11.6287 12 11.125 12.5037 11.125 13.125C11.125 13.7463 11.6287 14.25 12.25 14.25Z"
                fill="#050038"
              />
              <path
                d="M19.75 7.5H16.375V4.875C16.375 3.78098 15.9404 2.73177 15.1668 1.95818C14.3932 1.1846 13.344 0.75 12.25 0.75C11.156 0.75 10.1068 1.1846 9.33318 1.95818C8.5596 2.73177 8.125 3.78098 8.125 4.875V7.5H4.75C4.35218 7.5 3.97064 7.65804 3.68934 7.93934C3.40804 8.22064 3.25 8.60218 3.25 9V19.5C3.25 19.8978 3.40804 20.2794 3.68934 20.5607C3.97064 20.842 4.35218 21 4.75 21H19.75C20.1478 21 20.5294 20.842 20.8107 20.5607C21.092 20.2794 21.25 19.8978 21.25 19.5V9C21.25 8.60218 21.092 8.22064 20.8107 7.93934C20.5294 7.65804 20.1478 7.5 19.75 7.5ZM13 15.6375V17.25C13 17.4489 12.921 17.6397 12.7803 17.7803C12.6397 17.921 12.4489 18 12.25 18C12.0511 18 11.8603 17.921 11.7197 17.7803C11.579 17.6397 11.5 17.4489 11.5 17.25V15.6375C10.8958 15.4573 10.3765 15.0657 10.0373 14.5342C9.69806 14.0027 9.56147 13.3669 9.6525 12.743C9.74353 12.119 10.0561 11.5487 10.5331 11.1363C11.01 10.7239 11.6195 10.4969 12.25 10.4969C12.8805 10.4969 13.49 10.7239 13.9669 11.1363C14.4439 11.5487 14.7565 12.119 14.8475 12.743C14.9385 13.3669 14.8019 14.0027 14.4627 14.5342C14.1235 15.0657 13.6042 15.4573 13 15.6375ZM14.875 7.5H9.625V4.875C9.625 4.17881 9.90156 3.51113 10.3938 3.01884C10.8861 2.52656 11.5538 2.25 12.25 2.25C12.9462 2.25 13.6139 2.52656 14.1062 3.01884C14.5984 3.51113 14.875 4.17881 14.875 4.875V7.5Z"
                fill="#050038"
              />
            </g>
          </svg>
          {icon}
        </div>

        {loader === false ? (
          <button
            type="submit"
            onClick={(e) => {
              if (email && password) fetchAPI(); setLoader(true);
            }}
            className="login_form_button"
          >
            Sign In
          </button>
        ) : (
          <button className="login_form_button" >
            <span
              className="spinner-border spinner-border-sm me-2"
              aria-hidden="true"
            ></span>
            <span role="status">Loading...</span>
          </button>
        )}
      </form>
    </div>
  );
};

export default Login;
