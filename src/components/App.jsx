import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "../../public/vite.svg";
import Header from "./Header";
import Main from "./Main";
import Talent from "./Talent";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Talent selectedTalent="fauna" />
    </>
  );
}

export default App;
