import React from "react";
import "./scss/App.scss";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { SearchProvider } from "./context/SearchContext";
import { AccountProvider } from "./context/AccountContext";

function App() {
  return (
    <Router>
      <div className="App">
        <SearchProvider>
          <AccountProvider>
            <Route path="/" exact component={Home} />
            <Route path="/user" component={User} />
          </AccountProvider>
        </SearchProvider>
      </div>
    </Router>
  );
}

export default App;
