import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./components/utils/queryClient.ts";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
