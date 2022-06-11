import React, { useEffect } from "react";
import Routes from "./router/Routes";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Routes />
    </>
  );
};

export default App;
