import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";

import { MenuContext } from "./components/Context/MenuContext";

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <>
      <MenuContext.Provider value={{isMenuShown,setIsMenuShown}}>
        <Navbar />
      </MenuContext.Provider>
    </>
  );
}

export default App;
