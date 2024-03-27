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
  //  import { useNavigate } from "react-router-dom";
   
  //  const navigate = useNavigate();
   function LoginUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
          if (!response.ok) {
        throw new Error('Network response was not ok');
          }
          if (response === 0) {
        throw new Error('Invalid creds');
          }
          if (response === 1) {
            console.log('login');
            // navigate('http://localhost:3000/'); // Redirect to homepage
          }
          return response.json();
        })
        .then((data) => {
          // Replace the code in the editor with the response data
          if (data === 0) {
        throw new Error('Invalid creds');
          }
          if (data === 1) {
            console.log('login');
            // navigate('http://localhost:3000/');// Redirect to homepage
          }
        })
        
        .catch((error) => {
          console.error('There has been a problem with your fetch operation:', error);
        });

      };
      // const handleLogin = async () => {
   
      // };
      
    return (
      <Container component="main" maxWidth="xs">
        <Box>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <Box component="form">
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              type="email"
              label="Email Address"
              name="email"
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
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLogin}
            >
              Sign In
            </Button>
            <Grid>
              <Link href="https://harshitamittal2001.medium.com/create-a-simple-login-form-for-your-react-application-c15a8ead146b">
                Forgot password?
              </Link>
            </Grid>
            <Grid className="footer">
              <Typography component="h5">
                Dont have an account?
                {" "}
                <Link href="https://harshitamittal2001.medium.com/create-a-simple-login-form-for-your-react-application-c15a8ead146b">
                  Sign Up
                </Link>
              </Typography>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
   }
   export default LoginUser;