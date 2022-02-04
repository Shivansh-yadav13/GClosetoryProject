import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Item.css"

function useQuery() {
	const { search } = useLocation();

	return React.useMemo(() => new URLSearchParams(search), [search]);
}

const Item = () => {
	let query = useQuery();
	const [data, setData] = useState(null);
	const navigate = useNavigate();
	console.log(query.get("id"));
	const fetchSingleData = () => {
		axios
			.get(`http://localhost:3001/api/get_singledata/${query.get("id")}`)
      .then((res) => {
        setData(res.data);
        console.log(data);
			})
			.catch(() => {
				console.log("no data recived");
			});
	};

	if (data === null) {
		fetchSingleData();
	}

	return (
		<>
			<div className="item__container">
				{data ? (
					<div className="item">
						<img
							className="mobile:mx-auto object-fit h-image w-image"
							src="https://source.unsplash.com/700x900/?cloths"
							alt=""
						/>
						<div className="mt-10">
							<p className="text-6xl laptop:text-5xl font-bold opacity-50">
								{/* {data.category} */}
							</p>
							<h1 className="text-5xl laptop:text-4xl font-extrabold ">
								{data.name}
							</h1>
							{/* <p className="opacity-70 text-xl">{data.desc}</p> */}
							{/* <p className="opacity-70 text-xl">Size: {data.size}</p> */}
							<p className="opacity-70 mt-5 text-4xl">₹{data.price}</p>
							<div className="mt-5 text-4xl">
								{/* <Cart id={data.id} /> */}
								<button id="fav-off" className="p-2 text-color-main hidden">
									{/* <BsFillSuitHeartFill /> */}
								</button>
								<button
									id="fav-on"
									className="p-2 text-color-shade hover:text-color-main"
								>
									{/* <BsFillSuitHeartFill /> */}
								</button>
							</div>
							<div className="">
								<button className="relative top-4 border px-5 py-2 bg-base text-color-shade duration-300 transition-all hover:bg-shade hover:text-color-base">
									Purchase
								</button>
							</div>
						</div>
					</div>
				) : (
					<h1 className="text-center">No Such Products</h1>
				)}
			</div>
		</>
	);
}

export default Item;
