import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./hoc/AuthProvider";
import router from "./router";
import "./sass/main.scss";
import { StrictMode } from "react";

function App() {
  return (
    <StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </StrictMode>
  );
}

export default App;
