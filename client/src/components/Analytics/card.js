import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    avatar: {
        width: 100,
        height: 100,
        margin: '0 auto',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bio: {
        fontSize: 16,
        color: '#555',
        textAlign: 'center',
    },
});






const fetchUserDetails = async () => {
  //  const user = JSON.parse(localStorage.getItem('user'));
    // console.log({user});
    const user = {
        username: 'hello@gmail.com',
        password: '12345'}
    const response = await fetch('http://localhost:5003/api/graphs/usersend', {
        method: 'POST', // or 'GET'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user), // send the user details
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userDetails = await response.json();

    return userDetails;
}

// Call the function
fetchUserDetails().then(userDetails => {
    //console.log(userDetails);
}).catch(e => {
    console.error('An error occurred while fetching the user details:', e);
});

function UserCard() {
    const classes = useStyles();
    const [userDetails, setUserDetails] = useState({});
  
    useEffect(() => {
      fetchUserDetails().then(details => {
        setUserDetails(details);
      }).catch(e => {
        console.error('An error occurred while fetching the user details:', e);
      });
    }, []); // Empty dependency array means this effect runs once on mount
  
    return (
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.name} gutterBottom>
            {userDetails.username}
          </Typography>
          <Typography className={classes.bio}>
            {userDetails.accepted}
          </Typography>
        </CardContent>
      </Card>
    );
  }
export default UserCard;