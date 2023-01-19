import Movies from './components/Movies';
import './App.css';

function App() {
  return (
    <div className="App">
      <Movies
        movieTitle = {'Avatar'}
        movieGenre = {'Action'}
        movieRelease = {2022}
        movieSales = {5000000}
      />
    </div>
  );
}

export default App;
