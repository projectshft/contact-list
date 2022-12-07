import Header from './components/Header'
import Main from './components/Main'
import './index.css';

const App = () => (
  <div className="App container">
    <div class="row">
      <div class="col">
      </div>
      <div class="col order-2">
        <Header />
      </div>
      <div class="col order-3">
      </div>
    </div>
  <div class="row">
    <div class="col-md-6 offset-md-3"><Main /></div>
  </div>
    
  </div>
);

export default App;