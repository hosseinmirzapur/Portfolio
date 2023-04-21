"use client"

import Link from "next/link"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"
import { IoLogoLinkedin } from "react-icons/io"
import { AiOutlineGithub, AiOutlineClose } from "react-icons/ai"
import { FiMail } from "react-icons/fi"
import { RxHamburgerMenu } from "react-icons/rx"

import { useState } from "react"

enum ItemTypes {
	services = "services",
	works = "works",
	testimonials = "testimonials",
	contact = "contact",
	linkedIn = "linkedIn",
	github = "github",
}

const Header = () => {
	// ** Variables
	const [serviceHovered, setServiceHovered] = useState(false)
	const [workHovered, setWorkHovered] = useState(false)
	const [testimonialHovered, setTestimonialHovered] = useState(false)
	const [contactHovered, setContactHovered] = useState(false)
	const [linkedInHovered, setLinkedInHovered] = useState(false)
	const [githubHovered, setGithubHovered] = useState(false)
	const [menu, setMenu] = useState(false)

	// ** Variable Methods
	const toggleHover = (type: ItemTypes) => {
		switch (type) {
			case "services":
				setServiceHovered(!serviceHovered)
				break
			case "works":
				setWorkHovered(!workHovered)
				break
			case "testimonials":
				setTestimonialHovered(!testimonialHovered)
				break
			case "linkedIn":
				setLinkedInHovered(!linkedInHovered)
				break
			case "github":
				setGithubHovered(!githubHovered)
				break
			default:
				setContactHovered(!contactHovered)
				break
		}
	}
	const toggleMenu = () => setMenu(!menu)

	// ** Utils
	const handleScrollY = (y: number) => {
		window.scroll({
			top: y,
		})
	}

	return (
		<section className="font-Dm_Sans">
			<div className="flex relative items-center justify-between w-11/12 m-auto text-white h-20">
				{/* Logo */}
				<div
					className="logo normal:text-2xl mobile:text-sm tablet:text-sm"
					onClick={() => handleScrollY(0)}>
					<span className="hover:animate-pulse hover:text-green ease-in duration-300 cursor-pointer font-medium">
						Hossein Mirzapur
					</span>
				</div>

				{/* Links */}
				<div className="middle-nav mobile:hidden">
					<ul
						className={`flex items-center justify-between normal:space-x-4 tablet:hidden`}>
						<Link
							href={"#services"}
							className="flex items-center hover:text-green"
							onMouseEnter={() => toggleHover(ItemTypes.services)}
							onMouseLeave={() => toggleHover(ItemTypes.services)}>
							<BiChevronLeft
								className={
									serviceHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
							<span className="opacity-90 hover:text-green ease-in  duration-300">
								Services
							</span>
							<BiChevronRight
								className={
									serviceHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
						</Link>
						<Link
							href={"#works"}
							className="flex items-center hover:text-green"
							onMouseEnter={() => toggleHover(ItemTypes.works)}
							onMouseLeave={() => toggleHover(ItemTypes.works)}>
							<BiChevronLeft
								className={
									workHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
							<span className="opacity-90 hover:text-green ease-in  duration-300">
								Works
							</span>
							<BiChevronRight
								className={
									workHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
						</Link>
						<Link
							href={"#testimonials"}
							className="flex items-center hover:text-green"
							onMouseEnter={() => toggleHover(ItemTypes.testimonials)}
							onMouseLeave={() => toggleHover(ItemTypes.testimonials)}>
							<BiChevronLeft
								className={
									testimonialHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
							<span className="opacity-90 hover:text-green ease-in  duration-300">
								Testimonials
							</span>
							<BiChevronRight
								className={
									testimonialHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
						</Link>
						<Link
							href={"#contact"}
							className="flex items-center hover:text-green"
							onMouseEnter={() => toggleHover(ItemTypes.contact)}
							onMouseLeave={() => toggleHover(ItemTypes.contact)}>
							<BiChevronLeft
								className={
									contactHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
							<span className="opacity-90 hover:text-green ease-in  duration-300">
								Contact
							</span>
							<BiChevronRight
								className={
									contactHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
						</Link>
					</ul>
				</div>

				{/* Social Media */}
				<div className={`end-nav flex items-center justify-between space-x-5`}>
					<div
						className="flex items-center space-x-2 cursor-pointer"
						onMouseEnter={() => toggleHover(ItemTypes.linkedIn)}
						onMouseLeave={() => toggleHover(ItemTypes.linkedIn)}>
						<IoLogoLinkedin
							className={`text-2xl ${
								linkedInHovered ? "text-green duration-300" : ""
							}`}
						/>
						<span className="opacity-60 hover:opacity-100 mobile:hidden tablet:hidden">
							LinkedIn
						</span>
					</div>
					<div
						className="flex items-center space-x-2 cursor-pointer"
						onMouseEnter={() => toggleHover(ItemTypes.github)}
						onMouseLeave={() => toggleHover(ItemTypes.github)}>
						<AiOutlineGithub
							className={`text-2xl ${
								githubHovered ? "text-green duration-300" : ""
							}`}
						/>
						<span className="opacity-60 hover:opacity-100 mobile:hidden tablet:hidden">
							Github
						</span>
					</div>
					<div className="flex relative h-[40px] items-center cursor-pointer justify-center before:absolute before:h-[30px] before:w-[30px] before:rounded-50 before:bg-light_gray text-black hover:text-green duration-300">
						<FiMail className="text-2xl z-10" />
					</div>
					{menu ? (
						<AiOutlineClose
							className="sm:block sm:text-2xl normal:hidden"
							onClick={toggleMenu}
						/>
					) : (
						<RxHamburgerMenu
							className="sm:block sm:text-2xl normal:hidden"
							onClick={toggleMenu}
						/>
					)}
				</div>
			</div>

			{/* Menu Section */}
			{menu ? (
				<div className={`mid-nav text-black bg-light_gray normal:hidden`}>
					<ul className={`flex flex-col items-center py-2 gap-3`}>
						<Link
							href={"#services"}
							className="flex items-center hover:text-green"
							onMouseEnter={() => toggleHover(ItemTypes.services)}
							onMouseLeave={() => toggleHover(ItemTypes.services)}>
							<BiChevronLeft
								className={
									serviceHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
							<span className="opacity-90 hover:text-green ease-in duration-300">
								Services
							</span>
							<BiChevronRight
								className={
									serviceHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
						</Link>
						<Link
							href={"#works"}
							className="flex items-center hover:text-green"
							onMouseEnter={() => toggleHover(ItemTypes.works)}
							onMouseLeave={() => toggleHover(ItemTypes.works)}>
							<BiChevronLeft
								className={
									workHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
							<span className="opacity-90 hover:text-green ease-in  duration-300">
								Works
							</span>
							<BiChevronRight
								className={
									workHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
						</Link>
						<Link
							href={"#testimonials"}
							className="flex items-center hover:text-green"
							onMouseEnter={() => toggleHover(ItemTypes.testimonials)}
							onMouseLeave={() => toggleHover(ItemTypes.testimonials)}>
							<BiChevronLeft
								className={
									testimonialHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
							<span className="opacity-90 hover:text-green ease-in  duration-300">
								Testimonials
							</span>
							<BiChevronRight
								className={
									testimonialHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
						</Link>
						<Link
							href={"#contact"}
							className="flex items-center hover:text-green"
							onMouseEnter={() => toggleHover(ItemTypes.contact)}
							onMouseLeave={() => toggleHover(ItemTypes.contact)}>
							<BiChevronLeft
								className={
									contactHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
							<span className="opacity-90 hover:text-green ease-in  duration-300">
								Contact
							</span>
							<BiChevronRight
								className={
									contactHovered
										? "text-2xl inline opacity-100 ease-in duration-300"
										: "inline opacity-0 ease-in duration-300"
								}
							/>
						</Link>
					</ul>
				</div>
			) : null}
		</section>
	)
}
export default Header
