"use client"

import {useState} from "react";
import {useRouter} from "next/navigation";

export const DigiDelete = ({item}) => {
	const router = useRouter();
	
	
	
	async function handleDeleteData() {
		await fetch("https://v1.appbackend.io/v1/rows/TAcbNTCOEcAr", {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify([item._id]),
		});
		
		router.refresh();
		
	}	
	
	return (
		<div className="flex flex-col justify-center text-center items-center p-2 hover:cursor-pointer ">
			<div className="hover:border-2 border-black p-2" >
				<img src={item.image} className="w-20 h-20 mx-auto" />
				<h3 className="font-bold">{item.name}</h3>
				<p className="text-sm">{item.tingkat}</p>
				
			</div>
				<button onClick={handleDeleteData} className="bg-red-500 py-1 px-3 text-white w-fit text-sm">Delete</button>
		</div>	
	);
};
