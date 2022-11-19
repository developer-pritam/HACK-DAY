import "./App.css";

import Home from "./pages/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Transfer from "./pages/Transfer";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/transfer">
            <Transfer />
          </Route>
          <Route default>404 Page Not Found</Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
