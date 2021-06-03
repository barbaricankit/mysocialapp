import React from "react";
import "./App.css";

import Navigation from "./features/navigation/Navigation";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";
import HomePage from "./features/home/HomePage";
import { useMediaQuery } from "@chakra-ui/media-query";

function App() {
  const showNavigation = useSelector(
    (state) => state.navigation.showNavigation
  );
  const [windowWidth] = useMediaQuery("(max-width:500px)");
  return (
    <div className='App'>
      <header className='App-header'>
        {showNavigation && <Navigation windowWidth={windowWidth} />}
        {!windowWidth && <Navigation windowWidth={windowWidth} />}
      </header>

      <Route path='/' component={HomePage} />
    </div>
  );
}

export default App;
