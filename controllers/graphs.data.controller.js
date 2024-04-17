const { runQuery } = require('../connection.sql.js');
const { use } = require('../routers/todos.router.js');
 
const sendPie = async (req, res) => {
  try {
    const { email } = req.body; 
    const result = await runQuery(`select sum(case when status = 'accepted' then 1 else 0 end) as acceptedcount, count(*) as totalcount from graphs where username = ?`, [email]);
    const { acceptedcount, totalcount } = result[0];
    const rejectedCount = totalcount - acceptedcount;
    console.log({ result });
    const countsArray = Object.values({ acceptedcount, rejectedCount });
    res.status(200).json(countsArray);
    console.log({ acceptedcount, rejectedCount });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const sendUser = async (req, res) => {
  try {
    const {email} = req.body; 
   // console.log(req.body);
    const result = await runQuery(`SELECT username FROM users WHERE username=?`, [email]);
    const result1 = await runQuery(`select sum(case when status = 'accepted' then 1 else 0 end) as acceptedcount, count(*) as totalcount from graphs where username = ?`, [email]);
    const { acceptedcount, totalcount } = result1[0];
    const rejectedCount = totalcount - acceptedcount;
    

    const userObject = {
      username: result[0].username,
      acceptedcount: acceptedcount,
      rejectedCount: rejectedCount
    };
   
    
    res.status(200).json(userObject);
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


const sendLinetime = async (req, res) => {
  try {
    const { email} = req.body; 
    const result = await runQuery(`SELECT time FROM  graphs WHERE username = ? `, [email]);
    const timesArray = result.map(row => row.time);

    res.status(200).json(timesArray);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

const sendLinememory = async (req, res) => {
  try {
    const {email} = req.body; 
    const result = await runQuery(`SELECT memory FROM  graphs WHERE username = ? `, [email]);
    const memoryArray = result.map(row => row.memory);

    res.status(200).json(memoryArray);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};

 
const sendPolar = async (req, res) => {
  try {
    const {email} = req.body; 
    const result = await runQuery(`SELECT status FROM                graphs WHERE username = ?`, [email]);
    const statusCounts = {};
    result.forEach(row => {
      const status = row.status.toLowerCase(); // Convert status to lowercase for consistency
      if (!statusCounts[status]) {
        statusCounts[status] = 0;
      }
      statusCounts[status]++;
    });
    // Extract parameter names and counts into separate arrays
    const parameterNames = Object.keys(statusCounts);
    const counts = Object.values(statusCounts);

    res.status(200).json({ parameterNames, counts });
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
};



module.exports = {
    sendPie,
    sendUser,
    sendData,
    sendLinetime,
    sendLinememory,
    sendPolar,
  };
 
