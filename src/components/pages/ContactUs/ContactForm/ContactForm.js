import emailjs from "emailjs-com";
import React from "react";
import api_key from "../../../../secretAPI";

const ContactForm = () => {
	const onSubmit = (e) => {
		e.preventDefault();
		console.log(e.target);
		emailjs
			.sendForm(
				api_key.YOUR_SERVICE_ID,
				api_key.YOUR_TEMPLATE_ID,
				e.target,
				api_key.YOUR_USER_ID
			)
			.then(
				(result) => {
					if (result.status === 200) {
						alert("Thank you for your mail. We will contact you soon.");
						e.target.reset();
					}
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="col-lg-6 col-md-10 ms-auto me-auto">
			<div className="form_container">
				<h2 className="text-center mb-3">Get In Touch</h2>
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							name="name"
							type="text"
							className="form-control"
							placeholder="Name"
							required
						/>
					</div>
					<div className="form-group">
						<input
							name="email"
							type="email"
							className="form-control"
							placeholder="Email"
							required
						/>
					</div>
					<div className="form-group">
						<input
							name="subject"
							type="text"
							className="form-control"
							placeholder="Subject"
							required
						/>
					</div>
					<div className="form-group">
						<textarea
							name="message"
							className="form-control"
							rows="5"
							placeholder="Message"
							required
						/>
					</div>
					<button type="submit" className="w-100 btn form_submit">
						Submit
					</button>
				</form>
				<p className="mt-3">
					<i>
						Sending to{" "}
						<a
							className="text-green"
							rel="noopener noreferrer"
							target="_blank"
							href="mailto:mahbubhasan89.diu@gmail.com"
						>
							mahbubhasan89.diu@gmail.com
						</a>
					</i>
				</p>
			</div>
		</div>
	);
};

export default ContactForm;
