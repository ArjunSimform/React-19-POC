import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

export type Task = {
  id: string;
  title: string;
  completed: boolean;
};

let mockTasksDB: Task[] = [
  { id: 't1', title: 'Learn React 19 hooks', completed: false },
  { id: 't2', title: 'Build task management app', completed: true },
];

// Simulate async fetch with delay
async function fetchTasks(): Promise<Task[]> {
  await new Promise(r => setTimeout(r, 500));
  return mockTasksDB;
}

async function addTaskAPI(title: string): Promise<Task> {
  const newTask = { id: String(Date.now()), title, completed: false };
  mockTasksDB = [newTask, ...mockTasksDB];
  await new Promise(r => setTimeout(r, 300));
  return newTask;
}

async function toggleTaskAPI(id: string): Promise<Task | undefined> {
  mockTasksDB = mockTasksDB.map(t =>
    t.id === id ? { ...t, completed: !t.completed } : t
  );
  await new Promise(r => setTimeout(r, 300));
  return mockTasksDB.find(t => t.id === id);
}

// Query keys for tasks
export const tasksQueryKeys = {
  all: ['tasks'] as const,
  detail: (id: string) => [...tasksQueryKeys.all, id] as const,
};

// Query options for fetching all tasks
export const tasksQueryOptions = () =>
  queryOptions({
    queryKey: tasksQueryKeys.all,
    queryFn: fetchTasks,
    staleTime: 5 * 60 * 1000,
  });

// Custom hook to get tasks with suspense mode
export function useTasks() {
  return useSuspenseQuery(tasksQueryOptions());
}

// Mutation helpers (these would be normally with React Query mutations)
export { addTaskAPI, toggleTaskAPI };
