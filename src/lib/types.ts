import { z } from 'zod';

export const contactSchema = z.object({
    first_name: z.string().min(1,{message: "First Name is required"}),
    last_name: z.string().min(1,{message: "Last Name is required"}),
    status: z.string().min(1,{message: "Please select a contact status"})
})

export type ContactSchema = z.infer<typeof contactSchema>;
