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

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';


import './App.css';

function App() {
	let location = useLocation();

	const isHousingOrLoginRoute = location.pathname === "/housing" || location.pathname === "/login";
	const Content = isHousingOrLoginRoute ? React.Fragment : MainContainer;

	return (
		<Content>
			<Header currentPath={location.pathname} />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route path="/artmajor" element={<Artmajor />} />
				<Route path="/fact" element={<Fact />} />
				<Route path="/visiting" element={<Visiting />} />
				<Route path="/housing" element={<Housing />} />
				<Route path="/login" element={<Login />} />
		  	</Routes>
			{!isHousingOrLoginRoute && <Footer />}
			
		</Content>
	);
}

function AppWrapper() {
	return (
		<Router>
			<App />
	  	</Router>
	);
}
      
export default AppWrapper;



