const TodoInput = ({handleAddTodos, todoValue, setTodoValue}) => {
  return (
    <header>
        <input type="text" value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
        }} placeholder='Enter todo ...' />
        <button onClick={() => {
            handleAddTodos(todoValue)
            setTodoValue('')
        }}>Add</button>
    </header>
  )
}

export default TodoInput