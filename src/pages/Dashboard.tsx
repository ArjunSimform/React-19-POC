import React, { Suspense } from 'react';
import { useTasks, addTaskAPI, toggleTaskAPI } from '../api/tasks';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import { toast } from 'sonner';
import { queryClient } from '../queryClient';
import { tasksQueryKeys } from '../api/tasks';
export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl mb-4 font-bold">Your Tasks</h1>
      <Suspense fallback={<p>Loading tasks...</p>}>
        <TasksSection />
      </Suspense>
    </div>
  );
}

function TasksSection() {
  const { data: tasks } = useTasks();

  async function onAddTask(title: string) {
    try {
      await addTaskAPI(title);
      // Invalidate query to refetch fresh tasks
      toast('Task added!');
      // react-query refetch - in production use mutations; here simplified
      queryClient.invalidateQueries(tasksQueryKeys.all);
    } catch {
      toast.error('Failed to add task');
    }
  }

  async function onToggleTask(id: string) {
    try {
      await toggleTaskAPI(id);
      toast('Task updated!');
      queryClient.invalidateQueries(tasksQueryKeys.all);
    } catch {
      toast('Failed to update task');
    }
  }

  return (
    <>
      <TaskForm onAdd={onAddTask} />
      <TaskList tasks={tasks} onToggle={onToggleTask} />
    </>
  );
}
