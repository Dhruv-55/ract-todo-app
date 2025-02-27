import { useState } from "react";

export const TodoForm = ({ onAddTask }) => {
    const [input, setInput] = useState({
        id: "",
        content: "",
        checked: false
    });

    const handleTaskAddInput = (e) => {
        setInput({
            id: Date.now().toString(), // Generate a unique ID
            content: e.target.value,
            checked: false
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!input.content.trim()) {
            toast.error("Task cannot be empty");
            return;
        }
        onAddTask(input);
        setInput({ id: "", content: "", checked: false });
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <div className="input-group">
                <input
                    type="text"
                    id="taskInput"
                    placeholder="Add a new task..."
                    value={input.content}
                    onChange={handleTaskAddInput} // Fixing the event passing
                />
                <button id="addTask" type="submit">+</button>
            </div>
        </form>
    );
};
