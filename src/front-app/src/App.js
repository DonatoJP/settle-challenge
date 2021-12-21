import './App.css';
// import RatesTable from './components/selfmade/RatesTable';
import { default as RatesTable } from './components/mui/RatesTable';
import NewRateButton from './components/mui/NewRateButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='root-square'>
          <NewRateButton />
          <RatesTable />
        </div>
      </header> 
    </div>
  );
}

export default App;
