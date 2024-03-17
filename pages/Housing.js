import React from "react";
import dorm from '../dorm.png';
import apartments from '../apartments.png';

class Housing extends React.Component {
	render() 
	{
		return(
			<div className="housing-page"> 
				<main className="content-section-housing">
					<h1 className="page-title-student">Student Housing</h1>

					<section className="housing-options">
						<article className="housing-item">
							<img src={dorm} alt="Dorms"/>
							<h3>Dormitories</h3>
							<p>Traditional dorm living provides a vibrant community experience.</p>
						</article>
						<article className="housing-item">
							<img src={apartments} alt="Apartments"/>
							<h3>Apartments</h3>
							<p>For those who need more space and privacy, we offer a range of apartments.</p>
						</article>
					</section>
					<section className="housing-apply">
						<article className="housing-item"> 
							<h2>How to Apply</h2>
							<p>Find out the process for securing your place in student housing.</p>
							<a href="housing.html" class="apply-button">Apply for Housing</a>
						</article>
					</section>
				</main>
			</div>
		); 
	}
}

export default Housing; 
