import { motion } from "framer-motion";
import React, { useEffect } from "react";
import {
	Link,
	Button,
	Element,
	Events,
	animateScroll as scroll,
	scrollSpy,
	scroller,
} from "react-scroll";

const SideNav = ({ aboutInView, projectsInView, contactInView }: any) => {
	return (
		<div className="flex flex-col h-screen items-center justify-center fixed right-10 space-y-8">
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.5, duration: 0.25, ease: "easeInOut" }}
				className="flex flex-col space-y-5"
			>
				<Link
					smooth={true}
					duration={500}
					to="about"
					className={`flex items-center justify-center rounded-full duration-200 w-[50px] h-[50px] cursor-pointer ${
						aboutInView ? "bg-primary text-black" : "hover:bg-gray-700"
					}`}
				>
					<i className="fa-solid fa-user" />
				</Link>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 1, duration: 0.25, ease: "easeInOut" }}
				className="flex flex-col space-y-5"
			>
				<Link
					smooth={true}
					duration={500}
					to="projects"
					className={`flex items-center justify-center rounded-full duration-200 w-[50px] h-[50px] cursor-pointer ${
						projectsInView ? "bg-primary text-black" : "hover:bg-gray-700"
					}`}
				>
					<i className="fa-solid fa-laptop" />
				</Link>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, x: 50 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 1.5, duration: 0.25, ease: "easeInOut" }}
				className="flex flex-col space-y-5"
			>
				<Link
					smooth={true}
					duration={500}
					to="contact"
					className={`flex items-center justify-center rounded-full w-[50px] h-[50px] duration-200 cursor-pointer ${
						contactInView ? "bg-primary text-black" : "hover:bg-gray-700"
					}`}
				>
					<i className="fa-solid fa-phone" />
				</Link>
			</motion.div>
		</div>
	);
};

export default SideNav;
