import "./App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <Aboutpage />,
  },
]);
function App() {
  return (
    <div className='App h-auto'>
      <Navbar />
      <RouterProvider router={router} />
      {/* <Aboutpage /> */}
      {/* <Homepage /> */}
      <Footer />
    </div>
  );
}

export default App;
