import {DigiProcess} from "@/components/digiProcess";
import {DigiDelete} from "@/components/digiDelete";
import Image from 'next/image';


export default async function Home() {
	const resDigimon = await fetch("https://digimon-api.vercel.app/api/digimon", {
		cache: "force-cache"
	});
	const dataDigimon = await resDigimon.json();
	
	const resBackend = await fetch("https://v1.appbackend.io/v1/rows/TAcbNTCOEcAr", {
		cache: "no-store"
	});
	const { data } = await resBackend.json();
	
	
  return (
    <main className="min-h-screen ">
	<h1 className="text-center font-bold text-xl mt-5">Choose your Digimons!</h1>			
      <div className="flex justify-start gap-2 p-10 h-auto overflow-y-auto">
		{dataDigimon.map((digimon) => {
			return (
				<div key={digimon.name} className="flex flex-col justify-center items-center">
					<div className="flex flex-col text-center p-2 hover:cursor-pointer hover:bg-slate-500 hover:text-white" >
						<Image src={digimon.img} className="w-20 h-20 mx-auto" alt={digimon.name}/>
						<h3 className="font-bold">{digimon.name}</h3>
						<p className="text-sm">{digimon.level}</p>
					</div>
					<DigiProcess name={digimon.name} image={digimon.img} tingkat={digimon.level} />
				</div>		
			);
			
		})}
		
		
      </div>
      <h1 className="text-center font-bold text-xl mt-5">Chosen Digimons</h1>
      <div className="grid grid-cols-4">
		{data.map((item) => {
			return (
				<DigiDelete key={item._id} item={item} />
				
			);
		})}
		</div>		
      
		
		
    </main>
  );
}
