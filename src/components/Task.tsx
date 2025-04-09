import { Trash } from '@phosphor-icons/react';
import { Unchecked } from './Unchecked';
import { Checked } from './Checked';

export interface TaskProps {
    data: Task,
    onRemoveTask: (id: string) => void;
    onToggleTask: (id: string) => void;
}

export interface Task {
    id: string;
    taskCompleted: boolean;
    text: string;
}

export function Task({ data, onRemoveTask, onToggleTask }: TaskProps) {
    return (
        <div className="flex flex-row gap-3 items-start justify-between bg-gray-500 border border-gray-400 rounded-lg p-4 w-full">
            <div className='w-6'>
                <button onClick={() => onToggleTask(data.id)} className='cursor-pointer'>
                    {data.taskCompleted ? <Checked /> : <Unchecked />}
                </button>
            </div>
            <span className={`text-left w-full ${data.taskCompleted ? "text-gray-300 line-through" : "text-gray-100"}`}>{data.text}</span>
            <button onClick={() => onRemoveTask(data.id)} className="text-gray-300 hover:text-danger hover:bg-gray-400 rounded-sm p-1.5 cursor-pointer">
                <Trash size={20} />
            </button>
        </div>
    );
}