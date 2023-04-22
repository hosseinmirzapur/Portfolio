"use client"

import { Box } from "@/app/data/boxes"
import React, { useState } from "react"
import { BiLibrary, BiServer } from "react-icons/bi"
import { BsCodeSlash } from "react-icons/bs"

const Box = ({
	projects,
	description,
	headline,
	backend,
	frontend,
	lib,
}: Box) => {
	const [boxHovered, setBoxHovered] = useState(false)

	const toggleHover = () => setBoxHovered(!boxHovered)
	return (
		<>
			<section
				className="flex justify-between hover:shadow-3xl items-baseline cursor-pointer text-white mx-auto w-11/12 mobile:w-9/12 tablet:w-10/12 ease-in duration-300 bg-gray2 p-8 font-Roboto_mono"
				onMouseEnter={toggleHover}
				onMouseLeave={toggleHover}>
				<div className="text">
					<h1
						className={`text-3xl ease-in duration-300 italic ${
							boxHovered ? "text-green" : ""
						}`}>
						{headline}
					</h1>
					<p className={`opacity-70 mt-2 mb-5 font-Roboto_mono pr-2`}>
						{description}
					</p>
					<p className={`text-base ${boxHovered ? "animate-bounce" : ""}`}>
						{projects} projects
					</p>
				</div>
				<div className="icon flex flex-col space-y-5">
					<BiServer
						className={backend ? "bg-black  text-red text-2xl" : "text-white"}
					/>
					<BsCodeSlash
						className={frontend ? "bg-black  text-red text-2xl" : "text-white"}
					/>
					<BiLibrary
						className={lib ? "bg-black een text-red text-2xl" : "text-white"}
					/>
				</div>
			</section>
		</>
	)
}

export default Box
