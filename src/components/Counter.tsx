interface CounterProps {
    counter: number;
}

export function Counter({ counter = 0 }: CounterProps) {
    return (
        <span className="text-gray-200 bg-gray-400 pl-2 pr-2 pt-0.5 pb-0.5 rounded-full ml-2">{counter}</span>
    );
}