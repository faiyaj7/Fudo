export const order = {
  name: "order",
  type: "document",
  title: "Order",
  fields: [
    {
      name: "customer_name",
      title: "Customer Name",
      type: "string",
    },
    {
      name: "phone",
      title: "Phone",
      type: "number",
    },
    { name: "method", title: "Method", type: "string" },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    { name: "total", title: "Total", type: "number" },
    {
      name: "present_stage",
      title: "Present Stage",
      type: "string",
      options: {
        list: [
          { title: "Cooking", value: "cooking" },
          { title: "Way", value: "way" },
          { title: "Delivered", value: "delivered" },
        ], // <-- predefined values
        layout: "radio", // <-- defaults to 'dropdown'
      },
    },
  ],
};
