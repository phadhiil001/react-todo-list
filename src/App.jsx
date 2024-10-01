import { useEffect, useState } from "react"
import TodoInput from "./component/TodoInput"
import TodoList from "./component/TodoList"

function App() {

  const [todos, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState([]);

  function persisteData(newList) {
    localStorage.setItem("todos", JSON.stringify({todos: newList}));
  }


  function handleAddTodos(newTodo) {
    const newTodoList = [...todos, newTodo];
    persisteData(newTodoList)
    setTodo(newTodoList);
  }
  
  function handleDeleteTodos(index) {
    const newTodoList = todos.filter ((todo, todoIndex) => {
      return todoIndex !== index
    });
    persisteData(newTodoList)
    setTodo(newTodoList);
  }

  function handleEditTodos(index) {
    const valueToBeEditted = todos[index]
    setTodoValue(valueToBeEditted)
    handleDeleteTodos(index)
  }

  useEffect(() => {
    if(!localStorage) {
      return
    }

    let localTodos = localStorage.getItem('todos')
    if(!localTodos) {
      return
    }

    console.log(localTodos);
    localTodos = JSON.parse(localTodos).todos
    setTodo(localTodos)
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
      <TodoList handleEditTodos={handleEditTodos} handleDeleteTodos={handleDeleteTodos} todos={todos} />
    </>
  )
}

export default App
