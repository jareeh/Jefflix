import './App.css';
import Row from './Components/Row'
import requests from './requests'

function App() {
  return (
    <div className="App">
      <h1>NETFLIX</h1>
      <Row title='Netflix Originals' fetchUrl={requests.fetchTopRated} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
