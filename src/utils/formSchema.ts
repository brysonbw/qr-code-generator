import { z } from 'zod';

const formSchema = z.object({
  url: z.string().url().trim().min(1),
});

export default formSchema;
