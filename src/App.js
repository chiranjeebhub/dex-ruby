import React, { useState, useEffect } from "react";
import "./css/index.css";
import { HashRouter, Route } from "react-router-dom";

import Trade from "./pages/Trade";
import Funds from "./pages/Funds";
// import History from "./pages/History";
import Home from "./pages/Home";

import { MyContext } from "./Context";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import UploadDocs from "./pages/UploadDocs";
import AddPhone from "./pages/AddPhone";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

function App() {
  const [loggedIn, setLoggedIn] = useState("no");

  const value = { loggedIn, setLoggedIn };

  return (
    <MyContext.Provider value={value}>
      <div className="App">
        <HashRouter basename="/">
          <Route exact path="/" component={Home} />
          <Route path="/trade" component={Trade} />
          <Route path="/funds" component={Funds} />
          {/* <Route path="/history" component={History} /> */}

          <Route path="/change_password" component={ChangePassword} />
          <Route path="/upload_docs" component={UploadDocs} />
          <Route path="/add_phone" component={AddPhone} />
          <Route path="/profile" component={Profile} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </HashRouter>
      </div>
    </MyContext.Provider>
  );
}

export default App;
