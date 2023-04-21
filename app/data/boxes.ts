import { LazyExoticComponent, ReactElement, lazy } from "react"

export interface Box {
	headline: string
	description: string
	projects: number
	backend?: boolean
	frontend?: boolean
	lib?: boolean
}

export const boxes: Box[] = [
	{
		headline: "Backend",
		description:
			"Projects which are based on backends powered by Laravel, Node.js and Golang",
		projects: 4,
		backend: true,
		lib: false,
		frontend: false,
	},
	{
		headline: "Frontend",
		description:
			"Projects which are based on frontends powered on Next.js and React.js",
		projects: 8,
		backend: false,
		lib: false,
		frontend: true,
	},
	{
		headline: "Libraries",
		description:
			"Projects which are libraries for functionality simplicity purposes",
		projects: 2,
		backend: false,
		lib: true,
		frontend: false,
	},
]
