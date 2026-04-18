import z from "zod";

const orderSchema = z.object({
  orderItems: z.array(
    z.object({
      product: z.string({ error: "Product is required" }),
    }),
  ),
  shippingAddress: z.object({
    country: z.string().default("Nepal").optional(),
    province: z.string().optional(),
    city: z.string({ error: "Shipping Address City is required." }),
    street: z.string({ error: "Shipping Address Street is required." }),
  }),
  totalPrice: z
    .number({
      error: (val) =>
        val.input === undefined
          ? "totalPrice is required."
          : "totalPrice must be a number",
    })
    .min(0),
});

export { orderSchema };
