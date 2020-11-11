import './App.css';
import requests from './requests'
import Row from './Components/Row'
// import Banner from './Components/Banner'

function App() {
  return (
    <div className="App">
      <h1>NETFLIX</h1>
      <h1>NavBar here</h1>
      <h1>Banner here</h1>
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} isLargeRow />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Popular' fetchUrl={requests.fetchPopular} />
      <Row title='Top Rated TV Shows' fetchUrl={requests.fetchTopRatedTV} />
    </div>
  );
}

export default App;
