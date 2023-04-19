import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import ErrorPage from "./pages/Errorpage";
import Storepage from "./pages/Storepage";
import NewUser from "./components/NewUser";
import Account from "./pages/Account";

function App() {
  //Router
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
          element: <Storepage tOrCoffee={"Coffee"} />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "tea",
              element: <Storepage />,
              errorElement: <ErrorPage />,
            },
            {
              path: "coffee",
              element: <Storepage />,
              errorElement: <ErrorPage />,
            },
          ],
        },

        {
          path: "newuser",
          element: <NewUser />,
          errorElement: <ErrorPage />,
        },
        {
          path: "account",
          element: <Account />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
