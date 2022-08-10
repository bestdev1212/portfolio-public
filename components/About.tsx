import React from "react";
import projects from "../archive/projects.json";
import techStack from "../archive/techStack.json";

const About = ({ viewRef, basicRef }: any) => {
	return (
		<div
			className="flex flex-col w-full justify-center min-h-screen"
			ref={viewRef}
			id="about"
		>
			<div className="w-full items-center justify-center text-center mt-32 mb-16 max-w-[600px] mx-auto space-y-4">
				<h1 className="font-bold text-4xl">
					<i className="text-primary fa-solid fa-user mr-5" />
					About Me
				</h1>
				<p className="text-center text-gray-300 text-lg">
					{`Get to know who I am and what I'm up to. With my skills in toe.`}
				</p>
			</div>
			<div className="w-full max-w-screen-xl mx-auto flex items-start justify-between p-10 space-x-24">
				<div className="flex flex-col w-[50%] items-start">
					<h1 className="text-xl font-bold mb-5">Who Am I?</h1>

					<div className="flex flex-col text-lg space-y-2 w-full text-gray-400 font-medium">
						<p>
							I’m a <strong className="text-primary">Software Developer</strong>{" "}
							specialized in building highly optimized and great looking web
							applications.
						</p>
						<p>
							Throughout my <strong className="text-primary">career</strong>, I have
							built and deployed production level applications in the professional
							fields for various clients, and have worked on some personal businesses
							and passion projects.
						</p>
						<p>
							My love for programming and everything coding drives me to keep using the
							latest technologies provided by the{" "}
							<strong className="text-primary">dev community</strong>. From Server Side
							Rendering to type safe databases and ORM, I excel at selecting the right
							tools for the job. Check out my current tech stack and projects below and
							feel free to reach out via the contact section.
						</p>
					</div>
				</div>
				<div className="flex flex-col w-[50%] items-start">
					<h1 className="text-xl font-bold mb-5">{`What I'm Good At`}</h1>

					<div className="w-full flex flex-wrap">
						{techStack.map((item, index) => {
							return (
								<div
									key={index}
									className="flex items-center space-x-5 bg-base-100 px-4 py-3 rounded-lg mr-3 mb-3"
								>
									<img src={item.logo} width={25} alt="" />
									<span>{item.name}</span>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
