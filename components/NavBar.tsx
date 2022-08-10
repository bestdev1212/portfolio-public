import React from "react";

const NavBar = () => {
	return (
		<div className="navbar bg-base-100 fixed z-10">
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl">Portfolio</a>
			</div>
			<div className="flex-none">
				<button className="btn btn-square btn-ghost">
					<i className="fa-brands fa-github" />
				</button>
				<button className="btn btn-square btn-ghost">
					<i className="fa-brands fa-linkedin" />
				</button>

				<button className="btn btn-square btn-ghost">
					<i className="fa-brands fa-twitter" />
				</button>
				<button className="btn btn-square btn-ghost">
					<i className="fa-solid fa-envelope" />
				</button>
			</div>
		</div>
	);
};

export default NavBar;
