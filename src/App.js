import logo from "./logo.svg";
import "./App.css";
import Palindrome from "./Palindrome";
import TwoNumber from "./TwoNumber";
import Intro from "./Intro";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Intro />
        <Palindrome />
        <TwoNumber />
        <ValidSub />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
