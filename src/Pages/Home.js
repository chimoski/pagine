import React, { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import { useFetch } from "../utility/useFetch";

const Home = () => {
	// const [data, setData] = useState([]);
	// const fetchData = async () => {
	// 	const response = await fetch(
	// 		"https://randomuser.me/api/?page=3&results=10&seed=abc"
	// 	);
	// 	const data = await response.json();
	// 	setData(data);
	// };
	// useEffect(() => {
	// 	fetchData();
	// }, []);
	// console.log(data.results);
	return (
		<div>
			<h1 className='text-bold text-3xl text-center'>Header</h1>
			<nav className='flex gap-5 text-red-500'>
				<Link to='users'>Users</Link>
				<Link to='about'>About</Link>
				<Link to='/user'>User</Link>
			</nav>
			<main>
				<Outlet />
			</main>
			<ul className='flex mt-[700px]'>
				<li>footer 1</li>
				<li>footer 1</li>
				<li>footer 1</li>
			</ul>
		</div>
	);
};

export default Home;
