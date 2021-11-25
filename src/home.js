import logo from './logo.svg';
import './home.css';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty X Mobiel.nl</h1>
      </header>
      <Link to="/episodes">
          <button className="homeButton">
            episodes
          </button>
          </Link>
          <Link to="/characters">
          <button className="homeButton">
            characters
          </button>
          </Link>
    </div>
  );
}

export default Home;
