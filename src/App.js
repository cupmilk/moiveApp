import CoinTracker from "./CoinTracker";
import Todolist from "./Todolist";
import MovieApp from "./components/MovieApp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    // <div>
    //   {/* <Todolist /> */}
    //   {/* <CoinTracker /> */}

    // </div>
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
