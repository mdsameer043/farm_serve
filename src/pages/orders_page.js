import React, { useEffect,useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import '../css/orders_page.css'

import logo from '../images/logo.png';

export default function OrdersPage() {
const navigate = useNavigate();

  const [currentname, setCurrentName] = useState("");
  const [currentemail, setCurrentEmail] = useState("email");

  const [shouldLoadData, setShouldLoadData] = useState(false);
  const [ordersData, setOrdersData] = useState([]);

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
      setCurrentName(data.data.name)
      setCurrentEmail(data.data.email)
      console.log(data.data)
      setShouldLoadData(true);
    } catch (error) {
      setCurrentName("User")
      setCurrentEmail("email")
      // console.error("Error:", error);
    }
  };
  useEffect(() => {
    submit()// Call submit when the component mounts
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
      setCurrentName(data.data.name)
      setCurrentEmail(data.data.email)
      console.log(data.data)
      alert("Signed out successfully");
      navigate('/contactPage', { replace: true });
    } catch (error) {
      console.error("Error:", error);
    }
  };





  const order_submit = async (e) => {
    if (e) e.preventDefault();// Prevent default form submission
    try {
      console.log(currentemail);
      const response = await fetch("http://localhost:5000/api/getOrders", {
        // Use your API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: currentemail,
          action:"getorders",
        }),
      });

      const data = await response.json();
      console.log(data.data)
      setOrdersData(data.data)
    //   for(let i=0;i<((data.data).length);i++){
    //     // orderdata[i].name=data.data[i].name
    //   }
    //   console.log(data.data[0])
    //   setName(data.data[0].name)
    //   setEmail(data.data[0].email)
    //   setPhone(data.data[0].Phone)
    //   setServiceDate(data.data[0].serviceDate)
    //   setServiceTime(data.data[0].serviceTime)
    //   setServiceDuration(data.data[0].serviceDuration)
    //   setAddressArea(data.data[0].addressArea)
    //   setAddressCity(data.data[0].addressCity)
    //   setAddressState(data.data[0].addressState)
    //   setAddressPincode(data.data[0].addressPincode)
    } catch (error) {
      setCurrentName("User")
      setCurrentEmail("email")
      // console.error("Error:", error);
    }
  };
//   if(currentemail !=="email"){
//     order_submit();
//   }
  useEffect(() => {
    if (shouldLoadData) {
        order_submit();
      setShouldLoadData(false); // Reset the trigger
    }
  }, [shouldLoadData]);


return (
<>
    {/* <h1>kakjfhkjgf</h1> */}
    <svg xmlns="http://www.w3.org/2000/svg" style={{display: 'none' }}>
        <defs>
            <symbol xmlns="http://www.w3.org/2000/svg" id="link" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M12 19a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0-4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm-5 0a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm7-12h-1V2a1 1 0 0 0-2 0v1H8V2a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3Zm1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-9h16Zm0-11H4V6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5h8v1a1 1 0 0 0 2 0V5h1a1 1 0 0 1 1 1ZM7 15a1 1 0 1 0-1-1a1 1 0 0 0 1 1Zm0 4a1 1 0 1 0-1-1a1 1 0 0 0 1 1Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="arrow-right" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M17.92 11.62a1 1 0 0 0-.21-.33l-5-5a1 1 0 0 0-1.42 1.42l3.3 3.29H7a1 1 0 0 0 0 2h7.59l-3.3 3.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l5-5a1 1 0 0 0 .21-.33a1 1 0 0 0 0-.76Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="category" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M19 5.5h-6.28l-.32-1a3 3 0 0 0-2.84-2H5a3 3 0 0 0-3 3v13a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3Zm1 13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-13a1 1 0 0 1 1-1h4.56a1 1 0 0 1 .95.68l.54 1.64a1 1 0 0 0 .95.68h7a1 1 0 0 1 1 1Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="calendar" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M19 4h-2V3a1 1 0 0 0-2 0v1H9V3a1 1 0 0 0-2 0v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Zm1 15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-7h16Zm0-9H4V7a1 1 0 0 1 1-1h2v1a1 1 0 0 0 2 0V6h6v1a1 1 0 0 0 2 0V6h2a1 1 0 0 1 1 1Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="heart" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M20.16 4.61A6.27 6.27 0 0 0 12 4a6.27 6.27 0 0 0-8.16 9.48l7.45 7.45a1 1 0 0 0 1.42 0l7.45-7.45a6.27 6.27 0 0 0 0-8.87Zm-1.41 7.46L12 18.81l-6.75-6.74a4.28 4.28 0 0 1 3-7.3a4.25 4.25 0 0 1 3 1.25a1 1 0 0 0 1.42 0a4.27 4.27 0 0 1 6 6.05Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="plus" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="minus" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 11H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="cart" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M8.5 19a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 8.5 19ZM19 16H7a1 1 0 0 1 0-2h8.491a3.013 3.013 0 0 0 2.885-2.176l1.585-5.55A1 1 0 0 0 19 5H6.74a3.007 3.007 0 0 0-2.82-2H3a1 1 0 0 0 0 2h.921a1.005 1.005 0 0 1 .962.725l.155.545v.005l1.641 5.742A3 3 0 0 0 7 18h12a1 1 0 0 0 0-2Zm-1.326-9l-1.22 4.274a1.005 1.005 0 0 1-.963.726H8.754l-.255-.892L7.326 7ZM16.5 19a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="check" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="trash" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M10 18a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1ZM20 6h-4V5a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H4a1 1 0 0 0 0 2h1v11a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8h1a1 1 0 0 0 0-2ZM10 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm7 14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V8h10Zm-3-1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="star-outline" viewBox="0 0 15 15">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                    d="M7.5 9.804L5.337 11l.413-2.533L4 6.674l2.418-.37L7.5 4l1.082 2.304l2.418.37l-1.75 1.793L9.663 11L7.5 9.804Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="star-solid" viewBox="0 0 15 15">
                <path fill="currentColor"
                    d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="search" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="user" viewBox="0 0 24 24">
                <path fill="currentColor"
                    d="M15.71 12.71a6 6 0 1 0-7.42 0a10 10 0 0 0-6.22 8.18a1 1 0 0 0 2 .22a8 8 0 0 1 15.9 0a1 1 0 0 0 1 .89h.11a1 1 0 0 0 .88-1.1a10 10 0 0 0-6.25-8.19ZM12 12a4 4 0 1 1 4-4a4 4 0 0 1-4 4Z" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="close" viewBox="0 0 15 15">
                <path fill="currentColor"
                    d="M7.953 3.788a.5.5 0 0 0-.906 0L6.08 5.85l-2.154.33a.5.5 0 0 0-.283.843l1.574 1.613l-.373 2.284a.5.5 0 0 0 .736.518l1.92-1.063l1.921 1.063a.5.5 0 0 0 .736-.519l-.373-2.283l1.574-1.613a.5.5 0 0 0-.283-.844L8.921 5.85l-.968-2.062Z" />
            </symbol>
        </defs>
    </svg>
    {/* <div class="preloader-wrapper"></div>
    <div class="preloader">
    </div>
    </div> */}
    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasCart"
        aria-labelledby="My Cart">
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
    <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabIndex={-1} id="offcanvasSearch"
        aria-labelledby="Search">
        <div className="offcanvas-header justify-content-center">
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
            <div className="order-md-last">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-primary">Search</span>
                </h4>
                <form role="search" action="index.html" method="get" className="d-flex mt-3 gap-0">
                    <input className="form-control rounded-start rounded-0 bg-light" type="email"
                        placeholder="What are you looking for?" aria-label="What are you looking for?" />
                    <button className="btn btn-dark rounded-end rounded-0" type="submit">Search</button>
                </form>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row py-3 border-bottom">
            <div className="col-sm-4 col-lg-3 text-center text-sm-start">
                <div className="main-logo">
                    <a href="#">
                        <img src={logo} alt="logo" className="img-fluid" />
                    </a>
                </div>
            </div>
            <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block opacity-0">
                <div className="search-bar row bg-light p-2 my-2 rounded-4">
                    <div className="col-md-4 d-none d-md-block">
                        {/* <select className="form-select border-0 bg-transparent">
                            <option>Fertiliser</option>
                            <option>pesticides</option>
                            <option>services</option>
                        </select> */}
                    </div>
                    <div className="col-11 col-md-7">
                        {/* <form id="search-form" className="text-center" action="index.html" method="post">
                            <input type="text" className="form-control border-0 bg-transparent"
                                placeholder="Search for Good Quailty products" />
                        </form> */}
                    </div>
                    <div className="col-1">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z" />
                        </svg> */}
                    </div>
                </div>
            </div>
            <div
                className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">
                {/* <div class="support-box text-end d-none d-xl-block">
                    <span class="fs-6 text-muted">For Support?</span>
                    <h5 class="mb-0">+980-34984089</h5>
                </div> */}
                <ul className="d-flex justify-content-end list-unstyled m-0">
                    <li>
                        <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            <svg width={24} height={24} viewBox="0 0 24 24">
                                <use xlinkHref="#user" />
                            </svg>
                        </a>
                        <ul className="dropdown-menu text-small">
                            <li>
                                <h6 className="dropdown-item">{currentname}</h6>
                            </li>
                            <li>
                                <Link to="/profilePage" className="dropdown-item">Profile</Link>
                            </li>
                            {/* <li>
                                <h3 className="dropdown-item">{user}</h3>
                            </li> */}
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li>
                                <hr className="dropdown-divider" />
                            </li>
                            <li>{(currentname==="User")?
                                <Link to="/signin" className="dropdown-item ">Sign in</Link>:<h6
                                    className="dropdown-item" onClick={signout} style={{ cursor: 'pointer' }}>Sign out
                                </h6>}
                            </li>
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
                        <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
                            <svg width={24} height={24} viewBox="0 0 24 24">
                                <use xlinkHref="#cart" />
                            </svg>
                        </a>
                    </li>
                    <li className="d-lg-none">
                        <a href="#" className="rounded-circle bg-light p-2 mx-1" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasSearch" aria-controls="offcanvasSearch">
                            <svg width={24} height={24} viewBox="0 0 24 24">
                                <use xlinkHref="#search" />
                            </svg>
                        </a>
                    </li>
                </ul>
                <div className="cart text-end d-none d-lg-block dropdown">
                    <button className="border-0 bg-transparent d-flex flex-column gap-2 lh-1" type="button"
                        data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart" aria-controls="offcanvasCart">
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
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header justify-content-center">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                aria-label="Close" />
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end menu-list list-unstyled d-flex gap-md-3 mb-0">
                                <li className="nav-item active">
                                    <a href="/" className="nav-link">Home</a>
                                </li>
                                <li className="nav-item">
                                    {/*
                                    <Link to="servicePage" className="nav-link">Services</Link> */}
                                    <a href="/servicePage" className="nav-link">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/contactPage" className="nav-link">Contact Us</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link">orders</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    <div className="card card-1 full-page">
        <div className="card-body">
            <div className="row justify-content-between mb-3">
                <div className="col-auto">
                    <h6 className="color-1 mb-0 change-color">Orders</h6>
                </div>
            </div>
            {ordersData.map((order) => (
                <div className="row" key={order._id}>
                <div className="col">
                    <div className="card card-2">
                        <div className="card-body">
                            <div className="media">
                                {/* <div className="sq align-self-center "> 
                                    <img
                                        className="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                                        src="https://i.imgur.com/RJOW4BL.jpg" width={135} height={135} /> 
                                </div> */}
                                <div className="media-body my-auto text-right">
                                    <div className="row  my-auto flex-column flex-md-row">
                                        <div className="col my-auto">
                                            <h6 className="mb-0"> {order.email}</h6>
                                        </div>
                                        <div className="col-auto my-auto"> <small>Date:-{order.serviceDate}</small></div>
                                        <div className="col my-auto"> <small>Time:-{order.serviceTime}</small></div>
                                        <div className="col my-auto"> <small>Duration:-{order.serviceDuration}</small></div>
                                        <div className="col my-auto">
                                            <h6 className="mb-0">{order.phone}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-3 " />
                            <div className="row">
                                <div className="col-md-2 mb-3"> <small className="btn btn-success"> Track Order <span><i
                                                className=" ml-2 fa fa-refresh" aria-hidden="true" /></span></small>
                                </div>
                                <div className="col-md-2 mb-3"> <small className="btn btn-danger"> Cancel Order  <span><i
                                                className=" ml-2 fa fa-refresh" aria-hidden="true" /></span></small>
                                </div>
                                <div className="col mt-auto">
                                    <div className="progress my-auto">
                                        <div className="progress-bar progress-bar  rounded" style={{width: '50%' }}
                                            role="progressbar" aria-valuenow={25} aria-valuemin={0}
                                            aria-valuemax={100} />
                                    </div>
                                    <div className="media row justify-content-between ">
                                        <div className="flex-col"> <span> <small className="text-right mr-sm-2">Out for
                                                    delivary</small><i className="fa fa-circle active" /></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             ))} 




                {/* <div className="row">
                <div className="col">
                    <div className="card card-2">
                        <div className="card-body">
                            <div className="media">
                                <div className="sq align-self-center "> <img
                                        className="img-fluid  my-auto align-self-center mr-2 mr-md-4 pl-0 p-0 m-0"
                                        src="https://i.imgur.com/RJOW4BL.jpg" width={135} height={135} /> </div>
                                <div className="media-body my-auto text-right">
                                    <div className="row  my-auto flex-column flex-md-row">
                                        <div className="col my-auto">
                                            <h6 className="mb-0"> email</h6>
                                        </div>
                                        <div className="col-auto my-auto"> <small>Date:-date</small></div>
                                        <div className="col my-auto"> <small>Time:-time</small></div>
                                        <div className="col my-auto"> <small>Duration:-duration</small></div>
                                        <div className="col my-auto">
                                            <h6 className="mb-0">phone</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr className="my-3 " />
                            <div className="row">
                                <div className="col-md-2 mb-3"> <small className="btn btn-success"> Track Order <span><i
                                                className=" ml-2 fa fa-refresh" aria-hidden="true" /></span></small>
                                </div>
                                <div className="col-md-2 mb-3"> <small className="btn btn-danger"> Cancel Order  <span><i
                                                className=" ml-2 fa fa-refresh" aria-hidden="true" /></span></small>
                                </div>
                                <div className="col mt-auto">
                                    <div className="progress my-auto">
                                        <div className="progress-bar progress-bar  rounded" style={{width: '50%' }}
                                            role="progressbar" aria-valuenow={25} aria-valuemin={0}
                                            aria-valuemax={100} />
                                    </div>
                                    <div className="media row justify-content-between ">
                                         //<div className="col-auto text-right"><span> <small
                                                    //className="text-right mr-sm-2" /> <i
                                                   // className="fa fa-circle active" /> hello</span></div> 
                                        <div className="flex-col"> <span> <small className="text-right mr-sm-2">Out for
                                                    delivary</small><i className="fa fa-circle active" /></span></div>
                                         //<div className="col-auto flex-col-auto"><small
                                               // className="text-right mr-sm-2">Delivered</small><span> <i
                                                  //  className="fa fa-circle" /></span></div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}










        </div>
    </div>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</>

)
}