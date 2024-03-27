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
  //  const { runQuery } = require('./connection.sql');
   
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
        // const result = await runQuery(`SELECT * FROM users WHERE username="${email}" AND password="${password}"`);
        // if (result.length === 0) {
        //   // handle login failure
        // } else {
        //   // handle login success
        // }
        console.log(email, password);
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
                Dont have an account?{" "}
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