import Dictionary from "./Dictionary"
import logo from "./images/books.png";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
     <img src={logo} className="App-logo img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="welcome" />
      </main>
      <footer className="App-footer">
        <small>Coded by Laura E</small>
      </footer>
    </div>
    </div>
  );
}

export default App;
