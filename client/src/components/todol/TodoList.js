import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'; // Update the path to your CSS file
import todoImage from './todo.png'; // Update the path to your image file
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TodoList = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    
    try {
      const response = await fetch('http://localhost:5003/api/todos/gettodos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user) // Add your request body here
      });
      var todos = await response.json();
      todos = todos.map((todo) => ({ ...todo, status: todo.status === "true" ? true : false }));
      setTasks(todos);
      console.log({ todos });
    } catch (error) {
      console.log('Error fetching todos:', error);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = async () => {
    if (inputValue.trim() === '') {
      return;
    }

    try {
      const response = await fetch('http://localhost:5003/api/todos/addtodos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: user.email,todos: inputValue, status: "false", important: false }) // Adjust property names according to your data
      });
      fetchTodos();
      setInputValue('');
      toast.success('Task added successfully');
    } catch (error) {
      console.log('Error adding task:', error);
      toast.error('Error adding task');
    }
  };

  const handleTaskCheckboxChange = async (todos) => {
    try {
      const response = await fetch(`http://localhost:5003/api/todos/toggletodos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: user.email, todos: todos }) // Adjust property names according to your data
      });
      if (response.ok) {
        fetchTodos();
        toast.success('Task status updated successfully');
      } else {
        toast.error('Failed to update task status');
      }
    } catch (error) {
      console.log('Error updating task status:', error);
      toast.error('Error updating task status');
    }
  };

  const handleDeleteTask = async (inputValue) => {
    console.log({ inputValue });
    try {
      const response = await fetch(`http://localhost:5003/api/todos/deletetodos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',

        },
        body: JSON.stringify({ email:user.email, todos: inputValue, status: false }) // Adjust property names according to your data
      }
      );
      fetchTodos();
      toast.success('Task deleted successfully');
    } catch (error) {
      console.log('Error deleting task:', error);
      toast.error('Error deleting task');
    }
  };

  const handleCompleteAll = async () => {
    const uncompletedTasks = tasks.filter(task => !task.status);
    if (uncompletedTasks.length === 0) {
      toast.info('All tasks are already completed');
      return;
    }

    try {
      await Promise.all(uncompletedTasks.map(task => handleTaskCheckboxChange(task.todos)));
      toast.success('All tasks marked as completed');
    } catch (error) {
      console.log('Error completing all tasks:', error);
      toast.error('Error completing all tasks');
    }
  };

  const handleClearCompleted = async () => {
    const completedTasks = tasks.filter(task => task.status); // Adjust property names according to your data
    if (completedTasks.length === 0) {
      toast.info('No completed tasks to delete');
      return;
    }

    try {
      await Promise.all(completedTasks.map(task => handleDeleteTask(task.todos)));
      toast.success('Completed tasks deleted successfully');
    } catch (error) {
      console.log('Error deleting completed tasks:', error);
      toast.error('Error deleting completed tasks');
    }
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'completed') {
      return task.status;
    } else if (filter === 'uncompleted') {
      return !task.status;
    }
    return true;
  });

  const handleDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const reorderedTasks = Array.from(filteredTasks);
    const [removed] = reorderedTasks.splice(result.source.index, 1);
    reorderedTasks.splice(result.destination.index, 0, removed);

    setTasks(reorderedTasks);
  };

  return (
    <div className="container">
      <ToastContainer />
      <div className="todo-app">
        <h2>
          <img src={todoImage} alt="todo-image" /> Assignment List
        </h2>
        <div className="row">
          <i className="fas fa-list-check"></i>
          <input
            type="text"
            className="add-task"
            id="add"
            placeholder="Add your assignment"
            autoFocus
            value={inputValue}
            onChange={handleInputChange}
          />
          <button id="btn" onClick={handleAddTask}>
            Add
          </button>
        </div>

        <div className="mid">
          <i className="fas fa-check-double"></i>
          <p id="complete-all" onClick={handleCompleteAll}>
            Complete all tasks
          </p>
          <p id="clear-all" onClick={handleClearCompleted}>
            Delete completed tasks
          </p>
        </div>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <ul id="list" {...provided.droppableProps} ref={provided.innerRef}>
                {filteredTasks.map((task, index) => (
                  <Draggable key={task.todos} draggableId={task.todos} index={index}>
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <input
                          type="checkbox"
                          id={`task-${task.id}`}
                          data-id={task.id}
                          className="custom-checkbox"
                          checked={task.status}
                          onChange={() => handleTaskCheckboxChange(task.todos)}
                        />
                        <label
                          htmlFor={`task-${task.id}`}
                          style={{ fontWeight: task.important ? 'bold' : 'normal' }}
                        >
                          {task.todos}
                        </label>
                        <div>
                          <img
                            src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png"
                            className="delete"
                            onClick={() => handleDeleteTask(task.todos)}
                          />
                        </div>
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>

        <div className="filters">
          <div className="dropdown">
            <button className="dropbtn">Filter</button>
            <div className="dropdown-content">
              <a href="#" id="all" onClick={() => handleFilterChange('all')}>
                All
              </a>
              <a href="#" id="rem" onClick={() => handleFilterChange('uncompleted')}>
                Uncompleted
              </a>
              <a href="#" id="com" onClick={() => handleFilterChange('completed')}>
                Completed
              </a>
            </div>
          </div>

          <div className="completed-task">
            <p>
              Completed: <span id="c-count">{tasks.filter(task => task.status).length}</span>
            </p>
          </div>
          <div className="remaining-task">
            <p>
              <span id="total-tasks">
                Total Tasks: <span id="tasks-counter">{tasks.length}</span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
