import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
//import "../css/form.css";
//import useLocalStorage from "../hooks/uselocalstorage";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from "framer-motion";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGoogle, FaApple } from 'react-icons/fa';
import Cookies from 'js-cookie'
import '../index.css'


// onAuthModal,
// authModal,
// Loader,
// unLoader,
// onHideAuthModal,
// showRegisterPage,
// onShowRegisterPage,
// onShowLoginPage,
// onSignUpMobile,
// onSignUpEmail,
// signUpEmail,
// setUserToken,
// setUserid,
// setNameUser,
// userid
function Login() {
    const navigate = useNavigate();


    const [showPassword, setShowPassword] = useState(false);
    const [LoginEmail, setLoginEmail] = useState(true);
    // const [openSidebar, setOpenSidebar] = useState(false);
    // const [loading, setLoading] = useState(false);

    const [userinputs, setuserinputs] = useState({
        account_status: "pending", verficationbadge_status: 'zero', username: "", mobileno: "", country: "", password: "", confirmpass: "",
    });
    const [Errormsg, setErrormsg] = useState('');
    //  const [localgov, setLga] = useState([]);

    //handle the changes
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
        setuserinputs((values) => ({ ...values, account_status: "pending", verficationbadge_status: 'zero', [name]: value, }))
        console.log(userinputs);
        // e.g {name:"yourInputname", email: "yourinputEmail", mobile:"yourInputMobile"}
    };


    //when button is submitted
    const handleEmailLoginSubmit = (event) => {
        event.preventDefault();
        // Loader();

        const name = event.target.name;
        const value = event.target.value;
        setuserinputs((values) => ({
            ...values,
            [name]: value,
        }));
        //console.log(userinputs);

        const API = "http://localhost/website/xermux/Api/LoginAccount.php";

        axios
            .post(API, userinputs, {
                headers: {
                    "content-type": "application/json",
                },
            })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    //    setOrders(response.data);
                    console.log(response.data);
                    if (response.data.status !== 500) {
                        navigate(`/page/${response.data.userid} `);
                        // onClear();
                        // onUnShow();
                        // unLoader();
                    } else {
                        setErrormsg(response.data.message);
                        // unLoader();
                    }
                }
            })
            .catch(function (error) {
                console.log("errorrrr", error);
                // unLoader();
            });
    };

    //when button is submitted
    const handleMobileLoginSubmit = (event) => {
        event.preventDefault();
        // Loader();

        const name = event.target.name;
        const value = event.target.value;
        setuserinputs((values) => ({
            ...values,
            [name]: value,
        }));
        //console.log(userinputs);

        const API = "http://localhost/websites/xermux/Api/LoginAccount.php";

        axios
            .post(API, userinputs, {
                headers: {
                    "content-type": "application/json",
                },
            })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    //    setOrders(response.data);
                    console.log(response.data);
                    if (response.data.status !== 500) {
                        navigate(`/page/${response.data.userid} `);
                        // onClear();
                        // onUnShow();
                        // unLoader();
                    } else {
                        setErrormsg(response.data.message);
                        // unLoader();
                    }
                }
            })
            .catch(function (error) {
                console.log("errorrrr", error);
                // unLoader();
            });
    };


    return (
        <AnimatePresence>
            <motion.main
                key="main"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ duration: 1 }} className={`h-[600px] overflow-hidden w-[100%] flex justify-center md:text-lg mt-[70px] bg-[#f1f1f1]    md:flex-row `}>
                <div className="form-container">
                    <div className="namebox">
                        <button type="submit" className="checkout-btn"> <FaApple /> Sign up with Apple </button>
                    </div>

                    <div className="namebox">
                        <button type="submit" className="checkout-btn"> <FaGoogle /> Sign up with Google </button>
                    </div>
                    {LoginEmail ? (
                        <>
                            <div className="mobilePhone">
                                <span onClick={() => setLoginEmail(!LoginEmail)} > Login with Mobile No </span>
                            </div>

                            <form onSubmit={handleEmailLoginSubmit}>
                                <div className="namebox">
                                    <label htmlFor="address">Email</label>
                                    <input type="text" name="email" placeholder="Email" value={userinputs.email || ""} onChange={handleChange} required />
                                </div>

                                <div className="namebox">
                                    <label htmlFor="address">Password</label>
                                    {showPassword ? (
                                        <EyeSlashIcon onClick={() => setShowPassword(!showPassword)} className='eye-icon' />
                                    ) : (
                                        <EyeIcon onClick={() => setShowPassword(!showPassword)} className='eye-icon' />
                                    )}

                                    <input type={showPassword ? 'text' : 'password'} placeholder="Password" name="password" value={userinputs.password || ""} onChange={handleChange} />
                                </div>

                                <div className="namebox">
                                    <div style={{ color: "#FF6600" }}> {Errormsg} </div>
                                    <button type="submit" className="checkout-btn"> Log In </button>
                                </div>
                            </form>
                        </>
                    ) : (
                        <>
                            <div className="mobilePhone">
                                <span onClick={() => setLoginEmail(!LoginEmail)} > Login with Email </span>
                            </div>
                            <form onSubmit={handleMobileLoginSubmit}>
                                <div className="namebox">
                                    <label htmlFor="address">Mobile No </label>
                                    <input type="text" name="mobileno" placeholder="Mobile No" value={userinputs.mobileno || ""} onChange={handleChange} required />
                                </div>

                                <div className="namebox">
                                    <label htmlFor="address">Password</label>
                                    <input type={showPassword ? 'text' : 'password'} name="password" value={userinputs.password || ""} onChange={handleChange} />
                                </div>

                                <div className="namebox">
                                    <div style={{ color: "#FF6600" }}> {Errormsg} </div>
                                    <button type="submit" className="checkout-btn"> Log In </button>
                                </div>
                            </form>
                        </>

                    )}
                </div>
                {/* -----------------------------------END OF CONTAINER -------------------------------- */}
            </motion.main>
        </AnimatePresence>
    );
}

export default Login;