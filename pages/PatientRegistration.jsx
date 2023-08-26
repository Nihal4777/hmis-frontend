import React from 'react'
import logo from "../images/logo.png";
import { useState } from 'react';

const PatientRegistration = () => {

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
        stroke="#B4B2C3"
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
        stroke="#B4B2C3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.82 5.77C16.07 4.45 14.07 3.73 12 3.73C8.47003 3.73 5.18003 5.81 2.89003 9.41C1.99003 10.82 1.99003 13.19 2.89003 14.6C3.68003 15.84 4.60003 16.91 5.60003 17.77"
        stroke="#B4B2C3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.41998 19.53C9.55998 20.01 10.77 20.27 12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C20.78 8.88 20.42 8.39 20.05 7.93"
        stroke="#B4B2C3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.51 12.7C15.25 14.11 14.1 15.26 12.69 15.52"
        stroke="#B4B2C3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M9.47 14.53L2 22"
        stroke="#B4B2C3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M22 2L14.53 9.47"
        stroke="#B4B2C3"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  return (
    <div>
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
          className="d-flex justify-content-center align-items-center"
          style={{
            zIndex: 2,
            width: '75%'
          }}
        >
          <div className="login_page_logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="login_main_heading_text">Smart HMIS.</div>
        </div>
        <form
          method="POST"
          className="reg_form row g-3 container d-flex flex-column justify-content-center align-items-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="login_heading text-center">Patient Registration</div>
          <div class="row g-3">
            <div class="col">
            <label for="inputAddress" class="form-label">First Name</label>
              <input type="text" class="form-control" placeholder="First name" aria-label="First name" name="frist_name"/>
            </div>
            <div class="col">
            <label for="inputAddress" class="form-label">Last Name</label>
              <input type="text" class="form-control" placeholder="Last name" aria-label="Last name" name='last_name'/>
            </div>
          </div>
          <div class="row g-3">
            <div class="col">
            <label for="inputAddress" class="form-label">Date of birth</label>
              <input type="date" class="form-control" name='dob'/>
            </div>
            <div class="col">
            <label for="Gender" class="form-label">Gender</label>
           <select name="gender"  className='form-select'>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Prefer Not to say">Prefer Not to say</option>
           </select>
            </div>
          </div>
          <div class="row g-3">
            <div class="col">
            <label for="inputAddress" class="form-label">Email</label>
              <input type="email" class="form-control" placeholder="Email name" aria-label="Email" name='email'/>
            </div>
            <div class="col">
            <label for="inputAddress" class="form-label">Mobile No</label>
              <input type="tel" class="form-control" placeholder="Mobile Number" aria-label="Mobile name" name='mobile'/>
            </div>
          </div>

          <div class="row g-3">
            <div class="col">
            <label for="Blood_group" class="form-label">Blood Group</label>
            <select name="Blood_group"  className='form-select'>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            </select>     
            </div>
            <div class="col">
            <label for="inputAddress" class="form-label">Abhar No</label>
              <input type="tel" class="form-control" placeholder="Abhar No" aria-label="Mobile name" name='abhar'/>
            </div>
          </div>
          
          <div class="row g-3">
            <div class="col">
            <label for="inputAddress" class="form-label">Address:</label>
              <input type="textarea" class="form-control" placeholder="Address" aria-label="Email" name='address'/>
            </div>
            <div class="col">
            
            </div>
          </div>
          
          {loader === false ? (
            <button
              type="submit"
              onClick={(e) => {
                if (email && password) fetchAPI(); setLoader(true);
              }}
              className="login_form_button"
              style={{'margin-bottom':'61px'}}
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
    </div>
  )
}

export default PatientRegistration
