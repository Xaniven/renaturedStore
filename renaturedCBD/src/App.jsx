import { useState } from "react";
import "./App.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Aboutpage from "./pages/Aboutpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App h-auto'>
      <Navbar />
      <Aboutpage />
      <Footer />
    </div>
  );
}

export default App;
