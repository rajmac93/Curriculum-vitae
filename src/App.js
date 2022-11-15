import './App.css';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Home from './components/Home';
import Skills from './components/Skills';
import Experiences from './components/Experiences';
import Educations from './components/Educations';
import Portfolios from './components/Portfolios';
import {
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/skills' element={<Skills />} />
				<Route
					path='/educations'
					element={<Educations />}
				/>
				<Route
					path='/experiences'
					element={<Experiences />}
				/>
				<Route
					path='/portfolios'
					element={<Portfolios />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
