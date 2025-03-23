import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Main from "./Layout/Main";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
import ForgotPassword from "./pages/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "sign-up",
        element: <SignUpPage></SignUpPage>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
    ],
  },
]);

export default router;
