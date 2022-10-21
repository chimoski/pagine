import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";

const Users = () => {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const fetchdata = async () => {
		setLoading(true);
		const fetchMeData = await fetch(
			"https://randomuser.me/api/?page=3&results=50&seed=abc"
		);
		const readableData = await fetchMeData.json();
		setData(readableData.results);
		setLoading(false);
	};
	useEffect(() => {
		fetchdata();
	}, []);
	console.log(data);
	return (
		<div>
			<p>users data</p>
		</div>
	);
};

export default Users;
