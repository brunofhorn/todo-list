import todoLogo from "../assets/logo.svg";

export function Header() {
	return (
		<header className="flex w-full h-52 bg-gray-700 justify-center items-center">
			<img src={todoLogo} alt="ToDo List" width={126} height={48} />
		</header>
	);
}