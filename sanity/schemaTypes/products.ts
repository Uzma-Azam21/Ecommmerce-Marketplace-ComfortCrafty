import { defineType } from "sanity";

export const productSchema = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(100), // Required, 3-100 characters
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().positive().min(0), // Required, must be positive
    },
    {
      name: "priceWithoutDiscount",
      title: "Price without Discount",
      type: "number",
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (
            value &&
            context.document?.price &&
            value < context.document.price
          ) {
            return "Price without discount must be greater than or equal to the price.";
          }
          return true;
        }),
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
      validation: (Rule) => Rule.max(20), // Maximum 20 characters
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(), // Image is required
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
      validation: (Rule) => Rule.required(), // Category is required
    },
    {
      name: "dimensions",
      title: "Dimensions",
      type: "object",
      fields: [
        {
          name: "height",
          title: "Height (inches)",
          type: "number",
          validation: (Rule) =>
            Rule.positive().min(0).error("Height must be a positive value."),
        },
        {
          name: "width",
          title: "Width (inches)",
          type: "number",
          validation: (Rule) =>
            Rule.positive().min(0).error("Width must be a positive value."),
        },
        {
          name: "depth",
          title: "Depth (inches)",
          type: "number",
          validation: (Rule) =>
            Rule.positive().min(0).error("Depth must be a positive value."),
        },
      ],
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
      validation: (Rule) => Rule.required().min(10).max(500), // Required, 10-500 characters
    },
    {
      name: "inventory",
      title: "Inventory",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(0), // Required, non-negative integer
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Featured", value: "featured" },
          { title: "Instagram", value: "instagram" },
          { title: "Gallery", value: "gallery" },
        ],
      },
      validation: (Rule) => Rule.unique(), // Tags should be unique
    },
  ],
});
