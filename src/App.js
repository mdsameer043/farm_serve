import logo from './images/logo.png';
// import adbgpattern from './images/ad-bg-pattern.png';
import adimage1 from './images/ad-image-1.png';
import adimage2 from './images/ad-image-2.png';
// import adimage3 from './images/ad-image-3.png';
// import adimage4 from './images/ad-image-4.png';
import backgroundpattern from './images/background-pattern.jpg';
// import bannerimage1 from './images/banner-image-1.jpg';
// import bannerimage2 from './images/banner-image-2.jpg';
// import bgdotpattern from './images/bg-dot-pattern.png';
import bgleavesimgpattern from './images/bg-leaves-img-pattern.png';
// import bgleavespattern from './images/bg-leaves-pattern.png';
// import bglight from './images/bg-light.jpg';
// import bgpattern2 from './images/bg-pattern-2.png';
// import googleplay from './images/google-play.jpg';
// import iconanimalproductsdrumsticks from './images/icon-animal-products-drumsticks.png';
// import iconbreadbaguette from './images/icon-bread-baguette.png';
// import iconbreadherbflour from './images/icon-bread-herb-flour.png';
// import iconsoftdrinksbottle from './images/icon-soft-drinks-bottle.png';
// import iconvegetablesbroccoli from './images/icon-vegetables-broccoli.png';
// import iconwineglassbottle from './images/icon-wine-glass-bottle.png';
// import phone from './images/phone.png';
// import postthumb1 from './images/post-thumb-1.jpg';
// import postthumb2 from './images/post-thumb-2.jpg';
// import postthumb3 from './images/post-thumb-3.jpg';

import productthumb1 from './images/product-thumb-1.png';
import productthumb2 from './images/product-thumb-2.png';
// import productthumb11 from './images/product-thumb-11.jpg';
// import productthumb12 from './images/product-thumb-12.jpg';
// import productthumb13 from './images/product-thumb-13.jpg';
// import productthumb14 from './images/product-thumb-14.jpg';

// import reviewer1 from './images/reviewer-1.jpg';
// import reviewer2 from './images/reviewer-2.jpg';
// import reviewer3 from './images/reviewer-3.jpg';


// import singelproductitem from './images/singel-product-item.jpg';
// import slide1 from './images/slide-1.jpg';
// import slide2 from './images/slide-2.jpg';
// import slide3 from './images/slide-3.jpg';
// import slide4 from './images/slide-4.jpg';


// import thumbavocado from './images/thumb-avocado.png';
import thumbbananas from './images/thumb-bananas.png';
import thumbbiscuits from './images/thumb-biscuits.png';
import thumbcucumber from './images/thumb-cucumber.png';
// import thumbherb from './images/thumb-herb.jpg';
// import thumbhoney from './images/thumb-honey.jpg';
// import thumbjunk from './images/thumb-junk.jpg';
import thumbmilk from './images/thumb-milk.png';
import thumborangejuice from './images/thumb-orange-juice.png';
import thumbraspberries from './images/thumb-raspberries.png';
import thumbtomatoes from './images/thumb-tomatoes.png';
import thumbtomatoketchup from './images/thumb-tomatoketchup.png';
// import thumbtuna from './images/thumb-tuna.jpg';
import './App.css';
import './style.css';
import './css/vendor.css';
import React, { useEffect,useState } from 'react';
// import Swiper, { Navigation } from 'swiper';
import 'swiper/css';
// import 'swiper/css/navigation';
import CategoryCarousel from './components/categorycorosel'
import { Link,useNavigate } from "react-router-dom";
// var fs =require("fs")

export default function App() {
  const navigate = useNavigate();


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const submit = async (e) => {
    if (e) e.preventDefault();// Prevent default form submission
    try {
      const response = await fetch("http://localhost:5000/api/signin", {
        // Use your API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "user",
          action:"getUser",
        }),
      });

      const data = await response.json();
      setName(data.data.name)
      setEmail(data.data.email)
      setPhone(data.data.phone)
      setPassword(data.data.password)
      setAddress(data.data.address)
      console.log(data.data)
    } catch (error) {
      setName("User")
      setEmail("email")
      setPhone("phone")
      setPassword("password")
      setAddress("address")
      // console.error("Error:", error);
    }
  };
  useEffect(() => {
    // Call submit when the component mounts
    submit();
  }, []);



  const signout = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/signout", {
        // Use your API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });

      const data = await response.json();
      setName(data.data.name)
      setEmail(data.data.email)
      setPhone(data.data.phone)
      setPassword(data.data.password)
      setAddress(data.data.address)
      console.log(data.data)
      alert("Signed out successfully");
      navigate('/', { replace: true });
    } catch (error) {
      console.error("Error:", error);
    }
  };

    return (
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none'}}>
          <defs>
            <symbol xmlns="http://www.w3.org/2000/svg" id="link" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 19a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm-5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-right" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="category" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 5.5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="calendar" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="heart" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="plus" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="minus" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="cart" viewBox="0 0 24 24">
              <path fill="currentColor" d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="check" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="trash" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Zm-3-1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="star-outline" viewBox="0 0 15 15">
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7.5 9.804L5.337 11l.413-2.533L4 6.674l2.418-.37L7.5 4l1.082 2.304l2.418.37l-1.75 1.793L9.663 11L7.5 9.804Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="star-solid" viewBox="0 0 15 15">
              <path fill="currentColor" d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="search" viewBox="0 0 24 24">
              <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="user" viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="close" viewBox="0 0 15 15">
              <path fill="currentColor" d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z" />
            </symbol>
          </defs>
        </svg>
        <div className="preloader-wrapper">
          <div className="preloader">
          </div>
        </div>
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasCart" aria-labelledby="My Cart">
          <div className="offcanvas-header justify-content-center">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <div className="order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Your cart</span>
                <span className="badge bg-primary rounded-pill">3</span>
              </h4>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Growers cider</h6>
                    <small className="text-body-secondary">Brief description</small>
                  </div>
                  <span className="text-body-secondary">$12</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Fresh grapes</h6>
                    <small className="text-body-secondary">Brief description</small>
                  </div>
                  <span className="text-body-secondary">$8</span>
                </li>
                <li className="list-group-item d-flex justify-content-between lh-sm">
                  <div>
                    <h6 className="my-0">Heinz tomato ketchup</h6>
                    <small className="text-body-secondary">Brief description</small>
                  </div>
                  <span className="text-body-secondary">$5</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Total (USD)</span>
                  <strong>$20</strong>
                </li>
              </ul>
              <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
            </div>
          </div>
        </div>
        <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasSearch" aria-labelledby="Search">
          <div className="offcanvas-header justify-content-center">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
          </div>
          <div className="offcanvas-body">
            <div className="order-md-last">
              <h4 className="d-flex justify-content-between align-items-center mb-3">
                <span className="text-primary">Search</span>
              </h4>
              <form role="search" action="index.html" method="get" className="d-flex mt-3 gap-0">
                <input className="form-control rounded-start rounded-0 bg-light" type="email" placeholder="What are you looking for?" aria-label="What are you looking for?" />
                <button className="btn btn-dark rounded-end rounded-0" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
        <header>
          <div className="container-fluid">
            <div className="row py-3 border-bottom">
              <div className="col-sm-4 col-lg-3 text-center text-sm-start">
                <div className="main-logo">
                  <a href="#">
                    <img src={logo} alt="logo" className="img-fluid" />
                  </a>
                </div>
              </div>
              <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
                <div className="search-bar row bg-light p-2 my-2 rounded-4">
                  <div className="col-md-4 d-none d-md-block">
                    <select className="form-select border-0 bg-transparent">
                      <option>Fertiliser</option>
                      <option>pesticides</option>
                      <option>services</option>
                      {/* <option></option> */}
                    </select>
                  </div>
                  <div className="col-11 col-md-7">
                    <form id="search-form" className="text-center" action="index.html" method="post">
                      <input type="text" className="form-control border-0 bg-transparent" placeholder="Search for Good Quailty products" />
                    </form>
                  </div>
                  <div className="col-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                      <path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
                {/* <div class="support-box text-end d-none d-xl-block">
                        <span class="fs-6 text-muted">For Support?</span>
                        <h5 class="mb-0">+980-34984089</h5>
                    </div> */}
                <ul className="d-flex justify-content-end list-unstyled m-0">
                  <li>
                    <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="dropdown" aria-expanded="false">
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#user" />
                      </svg>
                    </a>
                    <ul className="dropdown-menu text-small">
                      <li><h6 className="dropdown-item">{name}</h6></li>
                      <li><Link to="/profilePage" className="dropdown-item">Profile</Link></li>
                      {/* <li><h3 className="dropdown-item">{user}</h3></li> */}
                      <li><a className="dropdown-item" href="#">Settings</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li>{(name==="User")?<Link to="/signin"className="dropdown-item ">Sign in</Link>:<h6 className="dropdown-item" onClick={signout} style={{ cursor: 'pointer' }}>Sign out</h6>}</li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="rounded-circle bg-light p-2 mx-1">
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#heart" />
                      </svg>
                    </a>
                  </li>
                  <li className="d-lg-none">
                    <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#cart" />
                      </svg>
                    </a>
                  </li>
                  <li className="d-lg-none">
                    <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas" data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                      <svg width={24} height={24} viewBox="0 0 24 24">
                        <use xlinkHref="#search" />
                      </svg>
                    </a>
                  </li>
                </ul>
                <div className="cart text-end d-none d-lg-block dropdown">
                  <button className="border-0 bg-transparent d-flex flex-column gap-2 lh-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                    <span className="fs-6 text-muted dropdown-toggle">Your Cart</span>
                    <span className="cart-total fs-5 fw-bold">$1290.00</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row py-3">
              <div className="d-flex  justify-content-center justify-content-sm-between align-items-center">
                <nav className="main-menu d-flex navbar navbar-expand-lg">
                  <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="offcanvas-header justify-content-center">
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body">
                      <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                        <li className="nav-item active">
                          <a href="#" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                          {/* <Link to="servicePage" className="nav-link">Services</Link> */}
                          <a href="/servicePage" className="nav-link">Services</a>
                        </li>
                        <li className="nav-item">
                          <a href="/contactPage" className="nav-link">Contact Us</a>
                        </li>
                        <li className="nav-item">
                          <a href="/ordersPage" className="nav-link">orders</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
        <section className="py-3" style={{backgroundImage: `url(${backgroundpattern})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="banner-blocks">
                  <div className="banner-ad large bg-info block-1">
                    <div className="swiper main-swiper">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <div className="row banner-content p-5">
                            <div className="content-wrapper col-md-7">
                              <div className="categories my-3">100% natural</div>
                              <h3 className="display-4">Fresh Smoothie &amp; Summer Juice</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
                                massa diam elementum.</p>
                              <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Shop
                                Now</a>
                            </div>
                            <div className="img-wrapper col-md-5">
                              <img src={productthumb1} alt='nothing' className="img-fluid" />
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="row banner-content p-5">
                            <div className="content-wrapper col-md-7">
                              <div className="categories mb-3 pb-3">100% natural</div>
                              <h3 className="banner-title">Fresh Smoothie &amp; Summer Juice</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
                                massa diam elementum.</p>
                              <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop
                                Collection</a>
                            </div>
                            <div className="img-wrapper col-md-5">
                              <img src={productthumb1} alt='nothing' className="img-fluid" />
                            </div>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="row banner-content p-5">
                            <div className="content-wrapper col-md-7">
                              <div className="categories mb-3 pb-3">100% natural</div>
                              <h3 className="banner-title">Heinz Tomato Ketchup</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim
                                massa diam elementum.</p>
                              <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop
                                Collection</a>
                            </div>
                            <div className="img-wrapper col-md-5">
                              <img src={productthumb2} className="img-fluid" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-pagination" />
                    </div>
                  </div>
                  <div className="banner-ad bg-success-subtle block-2" style={{background: `url(${adimage1}) no-repeat`, backgroundPosition: 'right bottom'}}>
                    <div className="row banner-content p-5">
                      <div className="content-wrapper col-md-7">
                        <div className="categories sale mb-3 pb-3">20% off</div>
                        <h3 className="banner-title">Fruits &amp; Vegetables</h3>
                        <a href="#" className="d-flex align-items-center nav-link">Shop Collection <svg width={24} height={24}>
                            <use xlinkHref="#arrow-right" />
                          </svg></a>
                      </div>
                    </div>
                  </div>
                  <div className="banner-ad bg-danger block-3" style={{background: `url(${adimage2}) no-repeat`, backgroundPosition: 'right bottom'}}>
                    <div className="row banner-content p-5">
                      <div className="content-wrapper col-md-7">
                        <div className="categories sale mb-3 pb-3">15% off</div>
                        <h3 className="item-title">Baked Products</h3>
                        <a href="#" className="d-flex align-items-center nav-link">Shop Collection <svg width={24} height={24}>
                            <use xlinkHref="#arrow-right" />
                          </svg></a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* / Banner Blocks */}
              </div>
            </div>
          </div>
        </section>




        <CategoryCarousel/>




        <section className="py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12">
                <div className="bootstrap-tabs product-tabs">
                  <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                    <h3>Trending Products</h3>
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a href="#" className="nav-link text-uppercase fs-6 active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all">All</a>
                        <a href="#" className="nav-link text-uppercase fs-6" id="nav-fruits-tab" data-bs-toggle="tab" data-bs-target="#nav-fruits">Fruits &amp; Veges</a>
                        <a href="#" className="nav-link text-uppercase fs-6" id="nav-juices-tab" data-bs-toggle="tab" data-bs-target="#nav-juices">Juices</a>
                      </div>
                    </nav>
                  </div>
                  <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                      <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        <div className="col">
                          <div className="product-item">
                            <span className="badge bg-success position-absolute m-3">-30%</span>
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbbananas} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <span className="badge bg-success position-absolute m-3">-30%</span>
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbbiscuits} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbcucumber} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbmilk} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbbananas} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbbiscuits} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbcucumber} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbmilk} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbbananas} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbbiscuits} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* / product-grid */}
                    </div>
                    <div className="tab-pane fade" id="nav-fruits" role="tabpanel" aria-labelledby="nav-fruits-tab">
                      <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        <div className="col">
                          <div className="product-item">
                            <span className="badge bg-success position-absolute m-3">-30%</span>
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbcucumber} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <span className="badge bg-success position-absolute m-3">-30%</span>
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbmilk} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <span className="badge bg-success position-absolute m-3">-30%</span>
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumborangejuice} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbraspberries} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbbananas} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbbananas} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* / product-grid */}
                    </div>
                    <div className="tab-pane fade" id="nav-juices" role="tabpanel" aria-labelledby="nav-juices-tab">
                      <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbcucumber} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbmilk} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbtomatoes} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbtomatoketchup} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbbananas} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                        <div className="col">
                          <div className="product-item">
                            <a href="#" className="btn-wishlist"><svg width={24} height={24}>
                                <use xlinkHref="#heart" />
                              </svg></a>
                            <figure>
                              <a href="single-product.html" title="Product Title">
                                <img src={thumbbananas} className="tab-image" />
                              </a>
                            </figure>
                            <h3>Sunstar Fresh Melon Juice</h3>
                            <span className="qty">1 Unit</span><span className="rating"><svg width={24} height={24} className="text-primary">
                                <use xlinkHref="#star-solid" />
                              </svg> 4.5</span>
                            <span className="price">$18.00</span>
                            <div className="d-flex align-items-center justify-content-between">
                              <div className="input-group product-qty">
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-left-minus btn btn-danger btn-number" data-type="minus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#minus" />
                                    </svg>
                                  </button>
                                </span>
                                <input type="text" id="quantity" name="quantity" className="form-control input-number" defaultValue={1} />
                                <span className="input-group-btn">
                                  <button type="button" className="quantity-right-plus btn btn-success btn-number" data-type="plus">
                                    <svg width={16} height={16}>
                                      <use xlinkHref="#plus" />
                                    </svg>
                                  </button>
                                </span>
                              </div>
                              <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* / product-grid */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container-fluid">
            <div className="bg-secondary py-5 my-5 rounded-5" style={{background: `url(${bgleavesimgpattern}) no-repeat`}}>
              <div className="container my-5">
                <div className="row">
                  <div className="col-md-6 p-5">
                    <div className="section-header">
                      <h2 className="section-title display-4">Get <span className="text-primary">25% Discount</span>
                        on your first purchase</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dictumst amet, metus, sit massa
                      posuere maecenas. At tellus ut nunc amet vel egestas.</p>
                  </div>
                  <div className="col-md-6 p-5">
                    <form>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control form-control-lg" name="name" id="name" placeholder="Name" />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control form-control-lg" name="email" id="email" placeholder="abc@mail.com" />
                      </div>
                      <div className="form-check form-check-inline mb-3">
                        <label className="form-check-label" htmlFor="subscribe">
                          <input className="form-check-input" type="checkbox" id="subscribe" defaultValue="subscribe" />
                          Subscribe to the newsletter</label>
                      </div>
                      <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-dark btn-lg">Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-5">
          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
              <div className="col">
                <div className="card mb-3 border-0">
                  <div className="row">
                    <div className="col-md-2 text-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Zm-3.91-3H9L7.34 6H19.2ZM9.5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z" />
                      </svg>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <h5>Free delivery</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-3 border-0">
                  <div className="row">
                    <div className="col-md-2 text-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19.63 3.65a1 1 0 0 0-.84-.2a8 8 0 0 1-6.22-1.27a1 1 0 0 0-1.14 0a8 8 0 0 1-6.22 1.27a1 1 0 0 0-.84.2a1 1 0 0 0-.37.78v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78ZM18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39a10 10 0 0 0 6 1.39Zm-4.46-2.29l-2.69 2.7l-.89-.9a1 1 0 0 0-1.42 1.42l1.6 1.6a1 1 0 0 0 1.42 0L15 11a1 1 0 0 0-1.42-1.42Z" />
                      </svg>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <h5>100% secure payment</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-3 border-0">
                  <div className="row">
                    <div className="col-md-2 text-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M22 5H2a1 1 0 0 0-1 1v4a3 3 0 0 0 2 2.82V22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.18A3 3 0 0 0 23 10V6a1 1 0 0 0-1-1Zm-7 2h2v3a1 1 0 0 1-2 0Zm-4 0h2v3a1 1 0 0 1-2 0ZM7 7h2v3a1 1 0 0 1-2 0Zm-3 4a1 1 0 0 1-1-1V7h2v3a1 1 0 0 1-1 1Zm10 10h-4v-2a2 2 0 0 1 4 0Zm5 0h-3v-2a4 4 0 0 0-8 0v2H5v-8.18a3.17 3.17 0 0 0 1-.6a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3.17 3.17 0 0 0 1 .6Zm2-11a1 1 0 0 1-2 0V7h2ZM4.3 3H20a1 1 0 0 0 0-2H4.3a1 1 0 0 0 0 2Z" />
                      </svg>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <h5>Quality guarantee</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-3 border-0">
                  <div className="row">
                    <div className="col-md-2 text-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 8.35a3.07 3.07 0 0 0-3.54.53a3 3 0 0 0 0 4.24L11.29 16a1 1 0 0 0 1.42 0l2.83-2.83a3 3 0 0 0 0-4.24A3.07 3.07 0 0 0 12 8.35Zm2.12 3.36L12 13.83l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.41 0a1 1 0 0 0 1.42 0a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.42ZM12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z" />
                      </svg>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <h5>guaranteed savings</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card mb-3 border-0">
                  <div className="row">
                    <div className="col-md-2 text-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24">
                        <path fill="currentColor" d="M18 7h-.35A3.45 3.45 0 0 0 18 5.5a3.49 3.49 0 0 0-6-2.44A3.49 3.49 0 0 0 6 5.5A3.45 3.45 0 0 0 6.35 7H6a3 3 0 0 0-3 3v2a1 1 0 0 0 1 1h1v6a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-6h1a1 1 0 0 0 1-1v-2a3 3 0 0 0-3-3Zm-7 13H8a1 1 0 0 1-1-1v-6h4Zm0-9H5v-1a1 1 0 0 1 1-1h5Zm0-4H9.5A1.5 1.5 0 1 1 11 5.5Zm2-1.5A1.5 1.5 0 1 1 14.5 7H13ZM17 19a1 1 0 0 1-1 1h-3v-7h4Zm2-8h-6V9h5a1 1 0 0 1 1 1Z" />
                      </svg>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <h5>Daily offers</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="py-5">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <img src={logo} alt="logo" />
                  <div className="social-links mt-5">
                    <ul className="d-flex list-unstyled gap-2">
                      <li>
                        <a href="#" className="btn btn-outline-light">
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M15.12 5.32H17V2.14A26.11 26.11 0 0 0 14.26 2c-2.72 0-4.58 1.66-4.58 4.7v2.62H6.61v3.56h3.07V22h3.68v-9.12h3.06l.46-3.56h-3.52V7.05c0-1.05.28-1.73 1.76-1.73Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-outline-light">
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.991 3.95a1 1 0 0 0-1.51-.86a7.48 7.48 0 0 1-1.874.794a5.152 5.152 0 0 0-3.374-1.242a5.232 5.232 0 0 0-5.223 5.063a11.032 11.032 0 0 1-6.814-3.924a1.012 1.012 0 0 0-.857-.365a.999.999 0 0 0-.785.5a5.276 5.276 0 0 0-.242 4.769l-.002.001a1.041 1.041 0 0 0-.496.89a3.042 3.042 0 0 0 .027.439a5.185 5.185 0 0 0 1.568 3.312a.998.998 0 0 0-.066.77a5.204 5.204 0 0 0 2.362 2.922a7.465 7.465 0 0 1-3.59.448A1 1 0 0 0 1.45 19.3a12.942 12.942 0 0 0 7.01 2.061a12.788 12.788 0 0 0 12.465-9.363a12.822 12.822 0 0 0 .535-3.646l-.001-.2a5.77 5.77 0 0 0 1.532-4.202Zm-3.306 3.212a.995.995 0 0 0-.234.702c.01.165.009.331.009.488a10.824 10.824 0 0 1-.454 3.08a10.685 10.685 0 0 1-10.546 7.93a10.938 10.938 0 0 1-2.55-.301a9.48 9.48 0 0 0 2.942-1.564a1 1 0 0 0-.602-1.786a3.208 3.208 0 0 1-2.214-.935q.224-.042.445-.105a1 1 0 0 0-.08-1.943a3.198 3.198 0 0 1-2.25-1.726a5.3 5.3 0 0 0 .545.046a1.02 1.02 0 0 0 .984-.696a1 1 0 0 0-.4-1.137a3.196 3.196 0 0 1-1.425-2.673c0-.066.002-.133.006-.198a13.014 13.014 0 0 0 8.21 3.48a1.02 1.02 0 0 0 .817-.36a1 1 0 0 0 .206-.867a3.157 3.157 0 0 1-.087-.729a3.23 3.23 0 0 1 3.226-3.226a3.184 3.184 0 0 1 2.345 1.02a.993.993 0 0 0 .921.298a9.27 9.27 0 0 0 1.212-.322a6.681 6.681 0 0 1-1.026 1.524Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-outline-light">
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M23 9.71a8.5 8.5 0 0 0-.91-4.13a2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3a2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48a9.55 9.55 0 0 0 .3 2a3.14 3.14 0 0 0 .71 1.36a2.86 2.86 0 0 0 1.49.78a45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78a2.49 2.49 0 0 0 .61-1a10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54ZM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-outline-light">
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M17.34 5.46a1.2 1.2 0 1 0 1.2 1.2a1.2 1.2 0 0 0-1.2-1.2Zm4.6 2.42a7.59 7.59 0 0 0-.46-2.43a4.94 4.94 0 0 0-1.16-1.77a4.7 4.7 0 0 0-1.77-1.15a7.3 7.3 0 0 0-2.43-.47C15.06 2 14.72 2 12 2s-3.06 0-4.12.06a7.3 7.3 0 0 0-2.43.47a4.78 4.78 0 0 0-1.77 1.15a4.7 4.7 0 0 0-1.15 1.77a7.3 7.3 0 0 0-.47 2.43C2 8.94 2 9.28 2 12s0 3.06.06 4.12a7.3 7.3 0 0 0 .47 2.43a4.7 4.7 0 0 0 1.15 1.77a4.78 4.78 0 0 0 1.77 1.15a7.3 7.3 0 0 0 2.43.47C8.94 22 9.28 22 12 22s3.06 0 4.12-.06a7.3 7.3 0 0 0 2.43-.47a4.7 4.7 0 0 0 1.77-1.15a4.85 4.85 0 0 0 1.16-1.77a7.59 7.59 0 0 0 .46-2.43c0-1.06.06-1.4.06-4.12s0-3.06-.06-4.12ZM20.14 16a5.61 5.61 0 0 1-.34 1.86a3.06 3.06 0 0 1-.75 1.15a3.19 3.19 0 0 1-1.15.75a5.61 5.61 0 0 1-1.86.34c-1 .05-1.37.06-4 .06s-3 0-4-.06a5.73 5.73 0 0 1-1.94-.3a3.27 3.27 0 0 1-1.1-.75a3 3 0 0 1-.74-1.15a5.54 5.54 0 0 1-.4-1.9c0-1-.06-1.37-.06-4s0-3 .06-4a5.54 5.54 0 0 1 .35-1.9A3 3 0 0 1 5 5a3.14 3.14 0 0 1 1.1-.8A5.73 5.73 0 0 1 8 3.86c1 0 1.37-.06 4-.06s3 0 4 .06a5.61 5.61 0 0 1 1.86.34a3.06 3.06 0 0 1 1.19.8a3.06 3.06 0 0 1 .75 1.1a5.61 5.61 0 0 1 .34 1.9c.05 1 .06 1.37.06 4s-.01 3-.06 4ZM12 6.87A5.13 5.13 0 1 0 17.14 12A5.12 5.12 0 0 0 12 6.87Zm0 8.46A3.33 3.33 0 1 1 15.33 12A3.33 3.33 0 0 1 12 15.33Z" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="btn btn-outline-light">
                          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24">
                            <path fill="currentColor" d="M1.04 17.52q.1-.16.32-.02a21.308 21.308 0 0 0 10.88 2.9a21.524 21.524 0 0 0 7.74-1.46q.1-.04.29-.12t.27-.12a.356.356 0 0 1 .47.12q.17.24-.11.44q-.36.26-.92.6a14.99 14.99 0 0 1-3.84 1.58A16.175 16.175 0 0 1 12 22a16.017 16.017 0 0 1-5.9-1.09a16.246 16.246 0 0 1-4.98-3.07a.273.273 0 0 1-.12-.2a.215.215 0 0 1 .04-.12Zm6.02-5.7a4.036 4.036 0 0 1 .68-2.36A4.197 4.197 0 0 1 9.6 7.98a10.063 10.063 0 0 1 2.66-.66q.54-.06 1.76-.16v-.34a3.562 3.562 0 0 0-.28-1.72a1.5 1.5 0 0 0-1.32-.6h-.16a2.189 2.189 0 0 0-1.14.42a1.64 1.64 0 0 0-.62 1a.508.508 0 0 1-.4.46L7.8 6.1q-.34-.08-.34-.36a.587.587 0 0 1 .02-.14a3.834 3.834 0 0 1 1.67-2.64A6.268 6.268 0 0 1 12.26 2h.5a5.054 5.054 0 0 1 3.56 1.18a3.81 3.81 0 0 1 .37.43a3.875 3.875 0 0 1 .27.41a2.098 2.098 0 0 1 .18.52q.08.34.12.47a2.856 2.856 0 0 1 .06.56q.02.43.02.51v4.84a2.868 2.868 0 0 0 .15.95a2.475 2.475 0 0 0 .29.62q.14.19.46.61a.599.599 0 0 1 .12.32a.346.346 0 0 1-.16.28q-1.66 1.44-1.8 1.56a.557.557 0 0 1-.58.04q-.28-.24-.49-.46t-.3-.32a4.466 4.466 0 0 1-.29-.39q-.2-.29-.28-.39a4.91 4.91 0 0 1-2.2 1.52a6.038 6.038 0 0 1-1.68.2a3.505 3.505 0 0 1-2.53-.95a3.553 3.553 0 0 1-.99-2.69Zm3.44-.4a1.895 1.895 0 0 0 .39 1.25a1.294 1.294 0 0 0 1.05.47a1.022 1.022 0 0 0 .17-.02a1.022 1.022 0 0 1 .15-.02a2.033 2.033 0 0 0 1.3-1.08a3.13 3.13 0 0 0 .33-.83a3.8 3.8 0 0 0 .12-.73q.01-.28.01-.92v-.5a7.287 7.287 0 0 0-1.76.16a2.144 2.144 0 0 0-1.76 2.22Zm8.4 6.44a.626.626 0 0 1 .12-.16a3.14 3.14 0 0 1 .96-.46a6.52 6.52 0 0 1 1.48-.22a1.195 1.195 0 0 1 .38.02q.9.08 1.08.3a.655.655 0 0 1 .08.36v.14a4.56 4.56 0 0 1-.38 1.65a3.84 3.84 0 0 1-1.06 1.53a.302.302 0 0 1-.18.08a.177.177 0 0 1-.08-.02q-.12-.06-.06-.22a7.632 7.632 0 0 0 .74-2.42a.513.513 0 0 0-.08-.32q-.2-.24-1.12-.24q-.34 0-.8.04q-.5.06-.92.12a.232.232 0 0 1-.16-.04a.065.065 0 0 1-.02-.08a.153.153 0 0 1 .02-.06Z" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Ultras</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item">
                      <a href="#" className="nav-link">About us</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Conditions </a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Our Journals</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Careers</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Affiliate Programme</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Ultras Press</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Customer Service</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item">
                      <a href="#" className="nav-link">FAQ</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Contact</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Privacy Policy</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Returns &amp; Refunds</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Cookie Guidelines</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Delivery Information</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-2 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Customer Service</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item">
                      <a href="#" className="nav-link">FAQ</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Contact</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Privacy Policy</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Returns &amp; Refunds</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Cookie Guidelines</a>
                    </li>
                    <li className="menu-item">
                      <a href="#" className="nav-link">Delivery Information</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-menu">
                  <h5 className="widget-title">Subscribe Us</h5>
                  <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                  <form className="d-flex mt-3 gap-0" role="newsletter">
                    <input className="form-control rounded-start rounded-0 bg-light" type="email" placeholder="Email Address" aria-label="Email Address" />
                    <button className="btn btn-dark rounded-end rounded-0" type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }


  // export {signin_move}

  // export {setCurrentUser};