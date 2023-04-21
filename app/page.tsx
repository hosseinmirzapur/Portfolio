import React from "react"
import { BiArrowToTop } from "react-icons/bi"
import Hero from "./components/hero"
import Service from "./components/service"
import ScrollToTop from "react-scroll-to-top"
import Scroll from "./components/common/scroll"

export default function Home() {
	return (
		<>
			<Hero />
			<Service />
		</>
	)
}
