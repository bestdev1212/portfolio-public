import React from "react";

const Hero = () => {
	return (
		<div className="hero min-h-screen bg-base-200">
			<div className="hero-content text-center">
				<div className="max-w-[720px] flex flex-col items-center">
					<img src="hero.svg" alt="" className="max-w-[500px] mb-16" />
					<h1 className="text-5xl font-bold">
						A Software developer, designer, and decent guy overall.
					</h1>
					<p className="py-6 text-lg text-primary">
						I’m passionate about coding, planning, and designing. All with the best
						tech stacks.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;
