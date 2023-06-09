 import  {  useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
 import { useNavigate  } from "react-router-dom";
// import axios from "axios";
// import Signup from './signup';
//import Login from './login';
import Homeheader from "../components/homeheader";
import Leftbar from "../components/leftbar";
import Middle from "../components/middle";
import Rightbar from "../components/rightbar";
// import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

import Cookies from 'js-cookie'


//import '../css/headermenu.css'
import '../css/leftbar.css';
import '../css/home.css'




function Home() {
  const navigate = useNavigate();
 
  useEffect(()=>{
     const token= Cookies.get('token');
 if(!token){
  navigate('/login');
 }
    }, [navigate]); 

  //const [UserToken, setUserToken] = useState(Cookies.get('token'));

    /*
  const [cartdisplay, setcartdisplay]=useState({ left:"-70%",transition: "0.3s" });
  const display=()=>{
    setcartdisplay({show:true, left:"0",transition: "0.3s" });
   // console.log(cartdisplay);
    unshow();
  }

  const undisplay=()=>{
    setcartdisplay({show:false, left:"-70%" ,transition: "0.3s" });
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });
   // console.log(cartdisplay);
  }

  const show=()=>{
    setcartshow({show:true, width:"100%" ,transition: "0.3s"});
  //  console.log(cartshow);
    undisplay();
  }

  const unshow=()=>{
    setcartshow({show:false, width:"0" });
 //   console.log(cartshow);
  }

    {/*   <Header 
          onDisplay={display} 
          cartdisplay={cartdisplay} 
          onShow={show} 
          onUnDisplay={undisplay} 
          onUnShow={unshow} 
          />
            Dasboard
          
*/

// const UserToken = Cookies.get('token');

  return (
    <div className="home">
      <Homeheader />
      <main>
        <div className="container">
          <Leftbar />
          <Middle />
          <Rightbar />
        </div>
      </main>
    </div>
  );

}

export default Home;