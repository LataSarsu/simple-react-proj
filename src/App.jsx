import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Box from "./components/Box";

function App({winVal}) {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Roll less than 4 {winVal}</h1>
        <Box />
      </div>
    </>
  );
}

export default App;
