import { z } from 'zod';

export const taskSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Max 100 chars'),
});

export type TaskInput = z.infer<typeof taskSchema>;
