import './App.css';
import requests from './requests';
import Row from './Components/Row';
import Banner from './Components/Banner';
import Nav from './Components/Nav';

function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} isLargeRow />
			<Row title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Popular Movies" fetchUrl={requests.fetchPopular} />
			<Row title="Popular TV Shows" fetchUrl={requests.fetchPopularTV} />
			{/* <Row title='Latest Movies' fetchUrl={requests.fetchLatest} /> */}
		</div>
	);
}

export default App;
