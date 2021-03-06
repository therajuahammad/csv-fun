import Home from "./pages/home";
import Table from "./pages/table";
import Graph from "./pages/graph";
import store from "./redux/store";
import { Provider } from "react-redux";
import Navbar from "./components/navbar";
import { ThemeProvider, theme } from "./styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/graph">
                <Graph />
              </Route>
              <Route path="/table">
                <Table />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Router>
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
