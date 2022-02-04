import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Shop.css";
import image from "../../Assets/img/tops.jpg";

const Shop = () => {
	const [data, setData] = useState(null);
	const [searchTerm, setSearchTerm] = useState("");

	const fetchData = async () => {
		axios
			.get("http://localhost:3001/api/get_alldata")
			.then((res) => {
				setData(res.data);
			})
			.catch(() => {
				console.log("not recived");
			});
	};

	if (data === null) {
		fetchData();
	}

	return (
		<div className="shop">
			<h1 className="heading">Shop</h1>
			<section>
				<div className="shop__filter">
					<h1>Filters</h1>
					<label htmlFor="">Checkbox</label>
					<input type="checkbox" name="" id="" />
					<label htmlFor="">Checkbox</label>
					<input type="checkbox" name="" id="" />
					<label htmlFor="">Checkbox</label>
					<input type="checkbox" name="" id="" />

					<div className="shop__filter__price">
						<h3>Price</h3>
						<label htmlFor="">Min</label>
						<input type="number" />
						<label htmlFor="">Max</label>
						<input type="number" />
					</div>
				</div>
				<div>
					<div className="shop__search">
						<input
							type="text"
							value={searchTerm}
							onChange={(e) => {
								setSearchTerm(e.target.value);
							}}
							placeholder="Search Items..."
						/>
					</div>
					<div className="shop__items">
						{data
							? data.map((item) => (
									<div className="shop__items__item" key={item.id}>
										<img src={image} alt="" />
										<div className="">
											<p>{item.name}</p>
											<p>{item.price}</p>
										</div>
									</div>
							  ))
							: ""}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Shop;
