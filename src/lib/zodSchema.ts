import { z } from "zod";

export const loginSchema = z.object({
  usernameOrEmail: z.string(),
  password: z.string(),
});
