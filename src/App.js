import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import App_1 from './App_1'
import App_2 from './App_2';
import App_3 from './App_3';
import App_4 from './App_4';
const App = () => {
	return (
		<>
		<div>
		  <Link to="/1">App 1</Link>
		  <Link to="/2">App 2</Link>
		  <Link to="/3">App 3</Link>
		  <Link to="/4">App 4</Link>
		</div>
		<Routes>
		  <Route path="/1" element={<App_1 />} />
		  <Route path="/2" element={<App_2 />} />
		  <Route path="/3" element={<App_3 />} />
		  <Route path="/4" element={<App_4 />} />
		</Routes>
	  </>
	);
};

export default App;