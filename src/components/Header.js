
const Header = (props) => {
    const unCompleteds = props.todos.filter((t) => !t.isCompleted).length;

    const changeHandler = (e) => {
        props.setStatus(e.target.value);
        props.filterTodos(e.target.value);
    }

    return (
        <div className="header">
            <div>
                {unCompleteds ? unCompleteds : "set your today todos"}
            </div>
            <div>
                ToDo App - Ali
            </div>
            <select onChange={changeHandler} value={props.selectedOption}>
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="unCompleted">unCompleted</option>
            </select>

        </div>
    );
}

export default Header;