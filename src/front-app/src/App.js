import './App.css';
// import RatesTable from './components/selfmade/RatesTable';
import { default as RatesTable } from './components/mui/RatesTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RatesTable />
      </header> 
    </div>
  );
}

export default App;
