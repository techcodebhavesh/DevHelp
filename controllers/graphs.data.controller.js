const { runQuery } = require('../connection.sql.js');
 
const sendPie = async (req, res) => {
  try {
    const { email, password } = req.body; 
    const result = await runQuery(`SELECT accepted, naccepted FROM users WHERE username=? AND password=?`, [email, password]);
    res.status(200).json(Object.values(result[0]));
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const sendUser = async (req, res) => {
  try {
    const { email, password } = req.body; 
   // console.log(req.body);
    const result = await runQuery(`SELECT username,accepted, naccepted FROM users WHERE username=? AND password=?`, [email, password]);
    res.status(200).json(result);
    //console.log(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const existUser = async (req, res) => {
  const { email, password } = req.body; 
  try {
    const result = await runQuery(`SELECT * FROM users WHERE username=? AND password=?`, [email, password]);
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



const sendData = async (req, res) => {
  try {
    const { email,timestamp, status, memory, time} = req.body; 

    console.log(req.body);
   // console.log(req.body);
    const result = await runQuery(`INSERT INTO    graphs (username, timestamp, status,memory,time) VALUES (?, ?, ?, ?, ?)`, [email, timestamp, status, memory, time]);
    res.status(200).json(result);
    //console.log(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};


module.exports = {
    sendPie,
    sendUser,
    sendData
  };
 
