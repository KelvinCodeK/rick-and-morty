import logo from './logo.svg';
import './character.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Character(props) {
  // character fetch


    return (
        <main className="zoekPagina">
       <header>
        <h1>Rick and Morty X Mobiel.nl</h1>
      </header>
      <section className="zoekEpisode">
      <p>Find your favorite character</p>
      <div className="zoeken">
            <div style={{ width: 400 }}>
              <ReactSearchAutocomplete
                items={props.characters}
                onSearch={props.handleOnSearch}
                onHover={props.handleOnHover}
                onSelect={props.handleOnSelect}
                onFocus={props.handleOnFocus}
                autoFocus
                formatResult={props.formatResult}
                fuseOptions={{ keys: ["name", "episode"], threshold: 0.1}}
                resultStringKeyName="name"
              />
            </div>

          {/* delete input in veld? */}

          <button onClick={props.charFetch} className="homeIntro">
          search
          </button>
          </div>
          </section>

          <section className="resultaat">
          {props.character[0] ? 
     (
      <div className="resultaatRij">
      <div>
      <h2>{props.character[0].name}</h2>   
      <ul>
      <li>gender: {props.character[0].gender}</li>
      <li>species: {props.character[0].species}</li>
      <li>origin: {props.character[0].origin}</li>
      </ul>
      </div>
      <img src={props.character[0].image} />

      </div>
    )
  


  
  : null}
</section>

        </main>
      );
      }

export default Character;