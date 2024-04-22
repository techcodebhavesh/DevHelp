const { runQuery } = require('../connection.sql.js');
  const existUser = async (req, res) => {
    const { email,password } = req.body; 
 
 try {

        const result = await runQuery(`SELECT * FROM users WHERE username="${email}" AND password="${password}"`);
        if (result.length === 0) {
          console.log('Invalid creds');
          res.json({ success: false });
            
          } else {
            console.log('login');
            res.json({ success: true });
          
          };


  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};


  const signup = async (req, res) => {
    const { email,password } = req.body; 
 
 try {

        const result = await runQuery(`insert into users(username,password) values (?,?)`,[email,password]);
        if (result.affectedRows === 0) {
          console.log('oops');
          res.json({ success: false });
        } else {
          console.log('login');
          res.json({ success: true });
        };


  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
    existUser,
    signup,
  };
 
