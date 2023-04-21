"use client"
import { BiArrowToTop } from "react-icons/bi"
import ScrollToTop from "react-scroll-to-top"

const Scroll = () => {
	return (
		<ScrollToTop
			smooth
			className="flex justify-center items-center bg-indigo-900 shadow-3xl"
			component={<BiArrowToTop className="text-2xl text-white" />}
		/>
	)
}

export default Scroll
