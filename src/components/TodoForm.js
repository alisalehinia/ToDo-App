import { useRef, useState, useEffect } from 'react'
const TodoForm = (props) => {
    const [todo, setTodo] = useState(props.edit ? props.edit.text : "");
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();

    }, []);
    const changeHandler = (e) => {
        console.log(e.target.value);
        setTodo(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (!todo) {
            alert("enter todo !");
            return;
        }
        props.submitTodo(todo);
        setTodo("");
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='formControl'>
                    <input
                        type="text"
                        value={todo}
                        onChange={changeHandler}
                        placeholder={props.edit ? "update ..." : "add"}
                        ref={inputRef} />
                    <button type="submit" className={`btn ${props.edit ? "updateTodo" : "addTodo"}`}>{props.edit ? "update" : "add"}</button>
                </div>
            </form>
        </div>
    );
}

export default TodoForm;