import React from "react";

interface Todo {
  id: number;
  text: string;
}

interface TodoListProps {
  todos: Todo[];
}

// Presentational Component
const TodoList: React.FC<TodoListProps> = ({ todos }) => (
  <ul>
    {todos.map(todo => (
      <li key={todo.id}>{todo.text}</li>
    ))}
  </ul>
);

// Container Component
export const TodoListContainer: React.FC = () => {
  const [todos] = React.useState<Todo[]>([
    { id: 1, text: 'Learn React' },
    { id: 2, text: 'Learn Redux' },
  ]);

  return <TodoList todos={todos} />;
};

