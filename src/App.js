import { useState } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
} from 'react-router-dom';
import ContactList from './components/ContactList';
import ContactForm from './components/ContactForm';

function App() { 
	const [name, setName] = useState(null);
	const [phone, setPhone] = useState(null);
	const [email, setEmail] = useState(null);

  return (
    <div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<ContactList
						name={name}
						phone={phone}
						email={email}
					/>}/>
					<Route path="/form" element={<ContactForm
						name={name}
						setName={setName}
						email={email}
						setEmail={setEmail}
						phone={phone}
						setPhone={setPhone}
					/>}/>
				</Routes>
			</Router>
    </div>
  );
}

export default App;