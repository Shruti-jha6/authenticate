import { createUserWithEmailAndPassword } from 'firebase/auth';
import React,{useState} from 'react';
import {auth , db} from './firebase';
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// npm i react-router-dom 
// npm i Firebase 
// npm i react-toastify 
// npm install react-bootstrap bootstrap 

// after installing bootstrap, paste this - import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// paste this on app.js part

// all of these should be installed 
// then add this-import 'react-toastify/dist/ReactToastify.css'; to the page wherer we are using toastify to style it


function Register () {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [fname, setFname]=useState("");
    const [lname, setLname]=useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            if (user) {
              await setDoc(doc(db, "Users", user.uid), {
                email: user.email,
                firstName: fname,
                lastName: lname,
                photo:""
              });
            }
            console.log("User Registered Successfully!!");
            toast.success("User Registered Successfully!!", {
              position: "top-center",
            });
          } catch (error) {
            console.log(error.message);
            toast.error(error.message, {
              position: "bottom-center",
            });
          }
    };


    return (
        <form onSubmit={handleRegister}>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>First Name</label>
          <input type="text"
                 className='form-control'
                 placeholder='First Name'
                 
                 onChange={(e)=> setFname(e.target.value)}
                 required 
          />

          
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input type="text"
                 className='form-control'
                 placeholder='Last Name'
                 
                 onChange={(e)=> setLname(e.target.value)}
                 required 
          />

          
        </div>

        <div className="mb-3">
          <label>Email Address</label>
          <input type="email"
                 className='form-control'
                 placeholder='Enter email'
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}
                 />

          
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input type="password"
                 className='form-control'
                 placeholder='Enter Password'
                 value={password}
                 onChange={(e)=> setPassword(e.target.value)}
                 />

          
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>

        <p className="forgot-password text-right">
        Already registered <a href="/login">Login</a>
      </p>

      </form>
    );
};

export default Register;