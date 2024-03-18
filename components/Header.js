import React from "react"; 
import { NavLink, Link } from "react-router-dom";



class Header extends React.Component {
	render() {	
		if (this.props.currentPath === '/housing') {
			return null;
		}
		if (this.props.currentPath === '/login') {
			return null;
		}

		return (
			<header className="header-container">
				<div className="title-header">
					<Link to="/" className="home-link"> 
						<h1>Yale</h1>
						<h1>School</h1>
						<h1>of</h1>
						<h1>Art</h1>
					</Link>
				</div>
				<nav className="nav-bar">
					<div className="nav-item">
						<NavLink to="/fact"> About YSOA</NavLink>
						<div className="nav-content">
							<NavLink to="/fact">Fact</NavLink>
						</div>
					</div>
					
					<div className="nav-item">
						<NavLink to="./artmajor">Academics</NavLink>
						<div className="nav-content">
							<NavLink to="/artmajor">Art Major</NavLink>
						</div>
					</div>


					<div className="nav-item">
						<NavLink to="housing">Admissions</NavLink>
						<div className="nav-content">
							<NavLink to="housing">Housing</NavLink>
						</div>
					</div>
					<div className="nav-item">
						<NavLink to="visiting">Life At YSOA</NavLink>
						<div className="nav-content">
							<NavLink to="visiting">Visiting</NavLink>
						</div>
					</div>
				</nav>

				<div className="search-and-info">
					<div className="search-input">
						<i className="fas fa-search"></i>
						<input type="text" id="searchBox" placeholder="SEARCH"/>
						
					</div>
					<div className="info-for-input" >
						<input type="text" placeholder="INFO FOR..."/>
						<div className="dropdown-content">
							<a href="login">Students</a>
							<a href="login">Staff</a>
							<a href="login">Alumni</a>
						</div>
					</div> 
				</div>
				
			</header>
		
		);
	}
}

export default Header;
