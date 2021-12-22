import './App.css';
// import RatesTable from './components/selfmade/RatesTable';
import { default as RatesTable } from './components/mui/RatesTable';
import NewRateButton from './components/mui/NewRateButton';
import React from 'react';
import backendService from './services/backendService';

function App() {
  const [data, setData] = React.useState([]);
  const [hasData, setHasData] = React.useState(false);

  const handleReload = () => {
    setHasData(false)
  }

  React.useEffect(async () => {
    if (hasData) {
      return
    }

    const dataFromBack = await backendService.getRates()
    setData(dataFromBack)
    setHasData(true)
  }, [hasData])

  return (
    <div className="App">
      <header className="App-header">
        <div className='root-square'>
          <NewRateButton handleReload={handleReload} />
          <RatesTable data={data}/>
        </div>
      </header> 
    </div>
  );
}

export default App;
