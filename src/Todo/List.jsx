import { AiFillCheckCircle } from "react-icons/ai";

export const List = ({ tasks, onDeleteTask, onClearAll, onTaskToggle }) => {
    
    return (
        <>
            <ul id="taskList">
                {tasks.length === 0 ? (
                    <p className="empty-message">No tasks added yet</p>
                ) : (
                    tasks.map((task, index) => (
                        <li key={index}>
                            <span className={`task-text ${task.checked ? 'checked' : 'not-checked'}`}>{task.content   }</span>
                            <button className="toggle" checked={task.checked} onClick={() => onTaskToggle(index)}> <AiFillCheckCircle />
                            </button>
                            <button className="delete" onClick={() => onDeleteTask(index)}>✖</button>
                        </li>
                    ))
                )}
            </ul>
           
            <button onClick={onClearAll}>Clear All</button>
         </>
    );
};
