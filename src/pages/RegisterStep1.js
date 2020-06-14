import React from "react";
import formHasEmptyFields from "../utils/form-has-empty-fields";

const RegisterStep1 = ({
  username,
  setUsername,
  password,
  setPassword,
  passwordConfirmation,
  setPasswordConfirmation,
  name,
  setName,
  email,
  setEmail,
  addPage
}) => {
  const emailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const passwordIsValid = (password) => /(?=.{8,})(?=.*[0-9])/.test(password);

  const formData = {
    username,
    password,
    email,
    name,
  };
  return (
    <>
      <div className="register-form-step-1 uk-padding-small uk-animation-slide-left-small uk-margin-large-top">
        <h1 className="form-title">Register New Account</h1>
        <div className="uk-margin">
          <label className="uk-form-label">Name</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            name="name"
            className="uk-input uk-form-width-large"
            type="text"
          />
        </div>

        <div className="uk-margin">
          <label className="uk-form-label">Username</label>
          <input
            onChange={(event) => setUsername(event.target.value)}
            value={username}
            name="username"
            className="uk-input uk-form-width-large"
            type="text"
          />
        </div>
        <div className="uk-margin">
          <label className="uk-form-label">Email</label>
          <input
            value={email}
            type="email"
            onChange={(event) => setEmail(event.target.value)}
            className={
              email && !emailIsValid(email)
                ? "uk-input uk-form-width-large uk-form-danger"
                : "uk-input uk-form-width-large"
            }
          />
          {email && !emailIsValid(email) && (
            <span className="uk-text-danger">Email is not valid</span>
          )}
        </div>
        <div className="uk-margin">
          <label className="uk-form-label">Password</label>
          <input
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            name="password"
            className={
              password && !passwordIsValid(password)
                ? "uk-input uk-form-width-large uk-form-danger"
                : "uk-input uk-form-width-large"
            }
            type="password"
          />
          {password && !passwordIsValid(password) && (
            <span className="uk-text-danger">
              Password must be at least 8 characters and contain 1 number
            </span>
          )}
        </div>
        <div className="uk-margin">
          <label className="uk-form-label">Confirm Password</label>
          <input
            onChange={(event) => setPasswordConfirmation(event.target.value)}
            value={passwordConfirmation}
            name="passwordConfirmation"
            className={
              passwordConfirmation !== password
                ? "uk-input uk-form-width-large uk-form-danger"
                : "uk-input uk-form-width-large"
            }
            type="password"
          />
          {passwordConfirmation !== password && (
            <span className="uk-text-danger">Passwords do not match</span>
          )}
        </div>
        <button
          disabled={
            formHasEmptyFields(formData) ||
            passwordConfirmation !== password ||
            !emailIsValid(email)
          }
          onClick={() => addPage()}
          type="button"
          className="uk-button uk-button-default  uk-text-capitalize next-step-button"
        >
          Next Step
        </button>
      </div>
    </>
  );
};

export default RegisterStep1;
