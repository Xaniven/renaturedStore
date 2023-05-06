import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import ErrorPage from "./pages/Errorpage";
import Homepage from "./pages/Homepage";

const Aboutpage = lazy(() => import("./pages/Aboutpage"));
const Storepage = lazy(() => import("./pages/Storepage"));
const NewUser = lazy(() => import("./components/NewUser"));
const Account = lazy(() => import("./pages/Account"));
const Spinner = lazy(() => import("./components/Spinner"));

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
          element: <Storepage />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: "tea",
              element: <Storepage itemType={"tea"} />,
              errorElement: <ErrorPage />,
            },
            {
              path: "coffee",
              element: <Storepage itemType={"coffee"} />,
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
  return (
    <Suspense fallback={<Spinner />}>
      {" "}
      <RouterProvider router={router} fallbackElement={<Spinner />} />{" "}
    </Suspense>
  );
}

export default App;
