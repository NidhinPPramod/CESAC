import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import { MenuContext } from "./components/Context/MenuContext";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);



  return (
    <>
      <MenuContext.Provider value={{isMenuShown,setIsMenuShown}}>
        <Navbar />
        <HeroSection/>
      </MenuContext.Provider>
    </>
  );
}

export default App;
