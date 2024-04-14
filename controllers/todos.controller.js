const { runQuery } = require('../connection.sql.js');


const getTodos = async (req, res) => {
  try {
    const results = await runQuery('SELECT * FROM user_todos where username="hello@gmail.com"');
    
    const modifiedResults = results.map(({ id, todos, status }) => ({ id, todos, status }));
    res.send(modifiedResults);
  
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
};  


const addTodos = async (req, res) => {
    try {
        const { todos, status } = req.body;
      const results = await runQuery(`INSERT INTO user_todos (username, todos, status) VALUES ('hello@gmail.com', ?, ?)`, [todos, status]);
      
    //   const modifiedResults = results.map(({ id, todos, status }) => ({ id, todos, status }));
      res.send(results);
    
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  };
  

  const deleteTodos = async (req, res) => {
    try {
        const {  todos } = req.body;
      const results = await runQuery(`delete from user_todos where todos = ?`, [todos]);
      console.log(req.body);
    //   const modifiedResults = results.map(({ id, todos, status }) => ({ id, todos, status }));
      res.send(results);
    
    } catch (err) {
      console.error(err);
      res.status(500).send(err.message);
    }
  };

  const toggleTodos = async (req, res) => {
    const { todos } = req.body;
    try {
      const results = await runQuery(`UPDATE user_todos SET status = 'true' WHERE todos = ?`, [todos]);
      
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