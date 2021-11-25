import logo from './logo.svg';
import './home.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Episode(props) {
    // episode fetch


return (
  <div className="App">
      <header className="App-header">
        <h1>Rick and Morty X Mobiel.nl</h1>
      </header>
      <p>Zoek jouw favoriete karakter</p>
      <div style={{ width: 400 }}>
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
            home
          </button>
          {props.episode[0] ?  <p>Hoi {props.episode[0].name}</p> : null }
          
  </div>
);
}

export default Episode;