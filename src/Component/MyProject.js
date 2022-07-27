import React, { useState } from "react";
import "./style.css";
import Menu from "./Api.js";
import MenuCard from "./MenuCard";

const uniqueList = [
	...new Set(
		Menu.map((e) => {
			return e.catagert;
		})
	),
	// "All",
	// "C"
];
console.log(uniqueList);

const MyProject = () => {
	const [menuData, setmenuData] = useState(Menu);
	const [isVisiable, setIsVisiable] = useState(false);

	//mere naam ka filter kar rha hu
	const filterItem = (catagert) => {
		// if (catagert === "All") {
		// 	setmenuData(Menu);
		// 	return;
		// }

		const upDateName = Menu.filter((e) => {
			return e.catagert === catagert;
		});

		setmenuData(upDateName);
		setIsVisiable(true);
	};

	return (
		<>
			<nav>
				<div className="nav-bar-btn">
					{uniqueList.map((e, index) => {
						return (
							<div className="btn-view" key={index}>
								<button className="btn-style" onClick={() => filterItem(e)}>
									<div className="btn">{e}</div>
								</button>
							</div>
						);
					})}
				</div>
			</nav>
			<div className="card-frnd-view">
				{isVisiable ? <MenuCard menuData={menuData} /> : null}
			</div>
		</>
	);
};

export default MyProject;
