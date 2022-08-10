import type { NextPage } from "next";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import About from "../components/About";
import AboutMe from "../components/AboutMe";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import Projects from "../components/Projects";
import SideNav from "../components/SideNav";
import TechStack from "../components/TechStack";

const Home: NextPage = () => {
	const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.5 });
	const { ref: projectsRef, inView: projectsInView } = useInView({
		threshold: 0.5,
	});
	const { ref: contactRef, inView: contactInView } = useInView({
		threshold: 0.5,
	});

	return (
		<div>
			<SideNav
				aboutInView={aboutInView}
				aboutRef={aboutRef}
				projectsInView={projectsInView}
				contactInView={contactInView}
			/>
			<NavBar />
			<Hero />
			<div className="p-16">
				<About viewRef={aboutRef} />
				<Projects viewRef={projectsRef} />
				<AboutMe viewRef={contactRef} />
			</div>
		</div>
	);
};

export default Home;
