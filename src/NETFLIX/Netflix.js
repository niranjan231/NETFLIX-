import "./Netflix.css";
import {useState} from "react";
// import { Dropdown } from "react-bootstrap";
import Modal from "./Modal";
import Download from "./Download";
import Add from "./Add";
import Cartun from "./Cartun";
import Footer from "./Footer";


const Netflix=()=>{
  const [signin , setSigIn] = useState(false);
  const [emailBtn , setEmailBtn] = useState("");
  const handleSigin=()=>{
       setSigIn(true);
  }
  const handleEmailBtn=()=>{
  
    window.location.href="https://www.netflix.com/signup/registration?locale=en-IN";
  }
    return(
        <div>
            <div className="inter">
        <div className="nt-1" >
            <div> <h2>NETFLIX</h2></div>
            <div><button className="btn-2">English</button></div>
            <div><button onClick={handleSigin} className="btn-3" >Sign In</button></div>
  </div>
  {
    signin &&  <Modal/>

  }

  <div className="heading-1"><h1>Unlimited movies, TV shows and more</h1>
  <h4>Watch anywhere. Cancel anytime.</h4>
<h5>Ready to watch? Enter your email to create or restart your membership.</h5>
  </div>
  <div className="input-box-1">
    <div><input className="input-box-2" type="text" placeholder="Email Adress" ></input></div>
  <div><button onClick={handleEmailBtn} className="btn-inp-1">Get Started</button></div>
  </div>
</div>
{/* second screen */}
< Add/>
<Cartun/>
<Download/>
<Footer/>


</div>
    )
}
export default Netflix;