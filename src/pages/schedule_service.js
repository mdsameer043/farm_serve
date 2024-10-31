import { Link, useNavigate } from "react-router-dom";
import React, { useEffect,useState } from "react";
import "../css/schedule_service_style.css"
export default function ScheduleService() {
  const [CurrentUserEmail, setCurrentUserEmail] = useState("");
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [serviceTime, setServiceTime] = useState('Europe/Istanbul (GMT+03:00)');
  const [serviceDuration, setServiceDuration] = useState(60);

  const [addressArea, setAddressArea] = useState("");
  const [addressCity, setAddressCity] = useState("");
  const [addressState, setAddressState] = useState("");
  const [addressPincode, setAddressPincode] = useState("");


  const getEmail = async (e) => {
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
      setCurrentUserEmail(data.data.email)
      console.log(data.data)
      // console.log(data.data.email)
    } catch (error) {
      // setName("User")
      setCurrentUserEmail("email")
      // setPhone("phone")
      // setPassword("password")
      // setAddress("address")
      // console.error("Error:", error);
    }
  };
  useEffect(() => {
    // Call submit when the component mounts
    getEmail();
  }, []);




  const submit = async (e) => {
    if(e) e.preventDefault(); 
    if(CurrentUserEmail!="email"){
      if (!phone || !serviceDate || !serviceTime || !serviceDuration || !addressArea || !addressCity || !addressState || !addressPincode) {
        alert("Please fill all fields");
        return;
      } else {
        try {
          const response = await fetch("http://localhost:5000/api/scheduleService", {
            // Use your API endpoint
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: CurrentUserEmail,
              phone: phone,
              serviceDate: serviceDate,
              serviceTime: serviceTime,
              serviceDuration: serviceDuration,
              addressArea: addressArea,
              addressCity: addressCity,
              addressState: addressState,
              addressPincode: addressPincode,
              action: "newOrder",
            }),
          });
          const data = await response.json();
          alert(data.message)
          navigate('/servicePage', { replace: true });
        } catch (error) {
          console.error("Error:", error);
          alert("Account doesn't exist");
        }
      }
    }
    else{
      alert("Please login to perform this action");
    }
  };
  return (
    <div className="formbold-main-wrapper">
        <div className="formbold-form-wrapper">
          <form onSubmit={submit}>
            <div className="formbold-mb-5">
              <label htmlFor="name" className="formbold-form-label"> Full Name </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="formbold-form-input"
              />
            </div>
            <div className="formbold-mb-5">
              <label htmlFor="phone" className="formbold-form-label"> Phone Number </label>
              <input
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="formbold-form-input"
              />
            </div>
            {/* <div className="formbold-mb-5">
              <label htmlFor="email" className="formbold-form-label"> Email Address </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="formbold-form-input"
              />
            </div> */}
            <div className="flex flex-wrap formbold--mx-3">
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5 w-full">
                  <label htmlFor="date" className="formbold-form-label"> Date </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={serviceDate}
                    onChange={(e) => setServiceDate(e.target.value)}
                    className="formbold-form-input"
                  />
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <label htmlFor="time" className="formbold-form-label"> Time </label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    value={serviceTime}
                    onChange={(e) => setServiceTime(e.target.value)}
                    className="formbold-form-input"
                  />
                </div>
              </div>
              <div className="w-full sm:w-half formbold-px-3">
                <div className="formbold-mb-5">
                  <label htmlFor="time" className="formbold-form-label"> Duration</label>
                  <input
                    type="time"
                    name="time"
                    id="time"
                    value={serviceDuration}
                    onChange={(e) => setServiceDuration(e.target.value)}
                    className="formbold-form-input"
                  />
                </div>
              </div>
            </div>
      
            <div className="formbold-mb-5 formbold-pt-3">
              <label className="formbold-form-label formbold-form-label-2">
                Address Details
              </label>
              <div className="flex flex-wrap formbold--mx-3">
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      value={addressArea}
                      onChange={(e) => setAddressArea(e.target.value)}
                      placeholder="Enter area"
                      className="formbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={addressCity}
                      onChange={(e) => setAddressCity(e.target.value)}
                      placeholder="Enter city"
                      className="formbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      value={addressState}
                      onChange={(e) => setAddressState(e.target.value)}
                      placeholder="Enter state"
                      className="formbold-form-input"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-half formbold-px-3">
                  <div className="formbold-mb-5">
                    <input
                      type="text"
                      name="post-code"
                      id="post-code"
                      value={addressPincode}
                      onChange={(e) => setAddressPincode(e.target.value)}
                      placeholder="Post Code"
                      className="formbold-form-input"
                    />
                  </div>
                </div>
              </div>
            </div>
      
            <div>
              <button className="mb-3 formbold-btn btn" style={{backgroundColor:"green"}}>Book Appointment</button>
            </div>
            <div>
              <a className="formbold-btn btn" style={{backgroundColor:"red"}} href="/servicePage">Back</a>
            </div>
          </form>
        </div>
      </div>
  )
}
