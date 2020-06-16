import React, { useState } from "react";

const LinkPreview = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState({});


  const handleSubmit = async () => {
    const response
  }

  return (
    <div className="uk-margin">
      <div className="uk-margin" data-uk-margin>
        <div uk-form-custom="target: true">
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="uk-input uk-form-width-large"
            type="text"
            placeholder="Add URL"
          />
        </div>
        <button className="uk-button uk-button-default add-link-button">+</button>
      </div>
    </div>
  );
};

export default LinkPreview;
