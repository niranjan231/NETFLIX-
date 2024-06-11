import "./Modal.css";
import Modal1 from "./Modal1";
import {useState} from "react"
const Modal=()=>{
  const [showModal , setShowModl] = useState(false);
  const handleButton=()=>{
    setShowModl(true);
  }
  return(
    <>
  <div className="m-1">
    <h2>Welcome tp Visit this page</h2>
    <button onClick={handleButton}>Go More</button>
  </div>
  {
    showModal && <Modal1/>
  }
    </>
  )
}
export default Modal