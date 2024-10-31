import React, { useEffect,useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import "../css/profilePage.css";

function ProfilePage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [password, setPassword] = useState("");
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
      // setPassword(data.data.password)
      setAddress(data.data.address)
      console.log(data.data)
    } catch (error) {
      setName("User")
      setEmail("email")
      setPhone("phone")
      // setPassword("password")
      setAddress("address")
      // console.error("Error:", error);
    }
  };
  useEffect(() => {
    // Call submit when the component mounts
    submit();
  }, []);


  return (
    <div className="container">
      <div className="col-sm-12">
        <a className="btn btn-danger" href="/">
          Back
        </a>
      </div>
      <div className="main-body">
        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar7.png"
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4></h4>
                    <p className="mb-1" style={{color:"black"}}>{name}</p>
                    <p className="text-muted font-size-sm">
                      {address}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Full Name</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <h6 className="mb-0" id="db_fullName" style={{color:"black"}}><b>{name}</b></h6>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">email</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <h6 className="mb-0" id="db_email"  style={{color:"black"}}><b>{email}</b></h6>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Mobile</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <h6 className="mb-0" id="db_mobile"  style={{color:"black"}}><b>{phone}</b></h6>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Address</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">
                    <h6 className="mb-0" id="db_address" style={{color:"black"}}><b>{address}</b></h6>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-12">
                    {/* {(name==="User")?<a className="btn btn-info" href="/signin">
                      login
                    </a>:<a className="btn btn-info" href="/editProfilePage">
                      Edit
                    </a>} */}
                    <a className="btn btn-info" href="/editProfilePage">
                      Edit
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
