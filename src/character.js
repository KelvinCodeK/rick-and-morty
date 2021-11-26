import logo from './logo.svg';
import './character.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Character(props) {

    return (
      <main className="zoekPagina">
        <header className="bannerCharacter">
            <h1>Rick and Morty X Mobiel.nl</h1>
        </header>
        <section className="zoekEpisode">
          <h2>Find your favorite character</h2>
          <div className="zoeken">
            <div style={{ width: 'calc(120px + 25vmin)' }}>
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
            <button onClick={props.charFetch} className="button">
            search
            </button>
          </div>
          </section>
          <section className="resultaat">
          {props.character[0] ? 
           (
            <div className="resultaatRij">
            <div>
            <h3>{props.character[0].name}</h3>   
            <ul>
              <li>gender: {props.character[0].gender}</li>
              <li>species: {props.character[0].species}</li>
              <li>origin: {props.character[0].origin}</li>
            </ul>
              <p>{`${props.character[0].name} starred in these episodes:`}</p>
              <ul className="charEpisodes">
              {props.character[0].episode.map((x) => {
                let link = x;
                let regexLink = x.replace('https://rickandmortyapi.com/api/', '');
                let finalLink = regexLink.replace('/', ' ');
                              return (
                                <li key={`${finalLink + 3}`}>
                                  { finalLink}
                                </li>)})}
             </ul>
              </div>
              <img className="charImage" src={props.character[0].image} />
              </div>
              )
            : null}
          </section>
    </main>
  );
}

export default Character;