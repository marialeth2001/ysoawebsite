import React from "react"; 


class Footer extends React.Component {
	render()
	{
		return(
			<footer className="footer-container">
				<div className="footer-links">
					<section>
						<h4>HELPFUL LINKS</h4>
						<ul>
							<li><a href="#">Contact Us</a></li>
						</ul>
					</section>
					<section>
						<h4>VISITING YSOA</h4>
						<ul>
							<li><a href="#">Campus Tours</a></li>
						</ul>
					</section>
						<div className="footer-social">
							<a href="https://instagram.com/yaleschoolofart" target="_blank">YSOA ON INSTAGRAM</a>
						</div>
					</div>

					<div className="footer-bottom">
						<p> © 2024 Yale School of Art • All Rights Reserved </p>
					</div>
					
			</footer>
		);
	}
}

export default Footer; 
