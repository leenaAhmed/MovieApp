import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Movies from "./components/Movies/movieList/index";
import Navbar from "./components/NavBar/nav";
import MoviesDetails from "./components/Movies/movieDetails/index";
import FavoritdMovies from "./components/Movies/favouriteMove/index";
import { LanguageProvider } from "./context/index";
import Footer from "./components/footer/footer";
import About from "./components/about";
import { useState } from "react";

function App() {
  const [lang, setLang] = useState("en");

  return (
    <>
      <Router>
        <LanguageProvider value={{ lang, setLang }}>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/FavoriteMovies" exact component={FavoritdMovies} />

            <Route path="/movies-details/:id" exact component={MoviesDetails} />
            <Route path="/about" exact component={About} />
          </Switch>
        </LanguageProvider>
      </Router>
      <Footer />
    </>
  );
}

export default App;
