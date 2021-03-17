import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const PricingCard = ({plan}) => {
	return (
		<div className="pt-3 pb-3">
			<div
				style={{
					background: `linear-gradient(0deg,rgba(12, 8, 22, 0.575),rgba(12, 8, 22, 0.602)), url(${plan.bg_image})`,
					backgroundSize: "cover",
				}}
				className="pricing_card text-white"
			>
				<div className="card-body">
					<h6 className="price_title">billed monthly</h6>
					<h2 className="plane_name">{plan.name}</h2>
					<h1 className="plane_price">${plan.price}</h1>
					<div id="pricing_ul_list">
						<ul>
							<li>
								<span>
									<FontAwesomeIcon icon={faCheck} />
								</span>
								Mobile-Optimized
							</li>
							<li>
								<span>
									<FontAwesomeIcon icon={faCheck} />
								</span>
								Best Hosting
							</li>
							<li>
								<span>
									<FontAwesomeIcon icon={faCheck} />
								</span>
								Free Custom
							</li>
							<li>
								<span>
									<FontAwesomeIcon icon={faCheck} />
								</span>
								Outstanding
							</li>
							<li>
								<span>
									<FontAwesomeIcon icon={faCheck} />
								</span>
								Happy Customer
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-3 mb-2">
					<Link className="purchase_btn" to="/#">
						<button>Purchase</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PricingCard;
