import React, { useState, useRef, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import incub8API from "../api/incub8API";
import formHasEmptyFields from "../utils/form-has-empty-fields";
import { ToastContainer } from 'react-toastify'
import { errorNotification } from '../utils/toastNotifications'
import { Editor, EditorState } from "draft-js";

import "../styles/form.css";
import "react-toastify/dist/ReactToastify.css";




const Register = () => {
  const [username, setUsername] = useState("jtx007");
  const [password, setPassword] = useState("jamesbond7");
  const [passwordConfirmation, setPasswordConfirmation] = useState("jamesbond7");
  const [email, setEmail] = useState("jamesjacobthomas7@gmail.com");
  const [name, setName] = useState("James");
  const [bio, setBio] = useState("");
  const [error, setError] = useState('')
  const [page, setPage] = useState(0);
  const [editorState, setEditorState] = useState(
    EditorState.createEmpty()
  );


 

   


  const formData = {
    username,
    password,
    name,
    
   
  };

  const formData2 = {
    email,
    bio,

  }

  const emailIsValid = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const passwordIsValid = password => /(?=.{8,})(?=.*[0-9])/.test(password);

  const handleSubmit = async e => {
    e.preventDefault();
    console.log("Form Submitted")
    
    try {
      await incub8API.post("/register", {
        username, password, email, name, bio

      })
      navigate("/login")
    } catch (error) {
      
      errorNotification(error.response.data.message)
    }

  };

  return (
    <div className="register-form-container uk-animation-slide-left-small">
      <form className="register-form" onSubmit={handleSubmit}>
        {page === 0 && (
          <div className="uk-animation-slide-left-small">
            <h1 className="form-title ">Register New Account</h1>
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
                onChange={(event) =>
                  setPasswordConfirmation(event.target.value)
                }
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
          </div>
        )}
        {page === 1 && (
          <>
            <div className="register-form-2-container uk-animation-slide-left-small">
              <div className="register-form-2" data-uk-grid="masonry: true">
                <div className="uk-width-1-2">
                  <div className="uk-card">
                    <h1 className="tagline-title">
                      Next, tell us what you're all about.
                    </h1>
                    <p>
                      You'll want to describe some personal details about
                      yourself that will help others connect with you and your
                      ideas. What is your background? What do you want to work
                      on? What excites you? The more information you can give,
                      the better. All the fields here are required so we can
                      help you connect with others - and help others connect
                      with you.
                    </p>
                  </div>
                </div>
              </div>
              <div classname="register-form-2" data-uk-grid="masonry: true">
                <div className="uk-width-1-3">
                  <div className="tagline-container">
                    <h1 className="tagline-title">Profile</h1>
                    <p>Name: {name}</p>
                    <p>Username: {username}</p>
                    <p>Email: {email}</p>
                    <p className="profile-button-group" data-uk-margin>
                      <div className="avatarPlaceholder uk-border-circle"></div>
                      <button className="uk-button uk-button-default uk-text-capitalize upload-photo-button">
                        Upload Photo
                      </button>
                    </p>
                  </div>
                </div>
                <div className="uk-width-2-3">
                  <div className="uk-card uk-card-large quill">
                    <div className="tagline-container">
                      <h1 className="tagline-title">Bio</h1>
                      <div onClick>
                        <Editor
                          editorState={editorState}
                          onChange={(editorState) =>
                            setEditorState(editorState)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-uk-grid="masonry: true">
                <div className="uk-width-2-3">
                  <div className="uk-card uk-card-large">
                    <div className="tagline-container">
                      <h1 className="tagline-title">Links</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {page !== 0 && (
          <>
            <div className="second-step-form-button-group">
              <button
                onClick={() => setPage(page - 1)}
                type="button"
                className="uk-button uk-button-default uk-text-capitalize previous-page-button"
              >
                Previous
              </button>
              <button
                disabled={formHasEmptyFields(formData2) || !emailIsValid(email)}
                type="submit"
                className="uk-button uk-button-default uk-text-capitalize form-submit-button"
              >
                Submit
              </button>
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
            className="uk-button uk-button-default  uk-text-capitalize next-step-button"
          >
            Next Step
          </button>
        )}
      </form>
      {page === 0 && (
        <div className="tagline-container uk-animation-slide-left-small">
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
          </p>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Register;
