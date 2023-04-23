export interface Testimonial {
	image: string
	owner: string
	role: string
	ownerAlias: string
	body: string
}

export const testimonials: Testimonial[] = [
	{
		image: "/client1.jpg",
		owner: "Logan Paul",
		role: "Senior Manager",
		body: "I have had the pleasure of working with Hossein Mirzapur for the past year and I can confidently say that he is one of the most talented and hardworking full-stack developers I have ever come across. Hossein consistently delivers high-quality work on time and is always willing to go above and beyond to ensure that our projects are successful. He has excellent problem-solving skills and is able to quickly identify and resolve any issues that arise. Hossein is a true asset to our team and I look forward to continuing to work with him in the future.",
		ownerAlias: "L.P",
	},
	{
		image: "/client2.jpg",
		owner: "Rachel Smith",
		role: "Front-End Dev",
		body: "I have worked with Hossein Mirzapur on several projects and I have always been impressed by his technical skills and attention to detail. Hossein is an excellent full-stack developer who is equally comfortable working on the frontend and backend. He has a deep understanding of web development technologies and is able to create elegant and efficient solutions to complex problems. Hossein is also a great team player and is always willing to help out his colleagues. I highly recommend Hossein to anyone looking for a skilled and reliable full-stack developer.",
		ownerAlias: "R.S",
	},
	{
		image: "/client3.jpg",
		owner: "John Doe",
		role: "Back-End Dev",
		body: "I have had the pleasure of working with Hossein Mirzapur for the past two years and I can confidently say that he is one of the best full-stack developers I have ever worked with. Hossein has an in-depth understanding of both frontend and backend development and is able to seamlessly integrate the two. He is a skilled problem solver who is able to identify and fix issues quickly and efficiently. Hossein is also a great communicator and collaborator, and is always willing to share his knowledge and expertise with his colleagues. I highly recommend Hossein to anyone looking for a talented and dedicated full-stack developer.",
		ownerAlias: "J.D",
	},
]
