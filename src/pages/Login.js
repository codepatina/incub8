import React, {useState} from 'react';
import '../styles/form.css'

const Login = () => {

      const [values, setValues] = useState({ username: "", password: "" });


    const handleInputChange = e => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
    };


    return (
        <form>
            <h1 className="form-title">Login to Existing Account</h1>
            <div className="uk-margin">
                <p><label>Enter Username</label></p>
                <input 
                onChange={handleInputChange}
                name="username"
                className="uk-input uk-form-width-large" 
                type="text" 
                />
            </div>
            <div className="uk-margin">
                <p><label>Enter Password</label></p>
                <input 
                onChange={handleInputChange}
                name="password"
                className="uk-input uk-form-width-large" 
                type="password" 
                />
            </div>
            <button type="submit" className="uk-button uk-button-default form-submit-button">Submit</button>

            
        </form>
    )
}

export default Login;