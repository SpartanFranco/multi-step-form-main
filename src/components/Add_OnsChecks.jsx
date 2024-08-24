import React from 'react';
import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { AppContext } from '../context/AppContext';
import { getPrice } from '../helpers/helpers';

const Add_OnsChecks = ({ title, text, priceTime }) => {
	const { state, setState } = useContext(AppContext);
	const { register, getValues, watch } = useFormContext();
	const { monthly } = state;

	const checked = () => {
		if (!getValues(title)) {
			setState({
				...state,
				arrOns: [...state.arrOns, { title: title, priceTime: priceTime }],
			});
		} else {
			setState({
				...state,
				arrOns: state.arrOns.filter((el) => el.title !== title),
			});
		}
	};

	return (
		<div
			className={`addOns__checkbox ${watch(title) ? 'addOns__focusChecks' : ' '}`}
		>
			<input
				id='checkbox'
				onClick={checked}
				className='addOns__input'
				type='checkbox'
				{...register(title)}
			/>
			<label htmlFor='checkbox'>
				<h3>{title}</h3>
				<span> {text}</span>
			</label>
			<p>+${getPrice(monthly, priceTime)}</p>
		</div>
	);
};

export default Add_OnsChecks;
