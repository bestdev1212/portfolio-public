import React from "react";
import techStack from "../archive/techStack.json";

const TechStack = () => {
	return (
		<div className="flex flex-col min-h-screen w-full items-center justify-center">
			<div className="w-full items-center justify-center text-center mt-24 mb-16 max-w-screen-xl mx-auto">
				<h1 className="font-bold text-3xl">
					<i className="text-primary fa-solid fa-layer-group mr-5" />
					Tech Stack
				</h1>
			</div>
			<div className="flex items-center flex-wrap max-w-4xl">
				{techStack.map((item, index) => {
					return (
						<img
							key={index}
							src={item.logo}
							width={item.width}
							className="m-5"
							alt=""
						/>
					);
				})}
			</div>
		</div>
	);
};

export default TechStack;
