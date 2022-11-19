import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<ContactList/>}/>
					<Route path="/form" element={<ContactForm/>}/>
				</Routes>
			</Router>
    </div>
  );
}

export default App;