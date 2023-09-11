import React, { useEffect, useState } from 'react'

const client = () => {
	const [data, setData] = useState(null)
	useEffect(() => {
		const fetchData = async () => {
				const result = await fetch(`https://swapi.dev/api/people/1`);
				const body = await result.json();
				console.log('body', body)
				setData(body);
		}
		fetchData();
}, []);

	return (
		<div>{JSON.stringify(data)}</div>
	)
}

export default client