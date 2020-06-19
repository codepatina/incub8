import React, { useState } from "react";
import incub8API from "../api/incub8API";
const LinkPreview = () => {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     
      const response =  await incub8API.get(`/link_parser?url=${link}`)
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="uk-margin">
      <div className="uk-margin" data-uk-margin>
        <div uk-form-custom="target: true">
          <form onSubmit={handleSubmit}>
            <input
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="uk-input uk-form-width-large"
              type="text"
              placeholder="Add URL"
            />
            <button
              type="submit"
              className="uk-button uk-button-default add-link-button"
            >
              +
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LinkPreview;
