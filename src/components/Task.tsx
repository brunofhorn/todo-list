import incompleteTaskMark from '../assets/incompleteTaskMark.svg';
import completedTaskMark from '../assets/completedTaskMark.svg';
import trash from '../assets/trash.svg';

export interface TaskProps {
    id: number;
    taskCompleted: boolean;
    text: string;
}

export function Task({ text, taskCompleted = false }: TaskProps) {
    return (
        <div className="flex flex-row gap-3 items-start justify-between bg-gray-500 border border-gray-400 rounded-lg p-4 w-full">
            <button className='w-8'>
                <img src={taskCompleted ? completedTaskMark : incompleteTaskMark} width={24} height={24} />
            </button>
            <span className={`text-left w-full ${taskCompleted ? "text-gray-300 line-through" : "text-gray-100"}`}>{text}</span>
            <button className='w-8'>
                <img src={trash} width={16} height={16} />
            </button>
        </div>
    );
}