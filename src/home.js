import logo from './logo.svg';
import './home.css';
import {Link} from "react-router-dom";
import portal from './images/portal.png';
import rick from './images/rick.jpg';
import monster from './images/monster.jpg';
import { useEffect } from 'react';

function Home(props) {

  useEffect( () => {

    props.resetAll();
  }, []);
  
  
  return (
    <main className="home">
      <header className="homeHeader">
        <h1>Rick and Morty X Mobiel.nl</h1>
      </header>

      <section className="buttons">
      <Link to="/episodes">
          <button className="button">
            episodes
          </button>
          </Link>
          <Link to="/characters">
          <button className="button">
            characters
          </button>
          </Link>
      </section>
<section className="animations">
    <div className="portalRick">
      <img className="portal" src={portal}/>
      {/* <img className="monster" src={monster}/> */}
      <img className="rick" src={rick}/>
    </div>
</section>

    </main>
  );
}

export default Home;
