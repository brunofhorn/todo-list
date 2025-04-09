import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { getTasksFromLocalStorage, saveTasksToLocalStorage } from './functions/manageLocalStorage';

function App() {
  const [tasks, setTasks] = useState<TodoItem[]>([]);

  const handleAddNewTask = (newTask: TodoItem) => {
    setTasks((state) => [...state, newTask]);

    const currentTasks = getTasksFromLocalStorage();
    const updatedTasks = [...currentTasks, newTask];
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleToggleTask = (id: string) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, taskCompleted: !task.taskCompleted };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const handleRemoveTask = (id: string) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return;
    }

    setTasks(filteredTasks);
    const currentTasks = getTasksFromLocalStorage();
    const updatedTasks = currentTasks.filter(task => task.id !== id);
    saveTasksToLocalStorage(updatedTasks);
  };

  useEffect(() => {
    const storedTasks = getTasksFromLocalStorage();
    setTasks(storedTasks);
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
