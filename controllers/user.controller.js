const { runQuery } = require('../connection.sql.js');
 
 const existUser = async (req, res) => {
    const { email,password } = req.body; 
 
 try {

        const result = await runQuery(`SELECT * FROM users WHERE username="${email}" AND password="${password}"`);
        if (result.length === 0) {
            return 0;
            console.log('Invalid creds');
          } else {
            return 1;
            console.log('login');
          };


  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
    existUser,
  };
 
