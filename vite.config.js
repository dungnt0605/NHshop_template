// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        pay: resolve(__dirname, "./src/pages/pay.html"),
        cart: resolve(__dirname, "./src/pages/cart.html"),
        home: resolve(__dirname, "./src/pages/home.html"),
        detailproduct: resolve(__dirname, "./src/pages/detailproduct.html"),
        products: resolve(__dirname, "./src/pages/products.html"),
        signin: resolve(__dirname, "./src/pages/signin.html"),
        signup: resolve(__dirname, "./src/pages/signup.html"),
      },
    },
  },
});
