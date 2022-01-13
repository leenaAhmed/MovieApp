import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies/movieList/index";
import Navbar from "./components/NavBar/nav";
import MoviesDetails from "./components/Movies/movieDetails/index";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/movies-details/:id" exact component={MoviesDetails} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
