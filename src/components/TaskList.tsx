import type { Task } from '@/api/tasks';
import React from 'react';

interface Props {
  tasks: Task[];
  onToggle: (id: string) => void;
}

export default function TaskList({ tasks, onToggle }: Props) {
  return (
    <ul className="space-y-2">
      {tasks.map(({ id, title, completed }) => (
        <li
          key={id}
          className={`p-3 rounded shadow cursor-pointer flex justify-between items-center ${
            completed ? 'bg-green-100 line-through text-gray-500' : 'bg-white'
          }`}
          onClick={() => onToggle(id)}
          aria-label={`Toggle task ${title}`}
        >
          <span>{title}</span>
          <input
            type="checkbox"
            checked={completed}
            readOnly
            className="cursor-pointer"
          />
        </li>
      ))}
    </ul>
  );
}
