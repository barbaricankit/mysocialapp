import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./localisation-context/localisation.context";
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <ThemeProvider>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
