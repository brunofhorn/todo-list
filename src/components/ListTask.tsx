import clipboard from '../assets/clipboard.svg';
import { Counter } from './Counter';
import { Task, TaskProps } from './Task';

interface ListTaskProps {
    tasks: TaskProps[];
}

export function ListTask({ tasks }: ListTaskProps) {
    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-row font-bold font-inter text-sm w-full justify-between">
                <span className='text-blue'>Tarefas criadas <Counter counter={0} /></span>
                <span className='text-purple'>Concluídas <Counter counter={0} /></span>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center border-t border-gray-400 rounded-lg mt-8 min-h-60">
                {tasks.length > 0 ? (
                    <>
                        {tasks.map(task => <Task {...task} />)}
                    </>
                ) : (
                    <>
                        <img src={clipboard} width={56} height={56} alt="" />
                        <div className='flex flex-col text-gray-300 text-center'>
                            <span className='font-bold'>Você ainda não tem tarefas cadastradas</span>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>

                    </>
                )}
            </div>
        </div>
    );
}