import React, { useState } from 'react';
import '../css/signup.css';
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const submit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        if (!fullName || !email || !mobile || !password || !confirmPassword) {
            alert("Please fill all fields");
            return;
        }
        if (password !== confirmPassword) {
            alert("Please ensure both passwords are the same");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: fullName,
                    email: email,
                    mobile: mobile,
                    password: password,
                }),
            });

            const data = await response.json();
            if (response.ok) {
                alert('Account created successfully');
                navigate('/signin'); // Redirect to sign in
            } else {
                alert(data.message || 'Error creating account'); // Handle server error messages
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error creating account');
        }
    };

    return (
        <div className='body2'>
            <main className="form-signup w-100 m-auto">
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Create an Account</h1>

                    <div className="form-floating">
                        <input type="text" name="name" value={fullName} onChange={(e) => setFullName(e.target.value)} className="form-control" id="fullNameInput" placeholder="Full Name" />
                        <label htmlFor="fullNameInput">Full Name</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="emailInput" placeholder="name@example.com" />
                        <label htmlFor="emailInput">Email Address</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} className="form-control" id="mobileInput" placeholder="Mobile Number" />
                        <label htmlFor="mobileInput">Mobile</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="passwordInput" placeholder="Password" />
                        <label htmlFor="passwordInput">Password</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirmPasswordInput" placeholder="Confirm Password" />
                        <label htmlFor="confirmPasswordInput">Confirm Password</label>
                    </div>

                    <div className="link-signin">
                        <h6>Already have an account? <Link to="/signin">Sign In</Link></h6>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 py-2" id="submit_signup">Sign Up</button>
                </form>
            </main>
        </div>
    );
}
