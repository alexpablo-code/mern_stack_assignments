import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
        firstName= {'Thor'}
        lastName = {'Odinson'}
        age = {1500}
        hairColor = {'Blonde'}
      />
      <PersonCard
        firstName= {'Loki'}
        lastName = {'Odinson'}
        age = {1054}
        hairColor = {'Black'}
      />
      <PersonCard
        firstName= {'Wanda'}
        lastName = {'Maximoff'}
        age = {29}
        hairColor = {'Brown'}
      />
      <PersonCard
        firstName= {'Clint'}
        lastName = {'Barton'}
        age = {53}
        hairColor = {'Dark Brown'}
      />
      <button onClick={ ()=> alert("This button has been clicked!") }>Click Me</button>
    </div>
  );
}

export default App;
