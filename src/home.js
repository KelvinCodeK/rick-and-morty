import logo from './logo.svg';
import './home.css';
import {Link} from "react-router-dom";
import portal from './images/portal.png';
import rick from './images/rick.jpg';

function Home() {
  return (
    <main className="home">
      <header>
        <h1>Rick and Morty X Mobiel.nl</h1>
      </header>
      <section className="buttons">
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
      </section>
<section className="animations">
    <div className="portalRick">
      <img className="portal" src={portal}/>
      <img className="rick" src={rick}/>
    </div>
</section>
    </main>
  );
}

export default Home;
