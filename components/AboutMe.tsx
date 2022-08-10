import React from "react";

const AboutMe = ({ viewRef }: any) => {
	return (
		<div
			className="flex flex-col w-full justify-center min-h-screen"
			ref={viewRef}
			id="contact"
		>
			<div className="w-full items-center justify-center text-center mt-32 mb-16 max-w-[600px] mx-auto space-y-4">
				<h1 className="font-bold text-4xl">
					<i className="text-primary fa-solid fa-phone mr-5" />
					Get In Touch
				</h1>
				<p className="text-center text-gray-300 text-lg">
					{`Shoot me an email and let's have a chat.`}
				</p>
			</div>

			<div className="flex flex-col  mx-auto w-full max-w-[720px] rounded-xl shadow-lg p-10 space-y-8">
				<div className="flex items-center w-full space-x-10">
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text">Your Name</span>
						</label>
						<input type="text" className="input input-bordered w-full bg-base-300" />
					</div>
					<div className="form-control w-full">
						<label className="label">
							<span className="label-text">Your Email</span>
						</label>
						<input type="text" className="input input-bordered w-full bg-base-300" />
					</div>
				</div>

				<div className="form-control w-full">
					<label className="label">
						<span className="label-text">Your Message</span>
					</label>
					<textarea className="textarea textarea-bordered bg-base-300" rows={10} />
				</div>

				<button className="btn btn-primary">
					<i className="fa-solid fa-paper-plane mr-2" />
					Shoot Your Message
				</button>
			</div>
		</div>
	);
};

export default AboutMe;
