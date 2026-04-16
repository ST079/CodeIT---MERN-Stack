import z from "zod";
import { userSchema } from "./user.schema.js";


const loginSchema = z.object({
  email: z.string().email().optional(),
  phone: z.string().optional(),
  password: z.string().min(6),
}).refine((data) => data.email || data.phone, {
    message: "Either email or phone must be provided.",
    path:["email"],
});

const registerSchema =userSchema;

export { loginSchema , registerSchema};