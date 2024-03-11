import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Context from "./context/Context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <Context>
      <BrowserRouter>
        <ChakraProvider>
          <App/>
        </ChakraProvider>
      </BrowserRouter>
    </Context>
  // </React.StrictMode>
);
