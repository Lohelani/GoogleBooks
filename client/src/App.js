import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import NoMatch from "./pages/NoMatch";
import Jumbotron from "./components/Jumbotron/index";
//import Search from "./pages/Search";
import Nav from "./components/Nav/index";

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Jumbotron/>
        <Switch>
          {/* <Route exact path={["/", "/search"]}>
            <Search />
          </Route> */}
          
          {/* <Route>
            <NoMatch />
          </Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
