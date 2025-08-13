import { useActionState, useOptimistic, useState } from 'react';

async function addTodoToServer(newTodo) {
  // Fake server delay
  await new Promise(res => setTimeout(res, 1000));
  return { id: Date.now(), text: newTodo };
}

type Todo = {
  id: number;
  text: string;
};
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Learn React 19' },
  ]);

  // 🔹 For optimistic UI
  const [optimisticTodos, addOptimisticTodo] = useOptimistic<Todo[], string>(
    todos,
    (state, newTodo) => [...state, { id: Date.now(), text: newTodo }]
  );

  // 🔹 For async action handling
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData: FormDataEntryValue) => {
      const text = formData.get('todo');
      addOptimisticTodo(text); // Instant UI update
      const savedTodo = await addTodoToServer(text);
      setTodos(prev => [...prev, savedTodo]);
      return '';
    },
    '' // initial state
  );
  console.log('Current state:', state);

  // 🔹 Render
  return (
    <div style={{ padding: 20 }}>
      <h2>Todos</h2>
      <ul>
        {optimisticTodos.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>

      <form action={formAction}>
        <input name="todo" placeholder="Add a todo" required />
        <button type="submit" disabled={isPending}>
          {isPending ? 'Adding...' : 'Add'}
        </button>
      </form>
    </div>
  );
}
