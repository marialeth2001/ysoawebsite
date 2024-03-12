import React from "react";
import video from '../artvideo.mp4';

class Home extends React.Component {
	render() {
		return(
			<main className="content-section">
				<div className="content-wrapper"> 
					<div className="text-content">
						<div class="text-inner">
							<h2 className="light-title">YSOA: Where creativity finds its space and you find your place!</h2>
							<p>From the moment I stepped into the vibrant halls of YSOA, it wasn't just the air that was charged with creativity - it was as if every corner, every glance held a promise of discovery. Here, the fusion of diverse minds and raw talent creates an alchemy of inspiration.</p>
							<a href="labb.html" class="read-more">Read Story</a>
						</div>
					</div>
					
					<div className="video-container">
						<video autoplay muted loop class="background-video">
							<source src={video} type="video/mp4"/>

						</video>
					</div>
				</div>			
			</main>
		);
	}
}

export default Home; 