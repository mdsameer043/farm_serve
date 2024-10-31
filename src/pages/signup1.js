import React, { useState } from 'react'
import '../css/signup.css'
import { Link } from "react-router-dom";
const mongoose = require('mongoose');
// import { useNavigate } from 'react-router-dom';
// import { click } from '@testing-library/user-event/dist/click';


export default function Signup() {
    const [fullName,setFullName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");

    const submit= (e)=>{
        // alert("please keep both passwrod same");
        e.preventDefault();
        if(!fullName|| !email || !mobile || !password || !confirmPassword){
            alert("Please fill all fields");
        }
        else{
            if(password!=confirmPassword){
                alert("Please ensure both passwords same");
            }
            else{
                console.log(fullName);
                const url="mongodb+srv://mmoulana706:AgRULEbkxzaYHM5W@smd.azp6c.mongodb.net/users?retryWrites=true&w=majority&appName=smd"
                mongoose.connect(url, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                  }).then(() => console.log('MongoDB connected successfully'))
                  .catch((err) => console.error('Error connecting to MongoDB:', err))
                  const YourModel = mongoose.model('login_datas', {
                    name:String,
                    email:{
                        type:String,
                        require:true,
                        unique:true
                    },
                    mobile:Number,
                    password:String
                });
                const mage_1 = new YourModel({
                    name: fullName,
                    email: email,
                    mobile: mobile,
                    password:password
                }).catch((err) => {
                    console.error('Error saving data:', err);
                    alert('Error creating account'); // Handle errors
                  });
            mage_1.save().then(() => {
                    console.log('Account created successfully');
                    alert('Account created successfully'); // Or redirect to another page
                  });
                mongoose.connection.close();
                alert("Account created successfully..")
            }
        }


    }
  return (
    <div className='body2'>
      <main className="form-signup w-100 m-auto">
        <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-normal">create an account</h1>

            <div className="form-floating">
                <input type="text" name="name" value={fullName} onChange={(e)=>setFullName(e.target.value)} className="form-control" id="fullNameInput" placeholder="Full Name"/>
                <label htmlFor="floatingInput">Full name</label>
            </div>

            <div className="form-floating">
                <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" id="emailInput" placeholder="name@example.com"/>
                <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
                <input type="text" name="mobile" value={mobile} onChange={(e)=>setMobile(e.target.value)} className="form-control" id="mobileInput" placeholder="MObile Number"/>
                <label htmlFor="floatingInput">Mobile</label>
            </div>
            <div className="form-floating">
                <input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}className="form-control" id="passwordInput"
                    placeholder="Password"/>
                <label htmlFor="floatingPassword">Password</label>
            </div>
            <div className="form-floating">
                <input type="text" className="form-control" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}id="confirmPasswordInput" placeholder="Password"/>
                <label htmlFor="floatingConfirmPassword">confirm Password</label>
            </div>
            <h1 id="invalid_notification"></h1>
            <div className="link-signin">
                <h6>Already have an account? <Link to="/signin"> sign in </Link></h6>
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2" id="submit_signup">Sign up</button>

        </form>

    </main>
    </div>
  )
}
