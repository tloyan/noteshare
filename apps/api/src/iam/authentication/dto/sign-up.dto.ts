import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SignUpSchema = z.object({
  email: z.string(),
  password: z.string().min(10),
});

export class SignUpDto extends createZodDto(SignUpSchema) {}
