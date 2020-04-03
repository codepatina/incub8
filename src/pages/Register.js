import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import incub8API from "../api/incub8API";
import formHasEmptyFields from "../utils/form-has-empty-fields";
import "../styles/form.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [email, setEmail] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [bio, setBio] = useState("");
  const [theme_id, setTheme] = useState(1);
  const [error, setError] = useState('')
  const [page, setPage] = useState(0);

  const formData = {
    username,
    password,
    first_name,
    last_name,
   
  };

  const formData2 = {
    email,
    bio,
    phone_number,

  }

  const emailIsValid = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const passwordIsValid = password => /(?=.{8,})(?=.*[0-9])/.test(password);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("Form Submitted")
    console.log(formData)
    console.log(formData2)
    try {
      await incub8API.post("/register", {
        username, password, email, first_name, last_name, phone_number, bio, theme_id

      })
      navigate("/login")
    } catch (error) {
      console.log(error.message)
    }

  };

  return (
    <div className="register-form-container">
      <form onSubmit={handleSubmit}>
        {page === 0 && (
          <>
            <h1 className="form-title">Register New Account</h1>
            <div className="uk-margin">
              <label className="uk-form-label">First Name</label>
              <input
                value={first_name}
                onChange={event => setFirstName(event.target.value)}
                name="first_name"
                className="uk-input uk-form-width-large"
                type="text"
              />
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">Last Name</label>
              <input
                onChange={event => setLastName(event.target.value)}
                value={last_name}
                name="last_name"
                className="uk-input uk-form-width-large"
                type="text"
              />
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">Username</label>
              <input
                onChange={event => setUsername(event.target.value)}
                value={username}
                name="username"
                className="uk-input uk-form-width-large"
                type="text"
              />
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">Password</label>
              <input
                onChange={event => setPassword(event.target.value)}
                value={password}
                name="password"
                className={password && !passwordIsValid(password) ? "uk-input uk-form-width-large uk-form-danger" : "uk-input uk-form-width-large" }
                type="password"
              />
              {password && !passwordIsValid(password) && (
                <span className="uk-text-danger">Password must be at least 8 characters and contain 1 number</span>
              )}
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">Confirm Password</label>
              <input
                onChange={event => setPasswordConfirmation(event.target.value)}
                value={passwordConfirmation}
                name="passwordConfirmation"
                className={passwordConfirmation !== password ? "uk-input uk-form-width-large uk-form-danger" : "uk-input uk-form-width-large"}
                type="password"
              />
              {passwordConfirmation !== password && (
                <span className="uk-text-danger">Passwords do not match</span>
              )}
            </div>
          </>
        )}
        {page === 1 && (
          <>
            <div className="uk-margin">
              <label className="uk-form-label">Email</label>
              <input
              value={email}
              type="email"
              onChange={event => setEmail(event.target.value)}
              className={email && !emailIsValid(email) ? "uk-input uk-form-width-large uk-form-danger" : "uk-input uk-form-width-large"}
              />
              {email && !emailIsValid(email) && (
                <span className="uk-text-danger">Email is not valid</span>
              )}
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">Phone Number</label>
              <input 
              value={phone_number}
              type="tel"
              onChange={event => setPhoneNumber(event.target.value)}
              className="uk-input uk-form-width-large"
              />
            </div>
            <div className="uk-margin">
              <label className="uk-form-label">Bio</label>
              <textarea
              className="uk-textarea uk-form-width-large"
              value={bio}
              type="text"
              onChange={event => setBio(event.target.value)}
               />
            </div>
          </>
        )}
        {page !== 0 && (
          <>
            <div className="second-step-form-button-group">
              <button onClick={() => setPage(page - 1)} type="button" className="uk-button uk-button-default uk-text-capitalize form-submit-button">Previous</button>
              <button disabled={formHasEmptyFields(formData2) || !emailIsValid(email)}  type="submit" className="uk-button uk-button-default uk-text-capitalize form-submit-button">Submit</button>
            </div>
          </>
        )}
        {page !== 1 && (
          <button
            disabled={
              formHasEmptyFields(formData) || passwordConfirmation !== password
            }
            onClick={() => setPage(page + 1)}
            type="button"
            className="uk-button uk-button-default  uk-text-capitalize form-submit-button"
          >
            Next Step
          </button>
        )}
      </form>
      <div className="tagline-container">
        <h1 className="tagline-title">Let's Get Creative.</h1>
        <p>
          Join our platform to get started connecting with others who can help
          you with your passion project.{" "}
        </p>
        <br />
        <p>
          To learn more,{" "}
          <Link className="uk-link-text uk-text-danger" to="/about">
            {" "}
            Click here
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
