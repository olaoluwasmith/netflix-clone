import './App.css';
import Row from './row';
import requests from './requests';
import Banner from './banner';
import Nav from './nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchURL={requests.fetchNetflixOriginals} 
        isLargeRow 
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
