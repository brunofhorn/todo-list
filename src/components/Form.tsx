import { PlusCircle } from "@phosphor-icons/react";
import { useState } from "react";
import { Task } from "./Task";

interface FormProps {
    onAddNewTask: (task: Task) => void;
}

export function Form({ onAddNewTask }: FormProps) {
    const [inputTaskText, setInputTaskText] = useState<string>("");

    const handleSubmit = () => {
        if (!inputTaskText) {
            return;
        }

        const newTask: Task = {
            id: new Date().getTime(),
            text: inputTaskText,
            taskCompleted: false,
        };

        setInputTaskText('');
        onAddNewTask(newTask);
    };

    return (
        <form className="flex flex-row gap-2 -mt-7 w-full">
            <input
                type="text"
                className="
                    w-full h-14
                    bg-gray-500
                    rounded-lg
                    text-gray-100
                    placeholder:text-gray-300
                    pl-4 pr-4
                    border-none
                    appearance-none
                    focus:outline-none
                    focus:ring-2
                    focus:ring-purple-dark
                "
                placeholder="Adicione uma nova tarefa"
                value={inputTaskText}
                onChange={(e) => setInputTaskText(e.target.value)}
            />
            <button
                className="
                    flex 
                    flex-row 
                    gap-2 
                    w-24 h-14 
                    text-gray-100 
                    bg-blue-dark 
                    rounded-lg 
                    p-4 
                    text-base 
                    font-bold 
                    font-inter 
                    justify-center 
                    items-center 
                    cursor-pointer 
                    hover:bg-blue
                "
                type="button"
                onClick={() => handleSubmit()}
            >
                Criar
                <PlusCircle size={18} />
            </button>
        </form>
    );
}