import Image from "next/image"

const Work = () => {
	return (
		<>
			<section id="works" className="bg-gray3 pb-14">
				<hr className="text-green opacity-10" />
				<div className="inner m-auto tablet:grid normal:grid tablet:grid-cols-2 normal:grid-cols-1 pt-10 pb-10 text-white font-Roboto_mono normal:w-11/12 mobile:w-10/12 tablet:w-11/12 normal:space-x-5 tablet:space-x-5">
					<div className="left grid grid-rows-2 mobile:flex mobile:flex-col mobile:justify-center mobile:items-center">
						<div className="text1 mobile:w-8/12 mobile:m-auto">
							<h1 className="mb-2 text-4xl mobile:text-3.5xl">Latest Work</h1>
							<p className="opacity-70">
								Smartinex - A Decentralized platform holding all the blockchain
								power in it
							</p>
						</div>
						<div className="image rounded-2xl shadow-4xl m-auto mobile:mt-10 normal:w-[450px] tablet:w-[350px] mobile:w-80 hover:shadow-3xl ease-in duration-300 w-auto">
							<Image
								alt="image"
								src={"/3.png"}
								width={1200}
								height={1200}
								className="rounded-2xl"
							/>
						</div>
						<div className="text2 m-auto w-full mt-20 mobile:w-8/12 mobile:mt-10 mobile:mb-14 ">
							<h1 className="mb-5 text-3.5xl mobile:text-3xl">
								Elegant Architecture
							</h1>
							<p className="mb-10 opacity-60">
								Bringing the most up-to-date tech, just right where it's needed
							</p>
							<p className="text-green underline underline-offset-4">Contact</p>
						</div>
					</div>
					<div className="right grid grid-rows-2 gap-20">
						<div className="flex justify-center m-auto rounded-2xl shadow-4xl aspect-auto mobile:w-80 tablet:w-50 normal:w-[600px] hover:shadow-3xl ease-in duration-300 w-auto">
							<Image
								alt="right-image"
								src={"/2.png"}
								width={1200}
								height={1200}
							/>
						</div>
						<div className="flex justify-center m-auto rounded-2xl shadow-4xl aspect-auto mobile:w-80 tablet:w-50 normal:w-[600px] hover:shadow-3xl ease-in duration-300 w-auto">
							<Image
								alt="right-image"
								src={"/4.png"}
								width={1200}
								height={1200}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default Work
