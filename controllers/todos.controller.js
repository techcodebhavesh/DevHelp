const { runQuery } = require('../connection.sql.js');


const getTodos = async (req, res) => {
  try {
  
    const {email} = req.body;
    const results = await runQuery('SELECT * FROM user_todos where username= ?', [email]);
    
    const modifiedResults = results.map(({ id, todos, status }) => ({ id, todos, status }));
    res.send(modifiedResults);
  
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};  


const addTodos = async (req, res) => {
    try {
        const { email, todos, status } = req.body;
      const results = await runQuery(`INSERT INTO user_todos (username, todos, status) VALUES (?, ?, ?)`, [email, todos, status]);
      
    //   const modifiedResults = results.map(({ id, todos, status }) => ({ id, todos, status }));
      res.send(results);
    
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  };
  

  const deleteTodos = async (req, res) => {
    try {
        const {  email, todos } = req.body;
      const results = await runQuery(`delete from user_todos where todos = ? and username= ?`, [todos, email]);
      console.log(req.body);
    //   const modifiedResults = results.map(({ id, todos, status }) => ({ id, todos, status }));
      res.send(results);
    
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  };

  const toggleTodos = async (req, res) => {
    const { email, todos } = req.body;
    try {
      const results = await runQuery(`UPDATE user_todos SET status = 'true' WHERE todos = ? and username= ?`, [todos, email]);
      
    //   const modifiedResults = results.map(({ id, todos, status }) => ({ id, todos, status }));
      res.send(results);
    
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  };  
  
  
  
  


module.exports = { getTodos ,
    addTodos,
    deleteTodos,
    toggleTodos};