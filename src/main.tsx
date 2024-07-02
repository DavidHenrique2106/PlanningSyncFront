import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import Faturamento from "./components/routes/Faturamento/Faturamento.tsx";
import Despesas from "./components/routes/Despesas/Despesas.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "faturamento", element: <Faturamento /> },
  { path: "despesas", element: <Despesas /> }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
