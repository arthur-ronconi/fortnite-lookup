import React from "react";
import "./scss/App.scss";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { User } from "./pages/User";
import { Footer } from "./components/Footer";
import { SearchProvider } from "./context/SearchContext";
import { AccountProvider } from "./context/AccountContext";
import { UserInfoProvider } from "./context/UserInfoContext";

function App() {
  return (
    <Router>
      <div className="App">
        <SearchProvider>
          <AccountProvider>
            <UserInfoProvider>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/user" component={User} />
              </Switch>
            </UserInfoProvider>
          </AccountProvider>
        </SearchProvider>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
