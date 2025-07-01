import { z } from 'zod';

const validationScheme = z.object({
    title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
    completed: z.boolean(),
    id: z.string(),
});

export default validationScheme;
