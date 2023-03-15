import { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar";
import Aboutpage from "./pages/Aboutpage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App '>
      <Navbar />
      <Aboutpage />
    </div>
  );
}

export default App;
