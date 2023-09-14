import './Home.css';
import Card from './Card';
const Home = ()=>{
    return(
        <div>
            <header>
         <div className="head">
    <h4>Pintu Cart</h4>
    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" className="image2" />
       </div>
       <div>
        <input className="inp-search" placeholder="Enter product name"></input>
       {/* <img src="https://img.uxwing.com/wp-content/themes/uxwing/download/user-interface/search-icon.png" className="image1" /> */}
       </div>
       <div className="cart">
         <p>Cart</p>
         <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="cart" className="image2" />
       </div>
         </header>
         <div className="panel">
            {/* <p>Home</p>
            <p>About</p>
            <p>Service</p>
            <p>Product</p>
            <p>Order</p> */}
            <a href='#' style={{color:"white"}} >Home</a>
            <a href='#' style={{color:"white"}}>About</a>
            <a href='#' style={{color:"white"}}>Service</a>
            <a href='#' style={{color:"white"}} >Order</a>
         </div>
         <div className="card-content">
        {/* <ListitemCard1></ListitemCard1>
        <ListitemCard1></ListitemCard1>
        <ListitemCard1></ListitemCard1>
        <ListitemCard1></ListitemCard1> */}
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <div className='first-content'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
        </div>
        <div className='footar'>
<div className='footar-1'>
  <div className='footar-h1'>
<h4>Get to Know Us</h4>
<p>About Us</p>
<p>Careers</p>
<p>Press Releases</p>
<p>Amazon Science</p>
<p>Facebook</p>
</div>
<div className='footar-h2'>
<h4>Contect Us</h4>
<p>Facebook</p>
<p>Twiter</p>
<p>Instagram</p>
<p>Phone Number</p>
</div>
<div className='footar-h3'>
<h4>Make Money with Us</h4>
<p>Sell under Amazon Accelerator</p>
<p>Protect and Build Your Brand</p>
<p>Amazon Global Selling</p>
<p>Become an Affiliate</p>
<p>Amazon Pay on Merchants</p>
</div>
<div className='footar-h4'>
<h4>Let Us Help You</h4>
<p>COVID-19 and Amazon</p>
<p>Your Account</p>
<p>Returns Centre</p>
<p>100% Purchase Protection</p>
<p>Amazon App Download</p>
</div>
</div>
<div className='img-paje'>
  <img className='img-1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1zRnseeTBRWwkfdthiyJPIZLNT-PW9FMwq_xp8PV-fQ&s'></img>
  <img className='img-2' src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/2048px-Facebook_icon.svg.png'></img>
</div>
        </div>
        </div>
    )
}
export default Home;