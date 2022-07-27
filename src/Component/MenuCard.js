import React from "react";

const MenuCard = ({ menuData }) => {
	return (
		<div className="car-view">
			{menuData.map((e, index) => {
				return (
					<div className="card-body" key={index}>
						<div className="card-id">{e.catagert}</div>
						<div className="card-img">
							<img className="img-set" src={e.images} alt="images" />
						</div>
						<div className="card-name">{e.name}</div>
					</div>
				);
			})}
		</div>
	);
};

export default MenuCard;
