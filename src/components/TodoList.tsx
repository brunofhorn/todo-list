import { AnimatePresence } from 'framer-motion';
import { Counter } from './Counter';
import { TodoItem } from './TodoItem';
import { Clipboard } from '@phosphor-icons/react';

interface TodoListProps {
    tasks: TodoItem[];
    onToggleTask: (id: string) => void;
    onRemoveTask: (id: string) => void;
}

export function TodoList({ tasks, onToggleTask, onRemoveTask }: TodoListProps) {
    const activeTasks = tasks.filter(task => !task.taskCompleted).reverse();
    const completedTasks = tasks.filter(task => task.taskCompleted).reverse();

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row font-bold font-inter text-sm w-full justify-between">
                <span className='text-blue'>Tarefas criadas <Counter total={tasks.length} /></span>
                <span className='text-purple'>Concluídas <Counter total={tasks.length} completed={tasks.filter(t => t.taskCompleted).length} /></span>
            </div>
            <div className="flex flex-col gap-4 justify-start items-start border-t border-gray-400 rounded-lg mt-8 min-h-60">
                {tasks.length > 0 ? (
                    <ul className='flex flex-col w-full gap-4'>
                        <AnimatePresence>
                            {[...activeTasks, ...completedTasks].map(task => (
                                <TodoItem key={task.id} data={task} onRemoveTask={onRemoveTask} onToggleTask={onToggleTask} />
                            ))}
                        </AnimatePresence>
                    </ul>
                ) : (
                    <div className='flex flex-col gap-4 w-full justify-center items-center min-h-60'>
                        <Clipboard size={65} color="#3d3d3d" />
                        <div className='flex flex-col text-gray-300 text-center'>
                            <span className='font-bold'>Você ainda não tem tarefas cadastradas</span>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}