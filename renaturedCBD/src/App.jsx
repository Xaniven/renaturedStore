import "./App.scss";
import Navbar from "./components/Navbar";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Link,
} from "react-router-dom";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";
import Createuser from "./pages/Createuser";
import Storepage from "./pages/Storepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          path: "",
          element: <Homepage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "about",
          element: <Aboutpage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "store",
          element: <Storepage />,
          errorElement: <ErrorPage />,
        },
        {
          path: "newuser",
          element: <Createuser />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
