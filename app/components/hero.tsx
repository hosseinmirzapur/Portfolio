import { TbBrandNextjs } from "react-icons/tb"
import { IoLogoNodejs } from "react-icons/io"
import { FaLaravel, FaDocker } from "react-icons/fa"
import { MdFormatQuote } from "react-icons/md"
import Image from "next/image"

const Hero = () => {
	const yearsOfExperience = (): number => {
		const date = new Date()
		return date.getFullYear() - 2021
	}
	return (
		<>
			<section className="normal:grid normal:grid-cols-2 tablet:flex tablet:flex-col-reverse mobile:flex mobile:flex-col-reverse normal:w-11/12 mobile:w-10/12 tablet:w-10/12 m-auto font-Roboto_mono mt-24">
				<div className="text-elements inline-flex relative text-white flex-col">
					<div className="w-10/12 mobile:flex mobile:flex-col mobile:w-auto normal:ml-10 mobile:ml-0 mobile:items-center mobile:justify-center tablet:flex tablet:flex-col tablet:ml-0 tablet:w-auto tablet:justify-center tablet:items-center">
						<div>
							<p className="bg-green p-1 inline-block rounded-xl ">
								Fullstack Developer
							</p>
						</div>
						<div className="head normal:leading-12 tablet:leading-12 normal:mt-12 normal:mb-12 normal:text-5xl mobile:mt-8 mobile:font-semibold mobile:mb-8 mobile:text-sm mobile:gap-2 tablet:mt-4 tablet:mb-8 tablet:text-2xl mobile:flex mobile:flex-row tablet:flex tablet:flex-row tablet:space-x-3 tablet:justify-center tablet:items-center">
							<p className="flex normal:flex-col">
								<MdFormatQuote className="mobile:-mt-[10px] normal:-ml-10" />
								Talk Is Cheap,
							</p>

							<p>Show Me The {`<Code/>`}</p>
						</div>
						<div className="desc mb-10">
							<p className="normal:text-base mobile:text-sm opacity-80">
								Quote By: Linus Torvalds
							</p>
							<p className="normal:text-[12px] mobile:text-sm opacity-50 mt-1">
								Lead developer of the Linux kernel
							</p>
						</div>
						<h3 className="uppercase text-green text-3xl underline underline-offset-8 normal:mb-20 tablet:mb-10 mobile:mb-10 mobile:text-center mobile:justify-center mobile:items-center">
							{"Let's Chat"}
						</h3>
					</div>
					<div className="experience uppercase flex normal:space-x-8 tablet:justify-evenly mobile:space-y-5 pb-7 mobile:flex-col">
						<div className="year flex items-center mobile:flex-col tablet:space-x-2">
							<p className="normal:mr-4 mobile:text-4xl tablet:text-4xl normal:text-5xl">
								{yearsOfExperience()}
							</p>
							<div className="opacity-75 mobile:text-sm tablet:text-sm normal:text-base mobile:items-center mobile:justify-center">
								<p>Years of Experience</p>
							</div>
						</div>
						<div className="projects flex mobile:flex-col items-center justify-between tablet:space-x-2">
							<p className="normal:mr-4 mobile:text-4xl tablet:text-4xl normal:text-5xl">
								+10
							</p>
							<div className="mobile:flex opacity-75 mobile:text-sm mobile:space-x-1 tablet:text-sm normal:text-base mobile:flex-row normal:flex-col">
								<div>Projects Completed</div>
								<div>with +3 companies</div>
							</div>
						</div>
					</div>
				</div>

				<div className="image-elements relative normal:mb-24 mobile:mt-44 tablet:scale-[40%] tablet:mt-36 tablet:mb-10 mobile:scale-[80%] mobile:mb-14">
					<div className="flex justify-end items-center bg-gradient-primary-2 absolute bottom-0">
						<span className="absolute top-20 mobile:top-3 right-28 mobile:right-5 bg-gray3 hover:bg-white hover:scale-[130%] ease-in duration-300 shadow-3xl w-8 h-8 flex items-center justify-center rounded-50">
							<TbBrandNextjs className="text-2xl text-white hover:text-black hover:animate-bounce ease-in duration-300" />
						</span>
						<span className="absolute top-60 mobile:top-32 -right-10 w-24 h-24 bg-gray2 shadow-2xl flex items-center justify-center rounded-50 hover:scale-[130%] ease-in duration-300">
							<IoLogoNodejs className="text-5xl text-yellow-300 hover:text-green hover:animate-bounce ease-in duration-300" />
						</span>
						<span className="absolute top-3/4 -left-12 mobile:-left-9 w-16 h-16 bg-darkgray shadow-xl flex items-center justify-center rounded-50 hover:scale-[130%] ease-in duration-300">
							<FaLaravel className="text-4xl text-red hover:text-indigo-500  hover:animate-bounce ease-in duration-300" />
						</span>
						<span className="absolute top-10 left-12 mobile:left-8 w-10 h-10 flex items-center justify-center rounded-50 hover:scale-[130%] ease-in duration-300 bg-darkgray shadow-4xl">
							<FaDocker className="text-3xl text-react hover:animate-bounce ease-in duration-300" />
						</span>

						<Image alt="hero-image" src={"/1.png"} width={1200} height={800} />
					</div>
				</div>
			</section>
		</>
	)
}

export default Hero
