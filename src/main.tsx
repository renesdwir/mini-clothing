import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.scss";

import App from "./App.tsx";
import { UserProvider } from "./context/user.context";
import { CategoriesProvider } from "./context/categories.context.tsx";
import { CartProvider } from "./context/cart.context.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        {/* <CategoriesProvider> */}
        <CartProvider>
          <App />
        </CartProvider>
        {/* </CategoriesProvider> */}
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
