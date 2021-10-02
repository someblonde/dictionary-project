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
        Coded by <a href="https://github.com/someblonde" target="_blank" rel="noopener noreferrer">Laura E</a> and open-sourced at  
        <a href="https://github.com/someblonde/dictionary-project" target="_blank" rel="noopener noreferrer"> Github</a>
      </footer>
    </div>
    </div>
  );
}

export default App;
