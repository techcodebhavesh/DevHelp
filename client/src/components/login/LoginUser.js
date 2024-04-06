import { useNavigate } from 'react-router-dom';
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
   import React, { useState } from 'react';
// import { response } from 'express';
  //  import { useNavigate } from "react-router-dom";
   
  //  const navigate = useNavigate();
   function LoginUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            console.log('response');
            setIsLoggedIn(true);  
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
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <Container component="main" maxWidth="xs">
          <Box mt={8}>
            <Typography component="h1" variant="h5" align="center">
              Sign In
            </Typography>
            <Box mt={2}>
              <form>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  type="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                {error && (
                  <Typography variant="body2" color="error" align="center">
                    {error}
                  </Typography>
                )}
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  style={{ marginTop: '1rem' }}
                  onClick={handleLogin}
                >
                  Sign In
                </Button>
                <Grid container justify="center" style={{ marginTop: '1rem' }}>
                  <Grid item>
                    <Link href="https://harshitamittal2001.medium.com/create-a-simple-login-form-for-your-react-application-c15a8ead146b">
                      Forgot password?
                    </Link>
                  </Grid>
                </Grid>
                <Grid container justify="center" style={{ marginTop: '1rem' }}> 
                  <Typography>
                    Dont have an account?
                    {' '}
                    <Link href="https://harshitamittal2001.medium.com/create-a-simple-login-form-for-your-react-application-c15a8ead146b">
                      Sign Up
                    </Link>
                  </Typography>
                </Grid>
              </form>
            </Box>
          </Box>
        </Container>
        </AuthContext.Provider>
      );
   }
   export default LoginUser;