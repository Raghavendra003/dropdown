import React from "react";
import "./App.css";
// import User from "./Components/User";
// import Admin from "./Components/Admin";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import CountryList from "./Components/CountryList";
import AddCountry from "./Components/AddCountry";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="user"> User</Link>
        <Link to="admin"> Admin</Link>
        <Switch>
          <Route path="/user">
            <CountryList />
          </Route>
          <Route path="/admin">
            <AddCountry />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
