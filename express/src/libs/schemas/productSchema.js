import z from "zod";

const productSchema = z.object({
  name: z.string({ error: "Product name is required." }).min(3).trim(),
  brand: z.string().optional(),
  category: z.string().optional(),
  price: z
    .string({
      error: (val) =>
        val.input === undefined
          ? "Price is required."
          : "Price must be a number",
    })
    .min(1)
    .max(999999999),
  stock: z.string().min("1").optional(),
  imageUrls: z.array(z.string()).optional(),
});

export { productSchema };
