import "./Modal.css";
const Modal=()=>{
    return(
        <>
<div className="div-flex" ></div>
    <div className="modal-1" >
<h1 className="modal-sign">SignIn</h1>
<form className="form-1" >
    <div>
        <input className='modal-inp1' placeholder="email" ></input>
    </div>
    <div>
        <input className='modal-inp2' placeholder="Pasword" ></input>
    </div>
    <div>
        <button  className='modal-inp3' >SigIn</button>
    </div>
    <h5 className="modal-h3" >OR</h5>
<div>
        <button  className='modal-inp4' >Use a SigIn code</button>
    </div>
</form>

    </div>

        </>
    )
}
export default Modal;