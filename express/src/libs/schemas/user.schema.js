import z from "zod";
import { ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER } from "../../constants/roles.js";

const userSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(6, "Password must be at least 6 characters long."),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  address: z.object({
    country: z.string(),
    province: z.string(),
    city: z.string(),
    street: z.string().optional(),
  }),
  roles: z.array(z.enum([ROLE_ADMIN, ROLE_MERCHANT, ROLE_USER])).optional(),
  profileImageUrl: z.string().optional(),
  isActive: z.boolean().default(true).optional(),
});

export { userSchema };
