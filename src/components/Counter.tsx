interface CounterProps {
    total: number;
    completed?: number;
  }

export function Counter({ total, completed }: CounterProps) {
    const content = completed !== undefined ? `${completed} de ${total}` : total;

  return (
    <span className="text-gray-200 bg-gray-400 pl-2 pr-2 pt-0.5 pb-0.5 rounded-full ml-2">
      {content}
    </span>
  );
}