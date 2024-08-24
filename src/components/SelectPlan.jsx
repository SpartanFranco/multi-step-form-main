import React from 'react';
import ButtonNav from './ButtonNav';
import iconArcade from '/src/assets/images/icon-arcade.svg';
import iconAdvanced from '/src/assets/images/icon-advanced.svg';
import iconPro from '/src/assets/images/icon-pro.svg';
import Plans from './Plans';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SelectPlan = () => {
	const { state, setState } = useContext(AppContext);
	const { monthly } = state;

	const handleMonthly = () =>
		setState({
			...state,
			monthly: monthly ? false : true,
		});

	return (
		<div className='container'>
			<h1> Select your plan</h1>
			<p className='text'>You have the option of monthly or yearly billing.</p>

			<div className='selectPlan__container'>
				<Plans
					icon={iconArcade}
					title={'Arcade'}
					priceTime={9}
				/>
				<Plans
					icon={iconAdvanced}
					title={'Advanced'}
					priceTime={12}
				/>
				<Plans
					icon={iconPro}
					title={'Pro'}
					priceTime={15}
				/>

				<section className='selectPlan__section'>
					<p
						className={` selectPlan__text ${monthly ? 'selectPlan__textActive' : ''}`}
					>
						Monthly
					</p>

					<div className='selectPlan__btnContainer'>
						<div
							onClick={handleMonthly}
							className={`selectPlan__btnOff ${!monthly ? 'selectPlan__btnActive ' : ' '}`}
						></div>
					</div>
					<p
						className={`selectPlan__text ${!monthly ? 'selectPlan__textActive' : ''}`}
					>
						Yearly
					</p>
				</section>
			</div>

			<ButtonNav
				back={true}
				next={'add_ons'}
				nextStep={true}
			/>
		</div>
	);
};

export default SelectPlan;
