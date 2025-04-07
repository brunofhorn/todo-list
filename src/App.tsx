import { useEffect, useState } from 'react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { ListTask } from './components/ListTask';
import { TaskProps } from './components/Task';

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    setTasks([
      { id: 1, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', taskCompleted: false },
      { id: 2, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', taskCompleted: false },
      { id: 3, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', taskCompleted: false },
      { id: 3, text: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.', taskCompleted: true },
    ]);
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-600">
      <Header />
      <div className='flex flex-col gap-12 justify-center items-center w-full max-w-[1024px] mx-auto px-3'>
        <Form />
        <ListTask tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
