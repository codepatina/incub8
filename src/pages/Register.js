import React, { useState } from "react";
import { Link } from '@reach/router'
import "../styles/form.css";


const Register = () => {
    const [values, setValues] = useState({first_name: "", last_name: "", username: "", password: "", email: "", phone_number: "", bio: "", theme_id: 1});

    const handleInputChange = e => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };

    return (
      <div className="register-form-container">
        <form>
          <h1 className="form-title">Register New Account</h1>
          <div className="uk-margin">
            <label className="uk-form-label">First Name</label>
            <input
              onChange={handleInputChange}
              name="first_name"
              className="uk-input uk-form-width-large"
              type="text"
            />
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">Last Name</label>
            <input
              onChange={handleInputChange}
              name="last_name"
              className="uk-input uk-form-width-large"
              type="text"
            />
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">Username</label>
            <input
              onChange={handleInputChange}
              name="username"
              className="uk-input uk-form-width-large"
              type="text"
            />
          </div>
          <div className="uk-margin">
            <label className="uk-form-label">Password</label>
            <input
              onChange={handleInputChange}
              name="password"
              className="uk-input uk-form-width-large"
              type="password"
            />
          </div>
          <button className="uk-button uk-button-default form-submit-button">
            Next Step
          </button>
        </form>
        <div className="tagline-container">
          <h1 className="tagline-title">Let's Get Creative.</h1>
          <p>
            Join our platform to get started connecting with others who can help
            you with your passion project.{" "}
          </p>
          <br />
          <p>To learn more, <Link className="uk-link-text"  to="/about">click here</Link>.</p>
        </div>
      </div>
    );
}

export default Register;