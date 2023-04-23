"use client"
import { BiArrowToTop } from "react-icons/bi"
import ScrollToTop from "react-scroll-to-top"

const Scroll = () => {
	return (
		<ScrollToTop
			smooth
			className="flex justify-center items-center bg-indigo-900 hover:shadow-5xl ease-in duration-300"
			component={<BiArrowToTop className="text-2xl text-white" />}
		/>
	)
}

export default Scroll
