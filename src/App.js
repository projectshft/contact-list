import HomePage from './components/Home';
import Add from './components/Add';
import './App.css';
import { ContactProvider } from './components/Context';

function App() {
  return (
    <div className="App">
      <ContactProvider>
        <h1>Contact List</h1>
      <Add/>
      <HomePage/>
      </ContactProvider>
</div>
  );
}

export default App;
