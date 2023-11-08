import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
const store = (set, get) => ({
  qty: 0,
  cart: [],
  totalQuantities: 0,
  totalPrice: 0,
  emptyCart: () => set((state) => ({ cart: [] })),
  emptytotalQuantities: () => set((state) => ({ totalQuantities: 0 })),
  emptytotalPrice: () => set((state) => ({ totalPrice: 0 })),
  removeItemsFromCart: (id, size) => {
    const product = get().cart.find(
      (item) => item._id === id && item.size === size
    );

    const removeProduct = get().cart.filter(
      (item) =>
        // Same product but other size will be included
        (item._id === id && item.size !== size) ||
        // Different product and different size will be included
        (item._id !== id && item.size !== size) ||
        // Different product and same size will be included
        (item._id !== id && item.size === size)
    );
    set(
      (state) => ({ cart: [...removeProduct] }),
      false,
      "Filtered out the product"
    );
    set(
      (state) => ({
        totalPrice: state.totalPrice - product.exactPrice * product.quantity,
      }),
      false,
      "Total Price Reduced after filtering"
    );
    set(
      (state) => ({
        totalQuantities: state.totalQuantities - product.quantity,
      }),
      false,
      "Total Quantites Reduced after filtering"
    );
  },

  toggleCartItems: (id, size, operator) => {
    const product = get().cart.find(
      (item) => item._id === id && item.size === size
    );

    if (operator === "inc") {
      product.quantity = product.quantity + 1;
      set(
        (state) => ({ totalPrice: state.totalPrice + product.exactPrice }),
        false,
        "Total Price Increases"
      );
      set(
        (state) => ({
          totalQuantities: state.totalQuantities + 1,
        }),
        false,
        "Total Quantity Increases"
      );
    } else if (operator === "dec" && product.quantity > 1) {
      product.quantity = Math.max(1, product.quantity - 1);
      set(
        (state) => ({ totalPrice: state.totalPrice - product.exactPrice }),
        false,
        "Total Price Decreases"
      );
      set(
        (state) => ({
          totalQuantities: state.totalQuantities - 1,
        }),
        false,
        "Total Quantity Decreases"
      );
    }

    console.log("The cart present stage ", get().cart);
    // set((state) => ({ cart: [...state.cart, { ...product }] }));
  },
  addToCart: (product, price, quantity, size) => {
    const productExist = get().cart.find((item) => item._id === product._id);

    set(
      (state) => ({ totalQuantities: state.totalQuantities + quantity }),
      false,
      "Increasing the total Quantites of the cart"
    );
    set(
      (state) => ({
        totalPrice: state.totalPrice + price * quantity,
      }),
      false,
      "Increasing the total Price of the cart"
    );
    const productSize = get().cart.find((item) => item.size === size);

    if (productExist && productSize) {
      // This will return an array of cart list with bring update the quantity of the
      // specific size product
      const updatedProduct = get().cart.map((item) => {
        if (item._id === product._id && item.size === size)
          return { ...item, quantity: item.quantity + quantity };
        else return item;
      });

      // Changed the whole cart item i.e changed the specific product info
      set(
        (state) => ({ cart: [...updatedProduct] }),
        false,
        "Updated the Cart"
      );

      // This else if will work when the product is new in the cart
      // or when old product but new size
    } else if (!productExist || !productSize) {
      // First time this product entering the cart
      // It means that there are other different products also
      product.quantity = quantity;
      product.size = size;
      product.exactPrice = price;
      set(
        (state) => ({ cart: [...state.cart, { ...product }] }),
        false,
        "Unique Product Entered the Cart"
      );
    }
    set((state) => ({ qty: 0 }));
  },
  incQty: () =>
    set((state) => ({ qty: state.qty + 1 }), false, "Increase the quantity"),
  decQty: () =>
    set(
      (state) => ({ qty: Math.max(0, state.qty - 1) }),
      false,
      "Decrease the quantity"
    ),
});

export const useStore = create(persist(devtools(store), { name: "store" }));
