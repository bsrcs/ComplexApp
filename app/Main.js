import React, { useState } from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route} from "react-router-dom";

// My Components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";
import About from "./components/About";
import Terms from "./components/Terms";
import Home from "./components/Home";

// ctrl+D ye basarak butun "class"lari "className"e cevir.
// base url of our domain is "/"
function Main(){
  // pass useState parameters as props into "Header" component.
  // no matter how many times I refresh or reload our application remembers that I'm logged in at this point.
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")));

  return(
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Home /> : <HomeGuest />}
        </Route>
        <Route path="/about-us">
          <About />
        </Route>
        <Route path="/terms">
          <Terms />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}
ReactDOM.render( <Main />, document.querySelector("#app"));

if(module.hot){
  module.hot.accept()
}