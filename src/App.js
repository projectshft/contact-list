import HomePage from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <HomePage/>
      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
</div>

    </div>
  );
}

export default App;
