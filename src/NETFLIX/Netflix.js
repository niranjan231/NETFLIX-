import "./Netflix.css";
import {useState} from "react";
// import { Dropdown } from "react-bootstrap";
import Modal from "./Modal";
const Netflix=()=>{
  const [signin , setSigIn] = useState(false);
  const handleSigin=()=>{
       setSigIn(true);
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
  <div><button className="btn-inp-1">Get Started</button></div>
  </div>
</div>

{/* second page */}
<div className="scr-2">
<div className="scr2-2">
  <h1 className="scr2-h1">Enjoy on your TV</h1>
  <p className="scr2-p" >Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players .</p>
</div>
<div className="scr2-img">
{/* <img className="scr2-img"  src="" > */}
{/* </img> */}
<video width="300" hight="400" control>
  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" ></source>
</video>
</div>
</div>


</div>
    )
}
export default Netflix;