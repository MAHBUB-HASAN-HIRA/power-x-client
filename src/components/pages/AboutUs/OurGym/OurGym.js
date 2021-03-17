import React from "react";
import gymImage from "../../../../resource/FakeData/gymImage.json";

const OurGym = () => {
	return (
		<section className="mt-5 mb-5">
			<div className="container">
				<div>
					<h1 className="trainer_text">
						we have <span className="about_yellow">best resource</span> for you
					</h1>
					<h2 className="tryout_text">Tryout us</h2>
					<div className="mt-3">
						<div className="row">
							{gymImage.map((image) => (
								<div className="col-lg-4 col-md-6 col-sm-12" key={image.id}>
									<div className="mb-3 p-2" key={image.id}>
										<img className="img-fluid" src={image.image_link} alt="" />
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OurGym;
