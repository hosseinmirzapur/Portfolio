"use client"

import { testimonials, Testimonial } from "@/app/data/testimonials"
import Image from "next/image"
import TestimonialBox from "./utils/specialBox"
import { useState } from "react"

const Testimonials = () => {
	const [selectedTst, setSelectedTst] = useState(testimonials[0])

	const handleSelect = (tst: Testimonial) => setSelectedTst(tst)

	return (
		<section
			id="testimonials"
			className="m-auto mb-24 normal:w-8/12 normal:mt-32 mobile:w-10/12 tablet:w-10/12 tablet:mt-20">
			<div
				className="text-white font-Roboto_mono mb-20 mt-10
				normal:w-8/12 normal:flex normal:justify-between normal:items-baseline 
				mobile:w-10/12 
				tablet:w-10/12 tablet:flex tablet:justify-between tablet:items-baseline">
				<h1 className="mb-2 text-4xl mobile:text-3.5xl tablet:text-3.5xl">
					Testimonials
				</h1>
			</div>

			<div className="testimonial-box rounded-2xl relative text-white bg-gray3 py-10">
				<TestimonialBox owner={selectedTst.owner} body={selectedTst.body} />
			</div>

			<div
				className="client text-white cursor-pointer
			normal:flex normal:justify-between normal:items-center 
			tablet:grid tablet:grid-cols-1 tablet:gap-6
			mobile:grid mobile:grid-cols-0 mobile:gap-6">
				{testimonials.map((tst, index) => (
					<div
						onClick={() => handleSelect(tst)}
						key={index}
						className="font-Dm_Sans flex m-auto w-11/12 items-center justify-between mt-10 pr-10 p-2 transition-all duration-500 ease-in-out 
						hover:shadow-3xl hover:rounded-2xl
						mobile:w-full mobile:shadow-4xl mobile:rounded-xl mobile:p-3 mobile:justify-evenly
						normal:w-2/6 
						">
						<div>
							<Image
								src={tst.image}
								alt="client"
								width={200}
								height={200}
								className="w-11 h-11 rounded-50 object-cover"
							/>
						</div>
						<div className="details mobile:text-sm tablet:text-sm">
							<p>{tst.owner}</p>
							<span>{tst.role}</span>
							<span className="text-green ml-2">( {tst.ownerAlias} )</span>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Testimonials
