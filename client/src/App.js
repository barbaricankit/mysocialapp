import React from "react";
import "./App.css";
import Navigation from "./features/navigation/Navigation";
import { Route } from "react-router-dom";
import HomePage from "./features/home/HomePage";

import { useTheme } from "./localisation-context/localisation.context";
import { Slide } from "@chakra-ui/transition";

function App() {
  const { isOpen, windowWidth } = useTheme();

  return (
    <div className='App'>
      <header className='App-header'>
        {windowWidth && (
          <Slide direction='left' in={isOpen} style={{ zIndex: 10 }}>
            <Navigation />
          </Slide>
        )}

        {!windowWidth && <Navigation />}
      </header>

      <Route path='/' component={HomePage} />
    </div>
  );
}

export default App;
