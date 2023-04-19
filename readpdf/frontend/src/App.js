import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import FileForm from './pages/fileform/FileForm';
import DonateHome from './pages/donateform/DonateHome';
// import Header from './components/Header';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/file" element={<FileForm />} />
					<Route path="/donate" element={<DonateHome />} />
					{/* <Route exact path="/signup" element={<Signup />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
