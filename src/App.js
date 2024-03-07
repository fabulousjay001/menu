import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

// const allcategories = items.map((data) => data.category);
// console.log(allcategories);
//this prints out all the categories in the array. It has some repeating twice or more e.g breakfast reapeating twice according to whats in the data file

// to avoid that, then we use new Set to get unique values and avoid repetition

const allcategories = ["all", ...new Set(items.map((data) => data.category))];
console.log(allcategories);

//...new Set(items.map((data) => data.category)) was added inside an array because it's an array and not object

function App() {
	const [menuList, setMenuList] = useState(items);
	const [categories, setCategories] = useState(allcategories);

	const filterItems = (category) => {
		if (category === "all") {
			setMenuList(items);
		} else {
			const newItems = items.filter((item) => item.category === category);
			setMenuList(newItems);
		}
	};
	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>Our menu</h2>
					<div className="underline"></div>
				</div>
				<Categories category={categories} filterData={filterItems} />
				<Menu item={menuList} />
			</section>
		</main>
	);
}

export default App;
