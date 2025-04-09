import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState<TodoItem[]>([]);

  const handleAddNewTask = (newTask: TodoItem) => {
    setTasks((state) => [...state, newTask]);
  };

  const handleToggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, taskCompleted: !task.taskCompleted };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  };

  const handleRemoveTask = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  useEffect(() => {
    setTasks([
      { id: uuidv4(), text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', taskCompleted: false },
      { id: uuidv4(), text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', taskCompleted: false },
      { id: uuidv4(), text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', taskCompleted: false },
      { id: uuidv4(), text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', taskCompleted: true },
    ]);
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-600">
      <Header />
      <div className='flex flex-col gap-12 justify-center items-center w-full max-w-[1024px] mx-auto px-3'>
        <Form onAddNewTask={handleAddNewTask} />
        <TodoList tasks={tasks} onToggleTask={handleToggleTask} onRemoveTask={handleRemoveTask} />
      </div>
    </div>
  );
}

export default App;
