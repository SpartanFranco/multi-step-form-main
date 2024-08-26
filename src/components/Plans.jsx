import React from 'react';
import { AppContext } from '../context/AppContext';
import { useContext } from 'react';
import { getPrice } from '../helpers/helpers';

const Plans = ({ icon, title, priceTime }) => {
	const { state, setState } = useContext(AppContext);
	const { monthly, plan } = state;

	const handlePlan = () => {
		setState({
			...state,
			isPlan: true,
			errorMessage: undefined,
			plan: { title: title, price: priceTime },
		});
	};
	return (
		<button
			onClick={handlePlan}
			className={`selectPlan__cards ${plan.title === title ? 'bg__focus' : ''}`}
		>
			<picture>
				<img
					src={icon}
					alt={`icon-${title}`}
				/>
			</picture>

			<section>
				<h2>{title}</h2>
				<p>
					${getPrice(monthly, priceTime)}
					<br />
					{!monthly && <span>2 months free</span>}
				</p>
			</section>
		</button>
	);
};

export default Plans;
