import { Check } from "@phosphor-icons/react";

export function Checked(){
    return (
        <div className="flex justify-center items-center w-6 h-6 rounded-full border-3 border-purple-dark bg-purple hover:border-purple hover:bg-purple">
            <Check size={10} color="#FFF" />
        </div>
    )
}