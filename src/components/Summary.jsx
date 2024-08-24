import React from 'react';

import { Link } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import ButtonConfirm from './ButtonConfirm';
import { AppContext } from '../context/AppContext';
import { getPrice } from '../helpers/helpers';

const Summary = () => {
	const [getOns, setGetOns] = useState([]);
	const { state } = useContext(AppContext);
	const { monthly, plan, arrOns } = state;

	let priceTotal = arrOns
		? arrOns.reduce((acc, i) => acc + i.priceTime, 0) + plan.price
		: plan.price;

	useEffect(() => {
		if (arrOns) setGetOns(arrOns);
		else setGetOns([]);
	}, []);

	return (
		<div className=' container'>
			<h1> Finishing up</h1>
			<p className='text'>
				{' '}
				Double-check everything looks OK before confirming.
			</p>

			<div className='summary__container'>
				<div>
					<section className='summary__plan'>
						<h3>
							{plan.title ? (
								<span>
									{plan.title}({!monthly ? 'Yearly' : 'Montly'})
								</span>
							) : (
								<span>No plan</span>
							)}
						</h3>
						<Link to='/multi-step-form-main/select_plan'>Change</Link>
					</section>
					{plan.price > 0 && (
						<p className='summary__planPrice'>
							${getPrice(monthly, plan.price)}
						</p>
					)}
				</div>

				<hr className='summary__hr' />

				{getOns.length > 0 ? (
					getOns.map((el, index) => (
						<section
							className='summary__addOns'
							key={index}
						>
							<h4> {el.title}</h4>
							<p>{`+${getPrice(monthly, el.priceTime)}`}</p>
						</section>
					))
				) : (
					<h3>No add-ons</h3>
				)}
			</div>
			{(plan.title || getOns.length > 0) && (
				<section className='summary__total'>
					<p>Total (per {!monthly ? 'yearly' : 'montly'})</p>
					<h2>+{getPrice(monthly, priceTotal)}</h2>
				</section>
			)}
			<ButtonConfirm back={true} />
		</div>
	);
};

export default Summary;
