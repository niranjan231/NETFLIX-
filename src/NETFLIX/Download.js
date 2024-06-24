
import { useState } from "react";
import Space from "./Space";
import "./Download.css";
const Download=()=>{
  const [show , setShow] = useState(false);
  const handleShow=()=>{
    setShow(true);
    
  }


    return(
        <>
        <div className="download-in">
      <h1 className="download-1">Frequently Asked Questions</h1>

      <button onClick={handleShow}  className="download-2" >
        <div className="download-3"><span>What is Netflix</span></div>
        <div className="download-4"><h4>+</h4></div>
      </button>
      {/* space screen */}
      {
        show && <Space/>
      }
      {/* second */}
      <button style={{marginTop:"8px"}} className="download-2" >
        <div className="download-3"><span>What is Netflix</span></div>
        <div className="download-4"><h4>+</h4></div>
      </button>
      <button style={{marginTop:"8px"}} className="download-2" >
        <div className="download-3"><span>What is Netflix</span></div>
        <div className="download-4"><h4>+</h4></div>
      </button>
    
      <button style={{marginTop:"8px"}} className="download-2" >
        <div className="download-3"><span>What is Netflix</span></div>
        <div className="download-4"><h4>+</h4></div>
      </button>
      <button style={{marginTop:"8px"}} className="download-2" >
        <div className="download-3"><span>What is Netflix</span></div>
        <div className="download-4"><h4>+</h4></div>
      </button>
    
    <div className="download-inputbox">
      <div>
      <input className="download-input" type="email" placeholder="Emial Adress" ></input>
      </div>
      <div><button className="download-button" >Get Started</button></div>
    </div>
    
    
      </div>
        </>
    )
}
export default Download;