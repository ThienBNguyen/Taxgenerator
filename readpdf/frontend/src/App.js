import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
// import Header from './components/Header';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					{/* <Route exact path="/login" element={<Login />} />
					<Route exact path="/signup" element={<Signup />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
