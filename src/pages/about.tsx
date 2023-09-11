import Link from "next/link";
import { useRouter } from "next/router";

import React from "react";

const about = () => {
	const router = useRouter();
	return (
		<div className="">
			<button onClick={() => router.push("/auth")}>Go to Auth Button</button>
		</div>
	);
};

export default about;
