import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "./theme-context/theme.context";
import theme from "./features/theme/input";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <ThemeProvider>
          <Provider store={store}>
            <App />
          </Provider>
        </ThemeProvider>
      </ChakraProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
