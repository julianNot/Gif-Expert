import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
	const [categories, setCategories] = useState([]);

	const onAddCategory = (newCategory) => {
		if (categories.includes(newCategory)) return;
		setCategories([newCategory, ...categories]);
	};

	const deleteCategory = ( category ) => {
		const result = categories.filter( cate => cate !== category )
		setCategories([...result])
	}

	return (
		<>
			<h1>GifExpertApp</h1>
			<AddCategory onNewCategory={onAddCategory} />
			{categories.map((category) => (
				<GifGrid key={category} category={category} onDeleteCategory={deleteCategory}/>
			))}
		</>
	);
};
