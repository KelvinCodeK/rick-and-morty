import logo from './logo.svg';
import './home.css';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

function Episode(props) {
    

return (
  <div className="App">
    <header className="App-header">
      <div style={{ width: 400 }}>
        <ReactSearchAutocomplete
          items={props.episode}
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
  </div>
);
}

export default Episode;