import "./App.scss";
import Footer from "./components/Footer";
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
          element: <Aboutpage />,
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
