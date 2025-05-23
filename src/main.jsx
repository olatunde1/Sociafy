import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import QueryProviders from "./contexts/query-provider.jsx";
import { Toaster } from "./components/ui/sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryProviders>
      <Toaster position="top-center" />
      <App />
    </QueryProviders>
  </StrictMode>
);
