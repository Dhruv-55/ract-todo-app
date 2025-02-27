import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import {TodoForm} from "./TodoForm";
import {List} from "./List";
import './Todo.css';

export default function Todo() {
    const [tasks, setTasks] = useState([]);
    const [dateTime, setDateTime] = useState("");

    const handleFormSubmit = (input) => {
        const {id, content, checked} = input;
        // if (!input.trim()) {
        //     toast.error('Task cannot be empty');
        //     return;
        // }

     const ifTodoExists = tasks.find((task) => task.content === content);
     if (ifTodoExists) {
         toast.error('Task already exists');
         return;
     }

        setTasks((prev) => [...prev, {id, content, checked}]);
        toast.success('Task added successfully!');
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

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
        toast.success('Task deleted');
    };
    const handleClearAll = () => {
        setTasks({
            id : "",
            content : "",
            checked : false
        });
        toast.success('All tasks cleared');
    };

    const handleTaskToggle = (index) => {
        setTasks(tasks.map((task, i) => i === index ? { ...task, checked: !task.checked } : task));
    };

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            <p>{dateTime}</p>
            <TodoForm  onAddTask={handleFormSubmit}  />
            <List tasks={tasks} onDeleteTask={handleDeleteTask}  onClearAll={handleClearAll} onTaskToggle={handleTaskToggle} />
           
            <Toaster position="top-right" />
        </div>
    );
}
