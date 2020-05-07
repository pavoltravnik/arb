import React, {useReducer} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import Arbitrator from "./pages/Arbitrator";

export const MyContext = React.createContext(null);

export default function App() {
  const initialState = {a:0};
  const ADD = "ADD";
  const DELETE = "DELETE";

  function countReducer(state, action) {
    switch (action.type) {
      case ADD:
        return { ...state,  a: action.payload };
      case DELETE:
        return { ...state,  a: action.payload };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <Router>
        <div>
          <h2>Accounts</h2>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user/1">User</Link>
            </li>
            <li>
              <Link to="/arbitrator/1">Arbitrator</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/user/:id" children={<User />} />
            <Route path="/arbitrator/:id" children={<Arbitrator />} />
          </Switch>
        </div>
      </Router>
    </MyContext.Provider>
  );
}
