import { z } from "zod";
import { userMessages } from "../../userMessages";

const lastnameMinLength = 2;
const lastnameMaxLength = 48;
const lastnameField = "sobrenome";

export const lastnameSchema = z
  .string()
  .min(lastnameMinLength, {
    message: userMessages.min(lastnameField, lastnameMinLength),
  })
  .max(lastnameMaxLength, {
    message: userMessages.max(lastnameField, lastnameMaxLength),
  })
  .transform((lastname) => lastname.trim());