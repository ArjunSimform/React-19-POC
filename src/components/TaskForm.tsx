import React, { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { taskSchema } from '@/utils/validation';

interface Props {
  onAdd: (title: string) => void;
}

type FormData = {
  title: string;
};

export default function TaskForm({ onAdd }: Props) {
  const [formState, setFormState] = useState<'idle' | 'submitting'>('idle');
  const { pending } = useFormStatus();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(taskSchema),
  });

  async function onSubmit(data: FormData) {
    setFormState('submitting');
    await onAdd(data.title);
    reset();
    setFormState('idle');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mb-6 space-y-2">
      <input
        {...register('title')}
        type="text"
        placeholder="Add new task"
        className="border px-3 py-2 rounded w-full"
        aria-invalid={!!errors.title}
        aria-describedby="task-error"
      />
      {errors.title && (
        <p id="task-error" className="text-red-600 text-sm">
          {errors.title.message}
        </p>
      )}
      <button
        type="submit"
        disabled={formState === 'submitting' || pending}
        className="btn btn-primary"
      >
        {formState === 'submitting' || pending ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  );
}
