import { z } from "zod";

export const createCollectionSchema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  color: z.string(),
});
