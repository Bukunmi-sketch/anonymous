//import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// import axios from "axios";
//import useLocalStorage from "./hooks/uselocalstorage";
import Signup from "./pages/signup";
import Login from "./pages/login";
//import Profile from "./pages/profile";
// import LandingNav from "./components/landingnav";
// import Sectionb from "./components/sectionb";
// import ActionButton from "./components/button";
// import Footer from "./components/footer";
//import Verify from "./pages/verify";
// import Home from "./pages/home";

// import { FaCartPlus, FaBars, FaTimes } from "react-icons/fa";
/*
import pica from '../Images/smallproduct.png'
import logo from '../Images/afrimamalogo.png'
*/

function App() {
  //s const ref = useRef();
  // const [loading, setLoading] = useState({ display: "none" });
  // const [bodyloading, setbodyLoading] = useState({ display: "block" });

 // const [userToken, setUserToken] = useState(2345);

  // function showMessage() {
  //   setMsgdisplay({ display: "block" });
  // }

  // function hideMessage() {
  //   setMsgdisplay({ display: "none" });
  // }

  // const Loader = () => {
  //   setTimeout(() => setLoading({ display: "block" }), 3000);
  // };

  // const bodyUnloader = () => {
  //   setTimeout(() => setbodyLoading({ display: "none" }), 3000);
  // };

  // const unLoader = () => {
  //   setLoading({ display: "none" });
  // };

  // const scrollto = () => {
  //   ref.current.scrollTo(0, 0);
  // };

  // useEffect(() => {
  //   Loader();
  //   bodyUnloader();
  //   // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  // }, []);

  return (
    <div className="app">
    {/*  <div id="loader" style={{ display: bodyloading.display }}>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
        <span class="span"></span>
      </div>
      */} 
      <BrowserRouter>
        <div className="bg-black" >
          {/* <h2>Welcome to <span class="webname">Xermux</span></h2>  -->  <div class="content" style={{ display: loading.display }}> */}

          <Routes>
            <Route path="/signup" element={ <Signup /> } />

            {/* <Route path="/verify" element={ <Verify /> } /> */}
            <Route path="/login" element={<Login />} />
            {/* <Route path="/" element={ <> <LandingNav /> <Sectionb /> </> } /> */}
             {/* <Route path="/home" element={ <> <Home/> </> } /> */}

            {/* <Route path="/profile" element={ <> <Profile/> </> } /> */}
          </Routes>
        </div>

      
      </BrowserRouter>
    </div>
  );
}

export default App;
