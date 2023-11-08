export const pizza = {
  name: "pizza",
  type: "document",
  title: "Pizza",
  fields: [
    {
      name: "image",
      title: "image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "Enter the product name",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    { name: "price", title: "Price", type: "array", of: [{ type: "number" }] },
    { name: "details", title: "Details", type: "string" },
  ],
};
