import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const SignInSchema = z.object({
  email: z.string(),
  password: z.string().min(10),
});

export class SignInDto extends createZodDto(SignInSchema) {}
