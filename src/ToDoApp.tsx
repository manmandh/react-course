import { ChangeEvent, useState } from "react";

export const ToDoApp = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [editValue, setEditValue] = useState<string | null>(null);

  const handleAdd = () => {
    if (editValue) {
      const newTodos = todos.map(todo => {
        if(todo === editValue){
          return inputValue;
        } else {
          return todo;
        }
      })
      setTodos(newTodos);
      setEditValue(null);
    } else {
      setTodos([...todos, inputValue]);
    }
    setInputValue('');
  };

  const handleValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleDelete = (todoContent: string) => {
    const newTodos = todos.filter(todo => todo !== todoContent);
    setTodos(newTodos);
  };

  const handleEdit = (todoContent: string) => {
    setEditValue(todoContent);
    setInputValue(todoContent);
  };

  return (
    <div>
      <h1>To Do App</h1>
      <input
        value={inputValue}
        type="text"
        onChange={handleValueChange}
      />
      <button onClick={handleAdd}>
        {editValue ? 'Update' : 'Add'}
      </button>
      <ul>
        {todos.map((itemTodo, index) => (
          <li key={index}>
            {itemTodo}
            <button onClick={() => handleEdit(itemTodo)}>Edit</button>
            <button onClick={() => handleDelete(itemTodo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
