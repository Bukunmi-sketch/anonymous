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
            {signUpEmail ? (
                <AnimatePresence>
                    <motion.main
                        key="main"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 } } className="auth">

                    <div className="form-container">
                        <form onSubmit={handleEmailRegisterSubmit} >
                            <div className="mobile-phone">
                                <span onClick={() => setSignupEmail(!signUpEmail)}> Sign up with Mobile No Instead  </span>
                            </div>
                            <div className="errorinfo"></div>

                            <div className="namebox">
                                <label htmlFor="Name">Username </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={userinputs.username || ""}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="flexnameboxa">
                                <div className="namebox">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={userinputs.email || ""}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                <div className="namebox">
                                    <label htmlFor="address">Country</label>
                                    <select name="country" onChange={handleChange} required>
                                        {countries.map((option) => (
                                            <option
                                                key={option}
                                                value={option}
                                                onChange={handleChange}
                                            >
                                                {option}
                                            </option>
                                        ))}
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

                                <input type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={userinputs.password || ""}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="namebox">
                                <label htmlFor="address"> Confirm Password </label>
                                <input
                                    type="text"
                                    name="confirmpass"
                                    value={userinputs.confirmpass || ""}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="namebox">
                                <div style={{ color: "#FF6600" }}> {Errormsg} </div>
                                <button type="submit" className="checkout-btn bg-red-800">
                                    Sign up with email
                                </button>
                            </div>

                            <div className="have-account">
                                Already have an account ?{" "}
                                <button>Login</button>
                            </div>
                        </form>
                        </div>
                        {/* -----------------------------------END OF CONTAINER -------------------------------- */}
                    </motion.main>
                </AnimatePresence>
            ) : (

                <AnimatePresence>
                    <motion.main
                        key="main"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 0.5 }} className={`min-h-[50vh] overflow-hidden w-[100%] flex justify-center md:text-lg mt-[70px] font-bold border bg-[#f1f1f1] md:flex-row `}>

                        {/* CONTAINER BOX */}

                        <section className="flex w-[100%] flex-col items-center relative bg-white md:flex-row md:h-[80%] md:mt-[20px] sm:w-[70%] md:w-[80%]  ">
                            {/* FIRST BOX */}
                            <div className='flex flex-col items-center h-full  w-full   md:w-[50%] '>
                                <h3 className='mt-3 text-md'>Create a New Account</h3>

                                <div className='flex flex-col   p-6 w-full'>
                                    <div className='flex flex-col  mb-10 flex-1 '>
                                        <button className=' flex justify-center items-center gap-x-4 border border-[#000] p-4 rounded-lg cursor-pointer  font-bold ' > <FaGoogle className='h-6 w-7' />  Signup with Google</button>
                                    </div>

                                    <div className='flex flex-col  mb-10 flex-1 '>
                                        <button className='flex justify-center items-center gap-x-4 border border-[#cecece] p-4 rounded-lg cursor-pointer bg-black text-white font-bold'> <FaApple className='h-6 w-7' /> Signup with Apple </button>
                                    </div>

                                    <div className="mobilePhone">
                                        <span onClick={() => setSignupEmail(!signUpEmail)}> Sign up with Mobile No Instead  </span>
                                    </div>

                                    <div className='flex flex-col justify-center items-center mb-10 flex-1 '>
                                        <p>OR</p>
                                    </div>


                                    <form onSubmit={handleMobileRegisterSubmit} >
                                        <div>{Errormsg}</div>
                                        <div className='flex flex-col  mb-10 flex-1 '>
                                            <label className='font-bold'>Firstname</label>
                                            <input type='text' name="username" value={userinputs.username || ""} onChange={handleChange} className=' border border-[#cecece] p-4 flex-1 rounded-lg  bg-white outline-none ' required />

                                        </div>
                                        {/* {signUpEmail ? ( */}
                                        <div className='flex flex-col  mb-10 flex-1 '>
                                            <label className='font-bold'>Email</label>
                                            <input type='email' name="email" value={userinputs.email || ""} onChange={handleChange} className=' border border-[#cecece] p-4 flex-1 rounded-lg  bg-white outline-none ' required />

                                        </div>

                                        <div className='flex flex-col  mb-10 flex-1 '>
                                            <label className='font-bold'> Country </label>
                                            <select name="country" onChange={handleChange} required className=' border border-[#cecece] p-4 flex-1 rounded-lg  bg-white outline-none '>
                                                {countries.map((option) => (<option key={option} value={option} onChange={handleChange} > {option} </option>))}
                                            </select>

                                        </div>

                                        <div className='flex flex-col  mb-10 flex-1 relative'>
                                            <label className='font-bold'>Password</label>
                                            {showPassword ? (
                                                <EyeSlashIcon onClick={() => setShowPassword(!showPassword)} className='icon absolute mt-[40px] ml-[90%]' />
                                            ) : (
                                                <EyeIcon onClick={() => setShowPassword(!showPassword)} className='icon absolute mt-[40px] ml-[90%] ' />
                                            )}

                                            <input type={showPassword ? 'text' : 'password'} placeholder='password' name='password' value={userinputs.password || ""} onChange={handleChange} className=' border border-[#cecece] p-4 flex-1 rounded-lg  bg-white outline-none ' />
                                        </div>

                                        <div className='flex flex-col  mb-10 flex-1 '>
                                            <button className='bg-[#3C66A0] text-white text-md py-4 px-4 border border-solid border-[#3C66A0] rounded-lg font-bold' > Continue </button>
                                        </div>
                                        {/* <Link href="/customize">Continue </Link> */}
                                    </form>


                                </div>
                            </div>

                            {/* -----------------------------------END OF FIRST BOX -------------------------------- */}

                            {/* -----------------------------------SECOND  BOX -------------------------------- */}
                            <div className=' flex-col h-full hidden md:w-[50%] md:flex '>
                                <div className='w-full mt-[-150px] flex-shrink-0 rounded-xl relative'>
                                    <img src='' alt="healthworker" className='h-[400px] rounded-xl shadow-xl w-full' />
                                </div>
                                <div className=' mt-2.5 rounded-xl relative'>
                                    <img src='' alt="healthworker" className='h-[400px] flex-shrink-0 rounded-xl shadow-xl w-full' />
                                </div>
                            </div>

                            {/* -----------------------------------END OF SECOND  BOX -------------------------------- */}

                        </section>

                        {/* -----------------------------------END OF CONTAINER -------------------------------- */}
                    </motion.main>
                </AnimatePresence>

            )}

        </>
    );
}

export default Signup;