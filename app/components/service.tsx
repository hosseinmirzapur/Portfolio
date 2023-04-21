import Box from "./utils/box"
import { boxes } from "../data/boxes"
import { BiAbacus } from "react-icons/bi"

const Service = () => {
	return (
		<>
			<section id="services" className="pt-10 pb-10 bg-gray3">
				<div className="inner mb-20 mobile:mt-16 mx-auto flex mobile:flex-col mobile:space-y-5 tablet:flex-col normal:flex-row normal:justify-evenly normal:mt-20 tablet:mt-12 normal:w-11/12">
					<div className="text text-white font-Roboto_mono m-auto tablet:w-11/12 mobile:w-9/12 mobile:mt-10 normal:w-10/12">
						<p className="opacity-60 mb-4">Introduce</p>
						<h1 className="mobile:text-2xl mobile:mb-5 tablet:text-3.5xl tablet:mb-5 normal:text-4xl normal:mb-7">
							Hey {"I'm Hossein"}👋🏻
						</h1>

						<p className="italic opacity-90 mb-12 leading-1 mobile:text-base tablet:text-base normal:text-xl">
							Every great website requires professional developers behind it...
						</p>

						<p className="text-sm opacity-50 text-white normal:hidden mobile:mb-10 tablet:mb-10">
							scroll below text for more🔽
						</p>

						<p className="normal:w-10/12 opacity-75 mobile:h-[300px] mobile:w-auto mobile:overflow-x-auto mobile:text-sm tablet:h-[300px] tablet:w-11/12 tablet:overflow-x-auto tablet:text-sm scroll-smooth">
							As a full-stack web developer, I am passionate about leveraging my
							skills and expertise to create elegant, user-friendly, and
							high-performance web applications. With a strong background in
							both front-end and back-end development, I have the ability to
							design, develop, and deploy robust and scalable web applications
							from scratch. My technical skills include proficiency in HTML/CSS,
							JavaScript, React, Node.js, PHP, MySQL, SQLite, MongoDB, GraphQL
							and Postgres. I have a proven track record of delivering quality
							work within deadlines, collaborating effectively with
							cross-functional teams, and continuously learning and adapting to
							new technologies and tools. I believe that a successful web
							application is not just about the code, but also about the user
							experience and the impact it creates. Therefore, I always keep the
							end-user in mind and strive to create applications that are not
							only functional but also delightful to use. If you're looking for
							a full-stack web developer who is passionate, dedicated, and
							results-driven, then look no further. Let's connect and explore
							how I can help bring your web application to life.
						</p>
					</div>
					<div className="boxes space-y-10">
						{boxes.map((box, index) => (
							<Box
								description={box.description}
								headline={box.headline}
								projects={box.projects}
								backend={box.backend}
								frontend={box.frontend}
								lib={box.lib}
								key={index}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	)
}

export default Service
