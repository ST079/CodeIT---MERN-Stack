import z from "zod";
import {
  ORDER_STATUS_CANCELLED,
  ORDER_STATUS_CONFIRMED,
  ORDER_STATUS_DELIVERED,
  ORDER_STATUS_PENDING,
  ORDER_STATUS_SHIPPED,
} from "../../constants/orderStatuses.js";

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
  status: z
    .array(
      z.enum(
        [
          ORDER_STATUS_PENDING,
          ORDER_STATUS_CANCELLED,
          ORDER_STATUS_CONFIRMED,
          ORDER_STATUS_DELIVERED,
          ORDER_STATUS_SHIPPED,
        ],
        {
          errorMap: () => ({ message: "Invalid order status" }),
        },
      ),
    )
    .optional(),
  totalPrice: z
    .number({
      error: (val) =>
        val.input === undefined
          ? "totalPrice is required."
          : "totalPrice must be a number",
    })
    .min(0)
    .optional(),
});

const orderStatusSchema = z.object({
  status: z.enum(
    [
      ORDER_STATUS_CANCELLED,
      ORDER_STATUS_CONFIRMED,
      ORDER_STATUS_DELIVERED,
      ORDER_STATUS_PENDING,
      ORDER_STATUS_SHIPPED,
    ],
    {
      errorMap: () => ({ message: "Invalid order status" }),
    },
  ),
});

export { orderSchema, orderStatusSchema };
