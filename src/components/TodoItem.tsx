import { Trash } from '@phosphor-icons/react';
import { Unchecked } from './Unchecked';
import { Checked } from './Checked';
import { motion } from 'framer-motion';

export interface TodoItemProps {
    data: TodoItem,
    onRemoveTask: (id: string) => void;
    onToggleTask: (id: string) => void;
}

export interface TodoItem {
    id: string;
    taskCompleted: boolean;
    text: string;
}

export function TodoItem({ data, onRemoveTask, onToggleTask }: TodoItemProps) {
    return (
        <motion.li
            layout
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="flex flex-row gap-3 items-start justify-between bg-gray-500 border border-gray-400 rounded-lg p-4 w-full transition-all duration-300"
        >
            <div className='w-6'>
                <button onClick={() => onToggleTask(data.id)} className='cursor-pointer'>
                    {data.taskCompleted ? <Checked /> : <Unchecked />}
                </button>
            </div>
            <span className={`text-left w-full ${data.taskCompleted ? "text-gray-300 line-through" : "text-gray-100"}`}>{data.text}</span>
            <button onClick={()=>onRemoveTask(data.id)} className="text-gray-300 hover:text-danger hover:bg-gray-400 rounded-sm p-1.5 cursor-pointer transition">
                <Trash size={20} />
            </button>
        </motion.li>
    );
}