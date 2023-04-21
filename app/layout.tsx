import Header from "./components/common/header"
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
			<body>
				<Header />
				{children}
			</body>
		</html>
	)
}
