import logo from './logo.svg';
import './home.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Character(props) {
  // character fetch


    return (
        <div className="App">
       <header className="App-header">
        <h1>Rick and Morty X Mobiel.nl</h1>
      </header>
      <p>Zoek jouw favoriete aflevering op basis van naam of afleveringcode</p>
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
            home
          </button>
        </div>
      );
      }

export default Character;