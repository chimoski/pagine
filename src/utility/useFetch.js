const { useEffect, useState } = require("react");

export function useFetch(url) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(url);
			const data = await response.json();
			setData(data.results);
			setLoading(false);
		}
		fetchData();
	}, [url]);

	return { data, loading };
}
