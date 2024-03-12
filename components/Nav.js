import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {
	render()
	{
		return(
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
		);
	}
}


export default Nav;