import Footer from "./components/common/footer"
import Header from "./components/common/header"
import Scroll from "./components/common/scroll"

import "./globals.css"

export const metadata = {
	title: "My Portfolio",
	description: "Hossein Mirzapur - Portfolio",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className="scroll-smooth">
				<Header />
				{children}
				<Scroll />
				<Footer />
			</body>
		</html>
	)
}
