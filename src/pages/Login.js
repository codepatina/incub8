import React, {useState} from 'react';
import incub8API from '../api/incub8API'
import '../styles/form.css'

const Login = () => {

      const [values, setValues] = useState({ username: "", password: "" });


    const handleInputChange = e => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await incub8API.post("/auth" , {"username": values.username, "password": values.password})
        console.log(response)
    }
    return (
      <form onSubmit={handleSubmit}>
        <h1 className="form-title">Login to Existing Account</h1>
        <div className="uk-margin">
          <label className="uk-form-label">Username</label>
          <input
            onChange={handleInputChange}
            name="username"
            value={values.username}
            className="uk-input uk-form-width-large"
            type="text"
          />
        </div>
        <div className="uk-margin">
          <label className="uk-form-label">Password</label>
          <input
            onChange={handleInputChange}
            value={values.password}
            name="password"
            className="uk-input uk-form-width-large"
            type="password"
          />
        </div>
        <button
          type="submit"
          className="uk-button uk-button-default uk-text-capitalize form-submit-button"
        >
          Submit
        </button>
      </form>
    );
}

export default Login;