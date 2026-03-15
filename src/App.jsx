import Header from "./Header"
import Body from "./Body"
import Contact from "./Contact"
import Footer from "./Footer"
import pic1 from "./assets/pic1.png"
import pic2 from "./assets/pic2.png"
import pic3 from "./assets/pic3.png"
import pic4 from "./assets/pic4.png"
import "./App.css"

const App = () => {
	const bodyItems = [
		{
			id: 1,
			image: pic1,
			title: "Adobe After Effects",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
			price: "$40.00"
		},
		{
			id: 2,
			image: pic2,
			title: "Adobe Premiere Pro",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
			price: "$30.00"
		},
		{
			id: 2,
			image: pic3,
			title: "Adobe Premiere Pro",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
			price: "$30.00"
		},
		{
			id: 2,
			image: pic4,
			title: "Adobe Premiere Pro",
			text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
			price: "$30.00"
		},
	]

	return (
		<>
			<Header />
			<main className="container-box">
				{bodyItems.map((obj) => (
					<Body key={obj.id} image={obj.image} title={obj.title} text={obj.text} price={obj.price}>
					</Body>
				))}
			</main>
			<Contact />
			<Footer />
		</>
	)
}

export default App