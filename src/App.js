// import logo from './logo.svg';
import './App.css';
import Navbar from './compoent/navbar';
import TextForm from './compoent/TextForm';
import About from './compoent/about';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";





function App() {
  return (
    <Router>
      <Navbar title="TextUtility" />
      {/* <Route path="/about">
        <About />
      </Route> */}
      <Switch>
        <Route path='/About'>
          <About />
        </Route>
        <Route path="/">
          < TextForm />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
