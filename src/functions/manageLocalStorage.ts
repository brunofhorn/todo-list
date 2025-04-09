import { TodoItem } from "../components/TodoItem";

const TASKS_KEY = 'todo_app_tasks';

export const getTasksFromLocalStorage = (): TodoItem[] => {
  const tasksJson = localStorage.getItem(TASKS_KEY);
  return tasksJson ? JSON.parse(tasksJson) : [];
};

export const saveTasksToLocalStorage = (tasks: TodoItem[]) => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};