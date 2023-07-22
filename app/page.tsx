
import Image from 'next/image'
import Link from "next/link"
import React from 'react';
import Gallery from './components/gallery';

export default function Home() {
	

	return (
		<main>
			<div className="lg:pt-8 md:pt-8 sm:pt-4 lg:px-80 md:px-40 ">
				<div className="relative h-[40vh]">
					<Image
							src="/tascam13.png"
							width={1492}
							height={1310}
							alt="tascam"
							className="absolute right-[30px] bottom-[-20px] w-[60%] shadow-lg -z-1"
						/>
					<Image
							src="/header.svg"
							width={400}
							height={400}
							alt="logo"
							className="drop-shadow-lg absolute left-0 bottom-0"
						/>
						
				</div>
			
			<div className="relative shadow-lg border-dashed border-2 border-neutral-700 bg-black m-2 p-2 text-xl left-0  ...">
				Graphic Design  |  Games  |  About
			</div>
			<div className="shadow-lg ...">
				<Gallery></Gallery>
			</div>
		</div>
		</main>
	);
}
