import '../App.css';
const Todo = ({ todo, onComplete, onDelete, onEdit }) => {
    return (
        <div key={todo.id} className="todo">
            <div onClick={onComplete} className={`todoText ${todo.isCompleted ? "completed" : ""}`}>
                {todo.text}
            </div>
            <div>
                <button onClick={onEdit} className="btn">edit</button>
                <button onClick={onDelete} className="btn remove">delete</button>
            </div>
        </div>
    );
}

export default Todo;