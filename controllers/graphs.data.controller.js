const { runQuery } = require('../connection.sql.js');
 
 const sendPie = async (req, res) => {
    
 
 try {

        const result = await runQuery(`SELECT accepted, naccepted FROM users WHERE username="hello@gmail.com" AND password="12345"`);
    res.status(200).json(Object.values(result[0]));
     
  

  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

module.exports = {
    sendPie,
  };
 
