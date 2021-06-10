import './App.css';
import Movieform from './pages/Movieform';
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import MovieList from './pages/MovieList';
function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={Movieform}/>
        <Route exact path="/movies" component={MovieList}/>
      </Switch>
    </Router>



  );
}

export default App;
