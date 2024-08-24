import { useLocation } from 'react-router-dom';

const SideBar = () => {
	let { pathname } = useLocation();

	return (
		<nav className='sidebar__container'>
			<ul>
				<li>
					<div
						className={`sidebar__num ${pathname === '/multi-step-form-main' ? 'sidebar__navActive' : ''}`}
					>
						1
					</div>
					<div className='sidebar__step'>
						<span>STEP 1</span>
						<p>YOUR INFO</p>
					</div>
				</li>
				<li>
					<div
						className={`sidebar__num ${pathname === '/multi-step-form-main/select_plan' ? 'sidebar__navActive' : ''}`}
					>
						2
					</div>
					<div className='sidebar__step'>
						<span>STEP 2</span>
						<p>SELECTE PLAN</p>
					</div>
				</li>
				<li>
					<div
						className={`sidebar__num ${pathname === '/multi-step-form-main/add_ons' ? 'sidebar__navActive' : ''}`}
					>
						3
					</div>
					<div className='sidebar__step'>
						<span>STEP 3</span>
						<p>ADD ONS</p>
					</div>
				</li>
				<li>
					<div
						className={`sidebar__num ${pathname === '/multi-step-form-main/summary' || pathname === '/multi-step-form-main/confirm' ? 'sidebar__navActive' : ''}`}
					>
						4
					</div>
					<div className='sidebar__step'>
						<span>STEP 4</span>
						<p>SUMMARY</p>
					</div>
				</li>
			</ul>
		</nav>
	);
};

export default SideBar;
