import { useState } from "react";
import State from "./State";
import "./Modal1.css";
const Modal1=()=>{
  const [update , setUpdate] = useState();
  const handleUpdate=()=>{
window.location.href="./State.js"
  }
  return(
    <>
    {/* we have one empty div ant this is very impotent */}
    <div className="modal-wraper"></div>
    <div className="m-2">
      <h3>Welcome</h3>
      <p>Aug 24, 2022 · PeGraph is built from a delicate synergy of insights from social graph modelling and lightweight cryptography such as searchable encryption and additive secret sharing, supporting rich social search queries like exact queries,  <button onClick={handleUpdate} className="m2-btn" >SucessFully</button>
</p>
      {/* <button className="m2-btn" >SucessFully</button> */}

    </div>
    </>
  )
}
export default Modal1;