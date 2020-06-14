import React from "react";
import formHasEmptyFields from "../utils/form-has-empty-fields";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RegisterStep2 = ({
  name,
  username,
  email,
  bio,
  setBio,
  previousPage,
}) => {
  const formData2 = {
    bio,
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown

      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "size",
    "clean"
  ];

  return (
    <>
      <div className="register-form-step-2 uk-animation-slide-left-small uk-padding-large">
        <button
          onClick={() => previousPage()}
          type="button"
          className="uk-button uk-button-default uk-text-capitalize previous-page-button"
        >
          Previous
        </button>
        <div className="uk-margin-medium-top" data-uk-grid="masonry: true">
          <div className="uk-width-1-2">
            <div className="uk-card">
              <h1 className="tagline-title">
                Next, tell us what you're all about.
              </h1>
              <p>
                You'll want to describe some personal details about yourself
                that will help others connect with you and your ideas. What is
                your background? What do you want to work on? What excites you?
                The more information you can give, the better. All the fields
                here are required so we can help you connect with others - and
                help others connect with you.
              </p>
            </div>
          </div>
        </div>
        <div className="register-form-2" data-uk-grid="masonry: true">
          <div className="uk-width-1-3">
            <div className="register-step-2-section">
              <h1 className="tagline-title">Profile</h1>
              <p>Name: {name}</p>
              <p>Username: {username}</p>
              <p>Email: {email}</p>
              <div
                className="uk-flex uk-flex-row  uk-flex-around	uk-flex-center"
                data-uk-margin
              >
                <div className="avatarPlaceholder uk-border-circle"></div>
                <button
                  type="button"
                  className="uk-button uk-button-default uk-text-capitalize upload-photo-button uk-margin"
                >
                  Upload Photo
                </button>
              </div>
            </div>
          </div>
          <div className="uk-width-2-3 uk-height-large">
            <div className="uk-card-large">
              <div className="register-step-2-section bio-section">
                <h1 className="tagline-title">Bio</h1>
                <ReactQuill
                  className="quill"
                  modules={modules}
                  formats={formats}
                  theme="snow"
                  value={bio}
                  onChange={(content) => setBio(content)}
                />
              </div>
            </div>
          </div>
        </div>
        <div data-uk-grid="masonry: true">
          <div className="uk-width-2-3 uk-height-large">
            <div className="uk-card uk-height-large uk-card-large">
              <div className="register-step-2-section">
                <h1 className="tagline-title">Links</h1>
              </div>
            </div>
          </div>
        </div>
        <button
          disabled={formHasEmptyFields(formData2)}
          type="submit"
          className="uk-button uk-button-default uk-text-capitalize uk-margin-medium-top submit-register-button"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default RegisterStep2;
