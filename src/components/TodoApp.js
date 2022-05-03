import { useState, useEffect } from 'react';
import '../App.css';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Header from './Header';
const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [filteredTodos, setFilteredTodos] = useState([]);
    const [status, setStatus] = useState("All");
    useEffect(() => {
        filterTodos(status);
    }, [todos, status]);
    const addTodoHandler = (input) => {
        const newTodo = { id: Math.floor(Math.random() * 100), text: input, isCompleted: false };
        setTodos([...todos, newTodo]);
        console.log("added");
    }
    const onComplete = (id) => {
        const index = todos.findIndex((p) => p.id === id);
        const selectedItem = { ...todos[index] };
        selectedItem.isCompleted = !selectedItem.isCompleted;
        const copyTodos = [...todos];
        copyTodos[index] = selectedItem;
        setTodos(copyTodos);

    }
    const onDelete = (id) => {
        const copyTodos = [...todos];
        const filtered = copyTodos.filter((p) => p.id !== id);
        setTodos(filtered);

    }
    const updateTodo = (id, newValue) => {
        const index = todos.findIndex((p) => p.id === id);
        const selectedItem = { ...todos[index] };
        selectedItem.text = newValue;
        const copyTodos = [...todos];
        copyTodos[index] = selectedItem;
        setTodos(copyTodos);
    }
    const filterTodos = (status) => {
        switch (status) {
            case "Completed": setFilteredTodos(todos.filter((t) => t.isCompleted));
                break;
            case "unCompleted": setFilteredTodos(todos.filter((t) => !t.isCompleted));
                break
            default:
                setFilteredTodos(todos);
                break;
        }
    }
    return (
        <div className='container'>
            <Header todos={todos} filterTodos={filterTodos} selectedOption={status} setStatus={setStatus} />
            <TodoForm submitTodo={addTodoHandler} />
            <TodoList todos={filteredTodos} onComplete={onComplete} onDelete={onDelete} onUpdate={updateTodo} />
        </div>
    );
}

export default TodoApp;
