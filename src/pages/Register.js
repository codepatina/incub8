import React, { useState } from "react";
import { navigate } from "@reach/router";
import incub8API from "../api/incub8API";
import RegisterStep1 from "../components/RegisterStep1";
import "../styles/form.css";
import "react-toastify/dist/ReactToastify.css";
import RegisterStep2 from "../components/RegisterStep2";

const Register = () => {
  const [username, setUsername] = useState("jtx007");
  const [password, setPassword] = useState("jamesbond7");
  const [passwordConfirmation, setPasswordConfirmation] = useState(
    "jamesbond7"
  );
  const [email, setEmail] = useState("jamesjacobthomas7@gmail.com");
  const [name, setName] = useState("James");
  const [bio, setBio] = useState("Hi my name is James Thomas");
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");

    try {
      await incub8API.post("/register", {
        username,
        password,
        email,
        name,
        bio,
      });
      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error)
    }
  };

  const addPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  const renderFormSteps = () => {
    if (page === 0) {
      return (
        <section className="uk-flex uk-flex-row  uk-flex-around	uk-flex-center uk-animation-slide-left-small">
          {error}
          <RegisterStep1
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            passwordConfirmation={passwordConfirmation}
            setPasswordConfirmation={setPasswordConfirmation}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            addPage={addPage}
          />
          <div className=" tagline-container uk-width-1-4 uk-height-medium uk-margin-xlarge-top">
            <h1 className="tagline-title">Let's get creative.</h1>
            <p>
              Join our platform to get started connecting with others who can
              help you with your passion project.{" "}
            </p>
            <p>To learn more, click here.</p>
          </div>
        </section>
      );
    } else if (page === 1) {
      return (
        <section>
          <RegisterStep2
            name={name}
            username={username}
            email={email}
            bio={bio}
            setBio={setBio}
            previousPage={previousPage}
            page={page}
            handleSubmit={handleSubmit}
          />

        </section>
      );
    }
  };

  return <div className="register-form">{renderFormSteps()}</div>;
};

export default Register;
