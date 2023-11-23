import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar";
import Home from "./scenes/home";
import { selectedPageIndex } from "./shared/types";
import Benefits from "./scenes/benefits";
/*import OurClasses from "./scenes/ourClasses";*/

function App() {
  // Hooks
  const [selectedPage, setSelectedPage] = useState<selectedPageIndex>(
    selectedPageIndex.Home,
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);

      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(selectedPageIndex.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      {/*<OurClasses setSelectedPage={setSelectedPage} />*/}
    </div>
  );
}

export default App;
