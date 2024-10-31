import React, { useEffect,useState } from 'react';
import { Link,useNavigate } from "react-router-dom";
import "../css/edit_profile_page.css";

function EditProfilePage() {
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




  // ********************updating profile***********************
  const updateProfile = async (e) => {
    if (e) e.preventDefault();// Prevent default form submission
    if (email!="email"){
      try {
        const response = await fetch("http://localhost:5000/api/update_profile", {
          // Use your API endpoint
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            new_name:name,
            new_address:address,
            action:"change_details",
          }),
        });
        const data = await response.json();
        alert(data.message);
        navigate('/profilePage', { replace: true });
      } catch (error) {
        alert("Please login to perform this operation");
        // console.error("Error:", error);
      }
    }
    else{
      alert("Please Login to perform this action");
    }
  }

  return (
    <div className="code_body">
      <div className="container">
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
                      <p className="mb-1" style={{color:"black"}}>
                        <b>{name}</b>
                      </p>
                      <p className="text-muted font-size-sm">
                      <b>{address}</b>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        id="form_full_name"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <h3 type="text" className="form-control"><b>{email}</b></h3>
                    </div>
                  </div>

                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Mobile</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <h3 type="text" className="form-control"><b>{phone}</b></h3>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Address</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        id="form_address"
                      />
                    </div>
                  </div>
                  <div className="row cancel_button mb-5">
                    <div className="col-sm-9 text-secondary">
                      <a className="btn btn-danger px-5 my-2 mx-2" href="/profilePage">
                        Back
                      </a>
                      <a className="btn btn-success px-5 mx-2" onClick={updateProfile}>
                        save
                      </a>
                    </div>
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

export default EditProfilePage;
