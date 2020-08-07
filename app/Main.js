import React from "react";
import ReactDOM from "react-dom";

// My Components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Footer from "./components/Footer";

// ctrl+D ye basarak butun "class"lari "className"e cevir.
function Main(){
  return(
    <>
    <Header />
    <HomeGuest />
    <Footer />
    </>
  );
}
ReactDOM.render( <Main />, document.querySelector("#app"));

if(module.hot){
  module.hot.accept()
}