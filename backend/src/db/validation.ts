import { z } from "zod"

export const facilitySchema = z.object({
  name: z.string({
      required_error: "Name is required",
  }),
  street_address: z.string({
    required_error: "Street Address is required",
  }),
  city: z .string({
    required_error: "City is required",
  }),
  state: z.string({
    required_error: "state is required",
  }),
  zip_code: z.string({
    required_error: "Zip Code is required",
  }),
  phone_number: z.string({
    required_error: "Phone Number is required",
  })
})