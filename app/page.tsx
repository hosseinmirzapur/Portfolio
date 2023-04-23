import React from "react"
import Hero from "./components/hero"
import Service from "./components/service"
import Work from "./components/work"
import Testimonials from "./components/testimonials"

export default function Home() {
	return (
		<>
			<Hero />
			<Service />
			<Work />
			<Testimonials />
		</>
	)
}
