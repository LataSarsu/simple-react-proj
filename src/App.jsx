import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Box from "./components/Box";
import Samebox from "./components/Samebox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Box />
      <Samebox />
    </>
  );
}

export default App;
