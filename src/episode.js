import logo from './logo.svg';
import './episode.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Episode(props) {
    // episode fetch


return (
  <main className="zoekPagina">
      <header>
        <h1>Rick and Morty X Mobiel.nl</h1>
      </header>
      <section className="zoekEpisode">
      <p>Find your favorite episode, based on its name or episode code</p>
      <div className="zoeken">
      <div style={{ width: 'calc(20px + 35vmin)' }}>
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
      <button onClick={props.epiFetch} className="homeIntro">
            search
          </button>
      </div>



          

      </section>
<section className="resultaat">
  {props.episode[0] ? 
     (
      <div>
      <h2>{props.episode[0].name}</h2>   
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