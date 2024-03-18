import React from "react"; 
import galleriImage from '../galleri.png';
import gammal from '../gammal.png';
import kvinna from '../kvinna.png';


class Artmajor extends React.Component{
	render()
	{
		return(
			<main className="content-section">
				<div className="page-title"> 
					<h2>Art Major at Yale School of Art</h2>
										
						<div className="page-content">
							<p>At the heart of Yale School of Art lies our prestigious Art Major program—a crucible of creativity that shapes the next generation of artists and visionaries. Here, the fusion of tradition and innovation creates an educational experience that is as diverse and dynamic as art itself.</p>
							<p>Our program is not merely a course of study; it's an odyssey of self-discovery and expression. You'll engage with a curriculum that challenges you to not only master the fundamentals but also to redefine them. Each studio, each lecture, each critique is designed to push the boundaries of what you believe art can be.</p>
							<p>Collaboration is the soul of our program, where the convergence of diverse perspectives ignites innovation. As a YSOA Art Major, you'll leave not just with a degree, but with a portfolio that is a window into your artistic soul, a narrative of your growth, and a launchpad for a career that will leave an indelible mark on the world of art.</p>
						</div>					
					<div className="image-wrapper">

						<div className="image1-container">
							<img src={galleriImage} alt="First Image Description"/>
						</div>
						<div className="image2-container">
							<img src={gammal} alt="Second Image Description"/>
						</div>
						<div className="image3-container">
							<img src={kvinna} alt="Third Image Description"/>
						</div>
					</div>	
				</div>						
			</main>			
		);	
	}
}

export default Artmajor; 



