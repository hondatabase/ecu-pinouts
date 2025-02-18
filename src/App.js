import './App.css';
import EcuProtocolCards from './EcuProtocol/EcuProtocols';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://www.hondatabase.com/base-styles.css" />
      <header>
          <h1>Hondatabase</h1>
      </header>
      <main>
        <div>
          <h2>Honda ECU Pinout Database</h2>
          <p>Find detailed pinout information for various Honda ECU protocols</p>
        </div>
        <EcuProtocolCards/>
      </main>
      <footer className="main-footer">
        <p>© {new Date().getFullYear()} <a href="https://www.hondatabase.com">Hondatabase</a> - Community-Driven Honda Knowledgebase</p>
      </footer>
    </div>
  );
}

export default App;
