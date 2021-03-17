import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BottomTopBtn from "./components/Common/BottomToTopBtn/BottomTopBtn";
import Footer from "./components/Common/Footer/Footer/Footer";
import AboutUs from "./components/pages/AboutUs/AboutUs/AboutUs";
import ClassDetail from "./components/pages/ClassDetail/ClassDetail";
import Contact from "./components/pages/ContactUs/Contact/Contact";
import HomeContainer from "./components/pages/Home/HomeContainer/HomeContainer";
import OurClasses from "./components/pages/OurClass/OurClass";
import Pricing from "./components/pages/Pricing/Pricing/Pricing";

function App() {
	return (
		<main className="App">
			<BottomTopBtn />
			<Router>
				<Switch>
					<Route exact path="/">
						<HomeContainer />
					</Route>
					<Route path="/home">
						<HomeContainer />
					</Route>
					<Route path="/classes">
						<OurClasses />
					</Route>
					<Route path="/pricing">
						<Pricing />
					</Route>
					<Route path="/class/:classId">
						<ClassDetail />
					</Route>
					<Route path="/about">
						<AboutUs />
					</Route>
					<Route path="/contact">
						<Contact />
					</Route>
					<Route path="*">
						<h1>Not Found</h1>
					</Route>
				</Switch>
				<Footer />
			</Router>
		</main>
	);
}

export default App;
