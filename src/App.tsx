import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { ListTask } from './components/ListTask';
import { Task } from './components/Task';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddNewTask = (newTask: Task) => {
    setTasks((state) => [...state, newTask]);
  };

  useEffect(() => {
    setTasks([
      { id: new Date().getTime(), text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', taskCompleted: false },
      { id: new Date().getTime(), text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', taskCompleted: false },
      { id: new Date().getTime(), text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', taskCompleted: false },
      { id: new Date().getTime(), text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', taskCompleted: true },
    ]);
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-600">
      <Header />
      <div className='flex flex-col gap-12 justify-center items-center w-full max-w-[1024px] mx-auto px-3'>
        <Form onAddNewTask={handleAddNewTask} />
        <ListTask tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
