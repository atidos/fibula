import Image from 'next/image'

export default function Navbar() {
	return (
		<nav className="sticky top-0 lg:pt-8 md:pt-8 sm:pt-4 lg:px-80 md:px-40">
			<Image
    			  src="/header.svg"
    			  width={500}
    			  height={500}
    			  alt="logo"
                  className="drop-shadow-md"
    			/>
			<div className="border-dashed border-2 border-zinc-700 bg-zinc-900 m-2 p-2 text-md  ...">
				Graphic Design  |  Games  |  About
			</div>
		</nav>
	);
}
