export const List = ({ tasks, onDeleteTask, onClearAll }) => {
    
    return (
        <>
            <ul id="taskList">
                {tasks.length === 0 ? (
                    <p className="empty-message">No tasks added yet</p>
                ) : (
                    tasks.map((task, index) => (
                        <li key={index}>
                            <span className="task-text">{task}</span>
                            <button className="delete" onClick={() => onDeleteTask(index)}>✖</button>
                        </li>
                    ))
                )}
            </ul>
            <button onClick={onClearAll}>Clear All</button>
         </>
    );
};
