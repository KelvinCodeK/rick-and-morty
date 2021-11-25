import logo from './logo.svg';
import './episode.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Episode(props) {
    // episode fetch


return (
  <main className="zoekPagina">
      <header className="episodeHeader">
        <h1>Rick and Morty X Mobiel.nl</h1>
      </header>
      <section className="zoekEpisode">
      <h2>Find your favorite episode, based on its name or episode code</h2>
      <div className="zoeken">
      <div style={{ width: 'calc(70px + 25vmin)' }}>
        <ReactSearchAutocomplete
          items={props.episodes}
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
      <button onClick={props.epiFetch} className="button">
            search
          </button>
      </div>



          

      </section>
<section className="resultaatEpisodes">
  {props.episode[0] ? 
     (
      <div>
      <h3>{props.episode[0].name}</h3>   
      <p>Episode code: {props.episode[0].episode}</p>
      <p>This episode was first aired on: {props.episode[0].air_date}</p>
      </div>
    )
  


  
  : null}
</section>
          
  </main>
);
}

export default Episode;