import { defineType } from "sanity";

export const categorySchema = defineType({
  name: "categories",
  title: "Categories",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Category Title",
      type: "string",
      validation: (Rule) => Rule.required().min(3).max(50), // Required, 3-50 characters
    },
    {
      name: "image",
      title: "Category Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(), // Image is required
    },
    {
      name: "products",
      title: "Number of Products",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(0), // Required, non-negative integer
    },
  ],
});
