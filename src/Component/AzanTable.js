import React, { useState } from "react";
import "./CssTable.css";
import Modal from "react-modal";

const AzanTable = () => {
	//state
	const [isVisibleModal, setIsVisibleModal] = useState(false);
	const [namazName, setNamazName] = useState();
	const [table, setTable] = useState([
		{
			namazName: "Fajr",
			azanTime: "",
			jamaatTime: "",
		},
		{
			namazName: "Zuhr",
			azanTime: "",
			jamaatTime: "",
		},
		{
			namazName: "Asr",
			azanTime: "",
			jamaatTime: "",
		},
		{
			namazName: "Maghrib",
			azanTime: "",
			jamaatTime: "",
		},
		{
			namazName: "Isha",
			azanTime: "",
			jamaatTime: "",
		},
	]);

	//function to use toggle the modal
	const toggleModal=()=> setIsVisibleModal(!isVisibleModal);

	//function use to change namaz time
	const updateTable = (index, ChangeTime) => (e) => {
		let newTable = table.map((item, i) => {
			if (index === i) {
				return { ...item, [ChangeTime]: e.target.value };
			} else {
				return item;
			}
		});
		setTable(newTable);
	};
	//function to add new item with condition
	const addItem = () => {
		if (
			table.some((e) => e.namazName.toLowerCase() === namazName.toLowerCase())
		) {
			alert("Already Available");
		} else {
			setTable([
				...table,
				{ namazName: namazName, azanTime: "", jamaatTime: "" },
			]);
			toggleModal();
		}
	};

	const updateDatabase = () => {
		console.log("Update Databse function ");
	}

	return (
		<div>
			<div className="App">
				<table>
					<th>Namaz Name</th>
					<th>Azan Time </th>
					<th>Jama'at Time</th>

					{table.map((e, index) => {
						return (
							<tr>
								<td>{e.namazName.toUpperCase()}</td>
								<td>
									<input
										defaultValue={e.azanTime}
										onChange={updateTable(index, "azanTime")}
									/>
								</td>
								<td>
									<input
										defaultValue={e.jamaatTime}
										onChange={updateTable(index, "jamaatTime")}
									/>
								</td>
							</tr>
						);
					})}
					<div>
						<Modal
							isOpen={isVisibleModal}
							onRequestClose={toggleModal}
							style={{
								content: {
									top: "50%",
									left: "50%",
									right: "auto",
									bottom: "auto",
									marginRight: "-50%",
									transform: "translate(-50%, -50%)",
								},
							}}
						>
							<div>
								<input onChange={(e) => setNamazName(e.target.value)} />
								<button onClick={addItem}>Submit</button>
								<button onClick={toggleModal}>close</button>
							</div>
						</Modal>
					</div>
				</table>
				<div className="BtnC">
					<div className="BtnC1">
						<button
							className="Btn"
							onClick={updateDatabase}
						>

							Save
						</button>
					</div>
					<div className="BtnC1">
						<button className="Btn" onClick={toggleModal}>
							+
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AzanTable;
