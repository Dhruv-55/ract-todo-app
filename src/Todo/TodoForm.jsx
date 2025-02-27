import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

export const TodoForm = ({onAddTask}) => {
    const [input, setInput] = useState("");

    const handleTaskAddInput = (e) => {
        setInput(e);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onAddTask(input);
        setInput("");
    };
    return (
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
    )
}