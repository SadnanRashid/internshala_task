import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import "./App.css";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import User from "./components/userPage/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/register",
      element: <Register></Register>,
    },
    {
      path: "/user-page",
      element: <User></User>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
