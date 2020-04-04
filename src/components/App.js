import React, { useState } from "react";
import { LoginContext } from "../context/loginContext";
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { Router } from "@reach/router";
import { lightTheme, darkTheme} from '../theme'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import Builders from '../pages/Builders'
import Ideas from '../pages/Ideas'
import Login from '../pages/Login'
import Register from '../pages/Register'
import CreateIdea from '../pages/CreateIdea'
import About from '../pages/About'
import Profile from '../pages/Profile'
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [user_id, setUserID] = useState(localStorage.getItem("user_id") || "");
  const [user, setUser] = useState(localStorage.getItem("user") || "");

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  
 
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <LoginContext.Provider
        value={{
          token,
          user,
          user_id,
          setToken,
          setUser,
          setUserID,
        }}
      >
        <Navbar toggleTheme={toggleTheme}/>
        <Router>
          <Home path="/" />
          <Login path="login" />
          <Register path="register" />
          <Builders path="builders" />
          <Ideas path="ideas" />
          <CreateIdea path="create" />
          <About path="about" />
          <Profile path="profile" />
        </Router>
      </LoginContext.Provider>
    </ThemeProvider>
  );
};

export default App;
