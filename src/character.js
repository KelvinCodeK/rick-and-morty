import logo from './logo.svg';
import './home.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Character(props) {
  // character fetch
  const charFetch = () => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${props.inputString}`)
  .then(response => {
    if (!response.ok) {
      throw Error('De server ligt er momenteel uit');}
      ;
      return response.json();
  })
  .then(data => {
    const results = data.results;
    let items = [];

      items.push({id: results[0].id, name: results[0].name, species: results[0].species, gender: results[0].gender})
    
    console.log(items)})
    .catch((err) => console.log(err))
  }

    return (
        <div className="App">
          <header className="App-header">
            <div style={{ width: 400 }}>
              <ReactSearchAutocomplete
                items={props.character}
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
          </header>
          <button onClick={charFetch} className="homeIntro">
            home
          </button>
        </div>
      );
      }

export default Character;