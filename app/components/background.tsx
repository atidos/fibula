'use client'

import React from 'react';

import { useEffect, useState } from 'react';

export default function DynamicBG({children}: {
  children: React.ReactNode
}) {
    const [coords, setCoords] = useState({x: 0, y: 0,});
	
	useEffect(() => {
		const handleWindowMouseMove = (event: any) => {
			setCoords({
			x: event.clientX / window.innerWidth,
			y: event.clientY / window.innerHeight,
			});
			
		};
		window.addEventListener('mousemove', handleWindowMouseMove);
  
		return () => {
			window.removeEventListener(
			'mousemove',
			handleWindowMouseMove,
			);
		};
	}, []);

	return (
		<body className="bg-[url('/bg-1.png')] min-h-screen">

			<div className="bg-[url('./bg-2.png')] fixed top-0 mix-blend-lighten bg-repeatx h-full w-full ..."
			style={{left: `${Math.round(coords.x * 30 - 15)}px`}}>
			</div>


			<div className="bg-[url('./bg-3.png')] fixed top-0 mix-blend-lighten bg-repeatx h-full w-full ..."
			style={{left: `${Math.round(coords.x * 60 - 30)}px`}}>
			</div>


			<div className="bg-[url('./bg-4.png')] fixed top-0 mix-blend-lighten bg-repeatx h-full w-full z-20 pointer-events-none ..."
			style={{left: `${Math.round(coords.x * 100 - 50)}px`}}>
			</div>

			
			<div className="py-2"> {children} </div>

		</body>
		

        
	);
	
}

function lerp( a : any, b : any, alpha : any) {
	return a + alpha * ( b - a )
 }
  
