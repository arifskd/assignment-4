"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";

export const DigiProcess = ({name,image,tingkat}) => {
	const router = useRouter();
	
	
	async function handleCreateData() {
		await fetch("https://v1.appbackend.io/v1/rows/TAcbNTCOEcAr", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([{name,image,tingkat}]),
		});
		
		router.refresh();
		
	}	
	
	return ( 
		<div>
			
			<button onClick={handleCreateData} className="bg-blue-500 py-1 px-3 text-sm text-white w-fit">Add</button>
		</div>
	);
};
