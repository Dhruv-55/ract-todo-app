import { useState } from "react";
import './Todo.css'

export default function Todo(){
    const [input, setInput] = useState("");
    const handleTaskAddInput = (e) => {
        console.log(e);
        setInput(e);
    }
    return(
        <>
            <div class="todo-container">
                <h1>To-Do List</h1>
                <form action="" onSubmit = {(e) => {e.preventDefault()}} >
                    <div class="input-group">
                        <input type="text" id="taskInput" placeholder="Add a new task..." 
                        onChange={ (e) => {handleTaskAddInput(e.target.value)}  }
                        />
                        <button id="addTask">+</button>
                    </div>
                </form>
                <ul id="taskList"></ul>
            </div>
        </>
    );
}