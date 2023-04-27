import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import FileForm from './pages/fileform/FileForm';
import DonateHome from './pages/donateform/DonateHome';
import ScheduleCHome from './pages/scheduleC/ScheduleCHome';
import ScheduleDHome from './pages/scheduleD/ScheduleDHome';
import ScheduleEHome from './pages/scheduleE/ScheduleEHome';
// import Header from './components/Header';
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/file" element={<FileForm />} />
					<Route path="/donate" element={<DonateHome />} />
					<Route path="/schedulec" element={<ScheduleCHome />} />
					<Route path="/scheduled" element={<ScheduleDHome />} />
					<Route path="/schedulee" element={<ScheduleEHome />} />
					{/* <Route exact path="/signup" element={<Signup />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
