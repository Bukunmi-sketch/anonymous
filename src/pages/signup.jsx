import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/form.css";
//import useLocalStorage from "../hooks/uselocalstorage";
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from "framer-motion";
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGoogle, FaApple } from 'react-icons/fa';
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
function Signup() {
    const navigate = useNavigate();


    const [showPassword, setShowPassword] = useState(false);
    const [signUpEmail, setSignupEmail] = useState(true);
    // const [openSidebar, setOpenSidebar] = useState(false);
    // const [loading, setLoading] = useState(false);

    const [userinputs, setuserinputs] = useState({
        account_status: "pending", verficationbadge_status: 'zero', username: "", mobileno: "", country: "", password: "", confirmpass: "",
    });
    const [Errormsg, setErrormsg] = useState('');
    //  const [localgov, setLga] = useState([]);

    var countries = ["", "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];

    //handle the changes
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
        setuserinputs((values) => ({ ...values, account_status: "pending", verficationbadge_status: 'zero', [name]: value, }))
        console.log(userinputs);
        // e.g {name:"yourInputname", email: "yourinputEmail", mobile:"yourInputMobile"}
    };

    //when button is submitted
    const handleMobileRegisterSubmit = (event) => {
        event.preventDefault();
        // Loader();
        const name = event.target.name;
        const value = event.target.value;
        setuserinputs((values) => ({
            ...values, account_status: "pending", verficationbadge_status: 'zero', [name]: value,
        }));
        //console.log(userinputs);
        const API = "http://localhost/websites/xermux/Api/registerMobileAccount.php";
        axios
            .post(API, userinputs, {
                headers: {
                    "content-type": "application/json",
                },
            })
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log(response.data);
                    if (response.data.status == 200) {
                        console.log(response.data);
                        console.log(response.data.message);
                        // setNameUser(response.data.username);
                        // setUserToken(response.data.usertoken);
                        // setUserid(response.data.userid);
                        // setErrormsg(userid);
                        //  navigate('/verify');
                    } else {
                        setErrormsg(response.data.message);
                        console.log("erro mess", response.data.message);
                        // unLoader();
                    }
                }
            })
            .catch(function (error) {
                setErrormsg(error);
                console.log("errorrrr", error);
                //unLoader();
            });
    };

    //when button is submitted
    const handleEmailRegisterSubmit = (event) => {
        event.preventDefault();
        // Loader();

        const name = event.target.name;
        const value = event.target.value;
        setuserinputs((values) => ({
            ...values,
            [name]: value,
        }));
        //console.log(userinputs);

        const API = "http://localhost/websites/xermux/Api/RegisterAccount.php";

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
        <>

            <AnimatePresence>
                <motion.main
                    key="main"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.5 }} className="auth">

                    <div className="form-container">
                        <div className="namebox">
                            <button type="submit" className="checkout-btn"> <FaApple/> Sign up with Apple </button>
                        </div>

                        <div className="namebox">
                            <button type="submit" className="checkout-btn"> <FaGoogle/> Sign up with Google </button>
                        </div>
                        {signUpEmail ? (
                            <form onSubmit={handleEmailRegisterSubmit} >
                                <div className="mobile-phone">
                                    <span onClick={() => setSignupEmail(!signUpEmail)}> Sign up with Mobile No Instead  </span>
                                </div>
                                <div className="errorinfo"></div>

                                <div className="namebox">
                                    <label htmlFor="Name">Username </label>
                                    <input type="text" name="username" value={userinputs.username || ""} onChange={handleChange} required />
                                </div>

                                <div className="flexnameboxa">
                                    <div className="namebox">
                                        <label htmlFor="email">Email Address</label>
                                        <input type="email" name="email" value={userinputs.email || ""} onChange={handleChange} required />
                                    </div>

                                    <div className="namebox">
                                        <label htmlFor="address">Country</label>
                                        <select name="country" onChange={handleChange} required>
                                            {countries.map((option) => (<option key={option} value={option} onChange={handleChange} > {option} </option>))}
                                        </select>
                                    </div>
                                </div>

                                <div className="namebox">
                                    <label htmlFor="address"> Password </label>

                                    {showPassword ? (
                                        <EyeSlashIcon onClick={() => setShowPassword(!showPassword)} className='eye-icon' />
                                    ) : (
                                        <EyeIcon onClick={() => setShowPassword(!showPassword)} className='eye-icon' />
                                    )}

                                    <input type={showPassword ? 'text' : 'password'} name="password" value={userinputs.password || ""} onChange={handleChange} required />
                                </div>

                                <div className="namebox">
                                    <label htmlFor="address"> Confirm Password </label>
                                    <input type="text" name="confirmpass" value={userinputs.confirmpass || ""} onChange={handleChange} />
                                </div>

                                <div className="namebox">
                                    <div style={{ color: "#FF6600" }}> {Errormsg} </div>
                                    <button type="submit" className="checkout-btn "> Sign up with email </button>
                                </div>

                                <div className="have-account">
                                    Already have an account ? <span>Login</span>
                                </div>
                            </form>


                        ) : (
                            <form onSubmit={handleMobileRegisterSubmit} >
                                <div className="mobile-phone">
                                    <span onClick={() => setSignupEmail(!signUpEmail)}> Sign up with Email Instead  </span>
                                </div>
                                <div className="errorinfo"></div>

                                <div className="namebox">
                                    <label htmlFor="Name">Username </label>
                                    <input type="text" name="username" value={userinputs.username || ""} onChange={handleChange} required />
                                </div>

                                <div className="flexnameboxa">
                                    <div className="namebox">
                                        <label htmlFor="mobile No"> Mobile No</label>
                                        <input type="number" name="mobileno" value={userinputs.email || ""} onChange={handleChange} required />
                                    </div>

                                    <div className="namebox">
                                        <label htmlFor="address">Country</label>
                                        <select name="country" onChange={handleChange} required>
                                            {countries.map((option) => (<option key={option} value={option} onChange={handleChange} > {option} </option>))}
                                        </select>
                                    </div>
                                </div>

                            


                                <div className="namebox">
                                    <label htmlFor="address"> Password </label>

                                    {showPassword ? (
                                        <EyeSlashIcon onClick={() => setShowPassword(!showPassword)} className='eye-icon' />
                                    ) : (
                                        <EyeIcon onClick={() => setShowPassword(!showPassword)} className='eye-icon' />
                                    )}

                                    <input type={showPassword ? 'text' : 'password'} name="password" value={userinputs.password || ""} onChange={handleChange} required />
                                </div>

                                {/* <div className='flex flex-col  mb-10 flex-1 '>
                                <label className='font-bold'>Ema</label>
                                <input type='email' placeholder='Email' className=' border border-[#cecece] p-2 m-4 flex-1 rounded-[30px]  bg-white text-black outline-none ' required/>
                               </div> */}

                                <div className="namebox">
                                    <label htmlFor="address"> Confirm Password </label>
                                    <input type="text" name="confirmpass" value={userinputs.confirmpass || ""} onChange={handleChange} />
                                </div>

                                <div className="namebox">
                                    <div style={{ color: "#FF6600" }}> {Errormsg} </div>
                                    <button type="submit" className="checkout-btn"> Sign up with Mobile </button>
                                </div>

                                <div className="have-account">
                                    Already have an account ? <span>Login</span>
                                </div>
                            </form>

                        )}
                    </div>
                    {/* -----------------------------------END OF CONTAINER -------------------------------- */}
                </motion.main>
            </AnimatePresence>


        </>
    );
}

export default Signup;