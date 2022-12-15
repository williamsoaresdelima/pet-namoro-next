import { z } from "zod";
import { nameSchema } from "./base/nameSchema";
import { lastnameSchema } from "./base/lastnameSchema";
import { emailSchema } from "./base/emailSchema";

export const baseUserSchema = z.object({
  name: nameSchema,
  lastname: lastnameSchema,
  email: emailSchema,
});

export type BaseUserSchema = z.infer<typeof baseUserSchema>;