import React from 'react'; 

import Home from "./pages/Home";
import Fact from "./pages/Fact";
import Artmajor from "./pages/Artmajor";
import Housing from "./pages/Housing"; 
import Visiting from "./pages/Visiting"; 
import Login from "./pages/Login"; 

import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContainer from './components/MainContainer';


import { BrowserRouter as Router, Routes, Route} from
'react-router-dom';

import './App.css';

function App() {
	return (			
		<Router>						
			<MainContainer> 
				<Header />													
					<Routes>

						<Route exact path="/" element={<Home />} />
						<Route path="/artmajor" element={<Artmajor />} />
						<Route path="/fact" element={<Fact />} />
						<Route path="/visiting" element={<Visiting />} />
						<Route path="/housing" element={<Housing />} />
						<Route path="/login" element={<Login />} />
								
					</Routes>				
				<Footer />					
			</MainContainer>											
		</Router>			
	);
}

export default App;



