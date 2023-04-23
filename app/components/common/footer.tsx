"use client"
import { BsYoutube, BsGithub, BsLinkedin, BsDiscord } from "react-icons/bs"

enum Logo {
	YOUTUBE = "youtube",
	GITHUB = "github",
	LINKEDIN = "linkedin",
	DISCORD = "discord",
}

const Footer = () => {
	const handleLogoClick = (type: Logo) => {
		switch (type) {
			case Logo.YOUTUBE:
				window.open("https://www.youtube.com/@freecodecamp", "_blank")
			case Logo.GITHUB:
				window.open("https://github.com/hosseinmirzapur", "_blank")
			case Logo.LINKEDIN:
				window.open("https://www.linkedin.com/in/hossein-mirzapur", "_blank")
			case Logo.DISCORD:
				window.open(
					"https://discordapp.com/users/hosseinmirzapur#3303",
					"_blank",
				)
		}
	}

	return (
		<section id="contact" className="bg-gray3 font-Dm_Sans pb-10">
			<div className="text-white flex flex-col items-center py-16">
				<div className="w-36 h-12 border rounded-2xl flex items-center justify-center my-8 hover:bg-green hover:border-gray2 hover:shadow-2xl cursor-pointer ease-in duration-300">
					<h1 className="text-2xl">Hire me</h1>
				</div>
				<div className="flex space-x-10 text-3xl mb-8">
					<BsYoutube
						className="cursor-pointer m-2 hover:text-[#c4302b] ease-in duration-300"
						onClick={() => handleLogoClick(Logo.YOUTUBE)}
					/>
					<BsGithub
						className="cursor-pointer m-2 hover:text-black ease-in duration-300"
						onClick={() => handleLogoClick(Logo.GITHUB)}
					/>
					<BsLinkedin
						className="cursor-pointer m-2 hover:text-blue ease-in duration-300"
						onClick={() => handleLogoClick(Logo.LINKEDIN)}
					/>
					<BsDiscord
						className="cursor-pointer m-2 hover:text-indigo-800 ease-in duration-300"
						onClick={() => handleLogoClick(Logo.DISCORD)}
					/>
				</div>
				<p className="tracking-wider text-center mobile:text-sm">
					All Rights Reserved | &#169; Smartinex | Made By Hossein
				</p>
			</div>
		</section>
	)
}

export default Footer
