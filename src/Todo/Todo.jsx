import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import './Todo.css';

export default function Todo() {
    const [input, setInput] = useState("");
    const [tasks, setTasks] = useState([]);
    const [dateTime, setDateTime] = useState("");

    const handleTaskAddInput = (e) => {
        setInput(e);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!input.trim()) {
            toast.error('Task cannot be empty');
            return;
        }

        if (tasks.includes(input.trim())) {
            toast.error('Task already exists');
            setInput("");
            return;
        }

        setTasks((prev) => [...prev, input.trim()]);
        toast.success('Task added successfully!');
        setInput("");
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((task,i) => i !== index));
        toast.success('Task deleted');
    };
    
        useEffect( () => {

            const interval =  setInterval( () => {
                const now = new Date();
                const date = now.toLocaleDateString();
                const time = now.toLocaleTimeString();
                setDateTime(`${date} - ${time}`);
            },1000 )

            return () => clearInterval(interval);
         },[] );
    
         
         const handleClearAll = () => {
            setTasks([]);
            toast.success('All tasks cleared');
        };



    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            <p>{dateTime}</p>
            <form onSubmit={handleFormSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        id="taskInput"
                        placeholder="Add a new task..."
                        value={input}
                        onChange={(e) => handleTaskAddInput(e.target.value)}
                    />
                    <button id="addTask" type="submit">+</button>
                </div>
            </form>
            <ul id="taskList">
                {tasks.length === 0 ? (
                    <p className="empty-message">No tasks added yet</p>
                ) : (
                    tasks.map((task, index) => (
                        <li key={index}>
                            <span className="task-text">{task}</span>
                            <button className="delete" onClick={() => handleDeleteTask(index)}>✖</button>
                        </li>
                    ))
                )}
            </ul>
            <button onClick={handleClearAll}>Clear All</button>
            {/* 🔥 Toaster for showing notifications */}
            <Toaster position="top-right" />
        </div>
    );
}
