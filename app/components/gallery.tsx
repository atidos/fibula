'use client'
import Image from 'next/image'
import { SetStateAction, useEffect, useState, useRef } from 'react';
import { storage } from '../firebaseConfig.js';
import {ref, listAll, getDownloadURL} from "firebase/storage"
import { error } from 'console';

const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

type Logo = {
	name?: string
	imageURLs: Array<string>
	coloredImage?: string
	texturedImage?: string
}

async function GetImagesFromFolder(folderRef: any) {
	var logo: Logo = {imageURLs: new Array<string>(3)};
	logo.name = folderRef.name;

	await getDownloadURL(ref(storage, folderRef.toString() + "/PNG/solid.png")).then((url) => {
		logo.imageURLs[0] = url;
	}).catch((error) => {});

	await getDownloadURL(ref(storage, folderRef.toString() + "/PNG/colored.png")).then((url) => {
		logo.imageURLs[1] = url;
	}).catch((error) => {});

	await getDownloadURL(ref(storage, folderRef.toString() + "/PNG/textured.png")).then((url) => {
		logo.imageURLs[2] = url;
	}).catch((error) => {});

	return logo;
}

export default function Gallery() {
	const [logoList, setLogoList] = useState<Logo[]>([])
	const [showIndex, setShowIndex] = useState(0);
	const [showType, setShowType] = useState(0);
	const [loading, setLoading] = useState(false);

	useEffect(() => 
	{
		// Create a reference under which you want to list
		const listRef = ref(storage, '/Metal Logo')
		
		listAll(listRef).then((res) => {
			res.prefixes.forEach((folderRef) => {
				
				GetImagesFromFolder(folderRef).then((logo) => {

					setLogoList((prev) => [...prev, logo]);

				});
			});
		});
	}, []);

	function changeShowImage(i:number) {
		if(i!==showIndex) setLoading(true);
		
		setShowIndex(i);
		if (!isBrowser()) return;
		window.scrollTo({ top: 300, behavior:  'smooth' });
	}

	function changeShowType(i:number) {
		if(i===showType) return;
		setShowType(i);
		setLoading(true);
	}

	return (
		<div>
			<div className='flex flex-col items-center h-[70vh]'>
				<div className="h-4/5 ">
					<Image
					src={logoList[showIndex]?.imageURLs[showType]!}
					width="1"
					height="1"
					alt='logo'
					sizes="100vw"
					className="h-full w-full 
					-contain mx-auto corners shadow-md ..."
					onLoadingComplete={(e) => {setLoading(false)}}
					/>
					<div className={`absolute transition ease-in-out duration-75 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${loading? '' : 'scale-0'}`}>
						<svg width="50" height="50" viewBox="-25 -25 250 250" version="1.1" className='animate-spin drop-shadow-md'>
							<circle r="90" cx="100" cy="100" stroke="#333333" stroke-width="40" stroke-linecap="round" stroke-dashoffset="NaNpx" fill="transparent" stroke-dasharray="565.48px"></circle>
							<circle r="20" cx="190" cy="100" fill="#ffffff"></circle>
						</svg>
					</div>
				</div>

				<p className=' text-neutral-500 shadow-md text-xl p-2'>[{logoList[showIndex]?.name!}]</p>

				<div className="relative flex gap-2 place-content-center  w-full h-full content-end">

					<div className={`transition-all ease-in-out w-auto max-h-20 bg-neutral-800 shadow-md rounded-md hover:bg-neutral-700 hover:-translate-y-4 aspect-square grid place-items-center
					${logoList[showIndex]?.imageURLs[0]? '' : 'hidden'}`} onClick={() => changeShowType(0)}>
						<div className=" bg-white w-2/3 h-2/3 shadow-md rounded-md pointer-events-none"></div>
					</div>

					<div className={`transition-all ease-in-out w-auto max-h-20 bg-neutral-800 shadow-md rounded-md hover:bg-neutral-700 hover:-translate-y-4 aspect-square grid place-items-center
					${logoList[showIndex]?.imageURLs[1]? '' : 'hidden'}`} onClick={() => changeShowType(1)}>
						<div className="relative bg-[url('./colored.png')] bg-contain w-2/3 h-2/3 shadow-md rounded-md pointer-events-none"></div>
					</div>

					<div className={`transition-all ease-in-out w-auto max-h-20 bg-neutral-800 shadow-md rounded-md hover:bg-neutral-700 hover:-translate-y-4 aspect-square grid place-items-center
					${logoList[showIndex]?.imageURLs[2]? '' : 'hidden'}`} onClick={() => changeShowType(2)}>
						<div className="relative bg-[url('./textured.png')] bg-contain w-2/3 h-2/3 shadow-md rounded-md pointer-events-none"></div>
					</div>
				</div>
				

			</div>
			


			<div className='columns-4 gap-4 border-dashed border-2 border-neutral-700 bg-black m-4 p-4 ...'>
				{logoList.map((logo, index) => {
					return (<div key={index} className={`relative transition-all ease-out border-dashed border-2 duration-150
					${index === showIndex ? "border-neutral-100" : "border-neutral-800"}
					${logoList[index]?.imageURLs[showType]? '' : 'hidden'}
				    bg-black backdrop-blur-2xl backdrop-brightness-200 bg-opacity-100 w-full mb-4
					hover:bg-neutral-500 hover:-translate-y-1 hover:scale-[1.5] hover:bg-opacity-5 hover:z-10`
					} onClick={() => changeShowImage(index)}>
						<Image
						key={index}
						src={logo?.imageURLs[showType]!}
						width={300}
						height={300}
						alt='logo'
						placeholder='blur'
						blurDataURL='./image-loading.png'
						className="shadow-md p-4 ..."
						/>
					</div>
					)
				})}
			</div>
		</div>
		
	);
}