import React from "react";

const Categories = ({ filterData, category }) => {
	return (
		<div className="btn-container">
			{/* <button
				onClick={() => {
					filterData("breakfast");
				}}
				className="filter-btn">
				breakfast
			</button> */}
			{category.map((categories, index) => {
				return (
					<button
						onClick={() => filterData(categories)}
						type="button"
						className="filter-btn"
						key={index}>
						{categories}
					</button>
				);
			})}{" "}
		</div>
	);
};

export default Categories;
