import { Outlet, useNavigate } from 'react-router-dom';
import SideBar from './SideBar';
import { useFormContext } from 'react-hook-form';
import { useEffect } from 'react';

const Main = () => {
	const {
		formState: { isValid },
	} = useFormContext();
	const navigate = useNavigate();

	useEffect(() => {
		if (!isValid) {
			navigate('/multi-step-form-main');
		}
	}, [!isValid, navigate]);

	return (
		<main className='main__container'>
			<div className='main__div'>
				<SideBar />
				<div className='main__forms'>
					<Outlet />
				</div>
			</div>
		</main>
	);
};

export default Main;
