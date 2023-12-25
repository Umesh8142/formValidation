import React, { useCallback, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password2: "",
  });
  const [emailError, setEmailError] = useState(true);
  const [passwordError, setPasswordError] = useState(true);
  const [password2Error, setPassword2Error] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const handleChange = (e) => {
    let val = e.target.value;
    if (e.target.name === "email") {
      const emailPattern =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!emailPattern.test(val)) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
    } else if (e.target.name === "password") {
      if (val.length < 8) {
        setPasswordError(true);
      } else {
        setPasswordError(false);
      }
    } else {
      if (val !== formData.password) {
        setPassword2Error(true);
      } else {
        setPassword2Error(false);
      }
    }
    setFormData({ ...formData, [e.target.name]: val });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailError && !passwordError && !password2Error) {
      alert("form submited successfully");
      setFormData({
        email: "",
        password: "",
        password2: "",
      });
      setEmailError(true);
      setPasswordError(true);
      setPassword2Error(true);
    } else {
      alert("Form data error-please enter correct data");
    }
  };
  return (
    <div className="form-validation">
      <h1>Form</h1>
      <form>
        <div className="form-grp">
          <label htmlFor="password2">Email:</label>
          <div className="input-grp">
            <input
              className={formData.email && emailError && "input-error"}
              type="text"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={(e) => handleChange(e)}
              value={formData.email}
            ></input>
            {formData.email && emailError ? (
              <small>Please enter correct email</small>
            ) : (
              <small></small>
            )}
          </div>
        </div>
        <div className="form-grp">
          <label htmlFor="password">Password:</label>
          <div className="input-grp">
            <input
              className={formData.password && passwordError && "input-error"}
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter Password"
              onChange={(e) => handleChange(e)}
              value={formData.password}
            ></input>
            {showPassword ? (
              <FaEye onClick={() => setShowPassword(false)} />
            ) : (
              <FaEyeSlash onClick={() => setShowPassword(true)} />
            )}
            {passwordError && formData.password && (
              <small>Password is short</small>
            )}
          </div>
        </div>
        <div className="form-grp">
          <label htmlFor="password">Confirm Password:</label>
          <div className="input-grp">
            <input
              className={formData.password2 && password2Error && "input-error"}
              type={showPassword2 ? "text" : "password"}
              name="password2"
              id="password2"
              placeholder="Confirm password"
              onChange={(e) => handleChange(e)}
              value={formData.password2}
            ></input>
            {showPassword2 ? (
              <FaEye onClick={() => setShowPassword2(false)} />
            ) : (
              <FaEyeSlash onClick={() => setShowPassword2(true)} />
            )}
            {password2Error && formData.password2 && (
              <small>Password donot match</small>
            )}
            {!password2Error && <i>Password matched</i>}
          </div>
        </div>
        <div className="form-btn">
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
