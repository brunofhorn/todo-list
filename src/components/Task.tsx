import incompleteTaskMark from '../assets/incompleteTaskMark.svg';
import completedTaskMark from '../assets/completedTaskMark.svg';
import { Trash } from '@phosphor-icons/react';

export interface TaskProps {
    data: Task,
    onRemoveTask: (id: number) => void;
}

export interface Task {
    id: number;
    taskCompleted: boolean;
    text: string;
}

export function Task({ data, onRemoveTask }: TaskProps) {
    const handleRemove = () => {
        onRemoveTask(data.id);
    };

    return (
        <div className="flex flex-row gap-3 items-start justify-between bg-gray-500 border border-gray-400 rounded-lg p-4 w-full">
            <button className='w-8'>
                <img src={data.taskCompleted ? completedTaskMark : incompleteTaskMark} width={24} height={24} />
            </button>
            <span className={`text-left w-full ${data.taskCompleted ? "text-gray-300 line-through" : "text-gray-100"}`}>{data.text}</span>
            <button onClick={handleRemove} className="text-gray-300 hover:text-danger hover:bg-gray-400 rounded-sm p-1.5 cursor-pointer">
                <Trash size={20}  />
            </button>
        </div>
    );
}