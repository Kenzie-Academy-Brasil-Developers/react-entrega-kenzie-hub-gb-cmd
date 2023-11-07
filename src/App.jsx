import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles/reset.scss";
import "./styles/globalStyles.scss";
import "./styles/typography.scss";
import { MainRoutes } from "./routes/MainRoutes";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { TechProvider } from "./providers/TechContext";

function App() {

  return (
    <>
      <TechProvider>
        <MainRoutes />
      </TechProvider>
      <ToastContainer autoClose={3000} theme="dark" />
    </>
  )
};

export default App
