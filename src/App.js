import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";

function App() {

  return (
    <BrowserRouter>
      <div>
        <ul>
          <li> <Link to="/" >Home</Link> </li>
          <li> <Link to="/users" >Users</Link> </li>
          <li> <Link to="/users/1" >User 1</Link> </li>
        </ul>
      </div>

      <Switch>      

        <Route path="/users/:id">
          <UserDetail/>
        </Route> 

        <Route path="/users">
          <Users/>
        </Route> 

        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="*">
          <div>
            Not Found
          </div>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
