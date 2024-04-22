import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from './AuthContext';

import {
    Box,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography,
   } from '@mui/material';
   import React, { useState, useEffect } from 'react';
// import { response } from 'express';
  //  import { useNavigate } from "react-router-dom";
   
  //  const navigate = useNavigate();
   function LoginUser() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    useEffect(() => {
      console.log(isLoggedIn);
    }, [isLoggedIn]);
    useEffect(() => {
      document.body.style.backgroundColor = "#0C2D57"; // Change this to your desired color
    }, []);
    // const [formValues, setFormValues] = useState({
    //     email: '',
    //     password: '',
    //    });
      //  const getData = (e) => {
      //   const { value, name } = e.target;
      //   setFormValues({
      //     ...formValues,
      //     [name]: value,
      //   });
      const handleLogin = async () => {
        fetch("http://localhost:5003/api/user/checkl", {
          method: "POST",
          headers: {
        "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password })
        })
        .then((response) => {
          // // Clear local storage
          // localStorage.clear();
        
          return response.json();
        })
        .then((data) => {
          if (data.success) {
            setIsLoggedIn(true);  
           // localStorage.setItem('isLoggedIn', 'true'); // Add this line
             localStorage.setItem('user', JSON.stringify({ email, password })); 
            console.log(localStorage.getItem('user'));
            console.log('response');
           // console.log(isLoggedIn);
            
            // Redirect to home screen
            try{navigate('/');}
            catch(e){
              console.log(e);
            }
            
          } else {
            throw new Error('Invalid creds');
          }
          
        })
          
        // .then((data) => {
        //   // Replace the code in the editor with the response data
        //   if (data === 0) {
        // throw new Error('Invalid creds');
        //   }
        //   if (data === 1) {
        //     throw new Error('login');
        //     // console.log('login');
        //     // navigate('http://localhost:3000/');// Redirect to homepage
        //   }
        // })
        
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
        });

      };
      // const handleLogin = async () => {
   
      // };
      return (
        <div style={{ backgroundColor: "#0C2D57", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <div style={{ backgroundColor: '#f0f0f0', padding: '2rem', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', maxWidth: '400px', width: '100%', }}>
            <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: '#333' }}>Sign In</h1>
            <form style={{ display: 'flex', flexDirection: 'column' }}>
              <input
                type="email"
                placeholder="Email Address"
                style={{ marginBottom: '1rem', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                style={{ marginBottom: '1rem', padding: '0.5rem', borderRadius: '4px', border: '1px solid #ccc' }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                <input type="checkbox" id="remember" style={{ marginRight: '0.5rem' }} />
                <label htmlFor="remember" style={{ color: '#333' }}>Remember me</label>
              </div>
              {error && (
                <p style={{ marginBottom: '0.5rem', color: 'red' }}>{error}</p>
              )}
              <button
                type="button"
                style={{ marginBottom: '1rem', padding: '0.5rem', borderRadius: '4px', backgroundColor: '#0C2D57', color: '#fff', border: 'none', cursor: 'pointer' }}
                onClick={handleLogin}
              >
                Sign In
              </button>
              <div style={{ textAlign: 'center' }}>
                <a href="https://harshitamittal2001.medium.com/create-a-simple-login-form-for-your-react-application-c15a8ead146b" style={{ color: '#333', textDecoration: 'none' }}>Forgot password?</a>
              </div>
              <div style={{ textAlign: 'center' }}>
                <p style={{ color: '#333' }}>Don't have an account? <a href="https://harshitamittal2001.medium.com/create-a-simple-login-form-for-your-react-application-c15a8ead146b" style={{ color: '#333', textDecoration: 'none' }}>Sign Up</a></p>
              </div>
            </form>
          </div>
        </div>
      );
      
    
      
   }
   export default LoginUser;