import React from "react";
import projects from "../archive/projects.json";

const Projects = ({ viewRef }: any) => {
	return (
		<div
			className="flex flex-col w-full justify-center min-h-screen"
			ref={viewRef}
			id="projects"
		>
			<div className="w-full items-center justify-center text-center mt-32 mb-16 max-w-[600px] mx-auto space-y-4">
				<h1 className="font-bold text-4xl">
					<i className="text-primary fa-solid fa-laptop mr-5" />
					Projects
				</h1>
				<p className="text-center text-gray-300 text-lg">
					{`Some of the work I've done. Both personal and professional.`}
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full max-w-screen-xl mx-auto gap-8 p-10">
				{projects.map((item, index) => {
					return (
						<>
							<label
								key={index}
								htmlFor={`modal-${index}`}
								className="card bg-base-100 shadow-xl p-10 space-y-5 items-center hover:scale-95 hover:text-gray-400 duration-200"
							>
								<div className="w-full min-h-[60px] flex items-start justify-center ">
									<img src={item.logo} width={item.logoWidth} alt="" />
								</div>
								<div className="badge badge-secondary">Personal</div>

								<p className="text-sm text-center">{item.shortDescription}</p>

								<div className="flex space-x-3">
									<div className="badge badge-outline">React.js</div>
									<div className="badge badge-outline">Next.js</div>
									<div className="badge badge-outline">MongoDB</div>
								</div>
							</label>

							<input type="checkbox" id={`modal-${index}`} className="modal-toggle" />
							<label
								htmlFor={`modal-${index}`}
								className="modal bg-black bg-opacity-80 cursor-pointer"
							>
								<label className="modal-box relative" htmlFor="">
									<div className="flex flex-col w-full">
										<img src={item.logo} width={200} alt="" className="mb-8 mx-auto" />
										<div className="flex flex-col space-y-2 mb-5">
											<span className="font-semibold text-gray-200">
												Project Description
											</span>
											<p className="text-sm text-gray-300">{item.longDescription}</p>
										</div>
										<div className="flex flex-col space-y-2 mb-5">
											<span className="font-semibold text-gray-200">Tech Stack</span>
											<div className="flex flex-wrap">
												{item.stack.map((stackName) => {
													return (
														<div key={stackName} className="badge badge-outline mr-2 mb-2">
															{stackName}
														</div>
													);
												})}
											</div>
										</div>

										<div className="flex flex-col space-y-2 mb-5">
											<span className="font-semibold text-gray-200">Live Screenshots</span>
											<div className="carousel w-full rounded-lg">
												{item.images.map((image, imageIndex) => {
													return (
														<div
															key={imageIndex}
															id={`slide${item.name}${imageIndex}`}
															className="carousel-item relative w-full"
														>
															<img src={image} alt="" className="w-full" />
															<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
																<a
																	href={`#slide${item.name}${imageIndex - 1}`}
																	className="btn btn-circle"
																>
																	❮
																</a>
																<a
																	href={`#slide${item.name}${imageIndex + 1}`}
																	className="btn btn-circle"
																>
																	❯
																</a>
															</div>
														</div>
													);
												})}
											</div>
										</div>

										<div className="flex flex-col space-y-2 mb-5">
											<span className="font-semibold text-gray-200">Relevant Links</span>
											<div className="flex space-x-5 w-full ">
												<a className="link link-primary">Github Repo</a>

												<a className="link link-primary">Visit Site</a>
											</div>
										</div>
									</div>
								</label>
							</label>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default Projects;
