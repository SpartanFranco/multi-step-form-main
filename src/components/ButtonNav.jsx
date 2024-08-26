import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ButtonNav = ({ back, next, isValid, nextStep, inSelectPlan }) => {
	const { state, setState } = useContext(AppContext);
	const navigate = useNavigate();

	const isValidPlan = () => {
		if (state.isPlan) {
			setState({
				...state,
				errorMessage: undefined,
			});
			navigate(`/multi-step-form-main/${next}`);
		} else {
			setState({
				...state,
				errorMessage: 'Please select a plan before continuing.',
			});
		}
	};
	const onNextClick = () => {
		if (isValid) return navigate(next);
		if (nextStep) return navigate(`/multi-step-form-main/${next}`);
	};

	const onPrevClick = () => navigate(-1);

	return (
		<div className='buttonNav__container'>
			{back && (
				<button
					className='buttonNav__back'
					onClick={onPrevClick}
				>
					Go Back
				</button>
			)}
			{inSelectPlan ? (
				<button
					className='buttonNav__next'
					onClick={isValidPlan}
				>
					Next Step
				</button>
			) : (
				<button
					className='buttonNav__next'
					type='submit'
					onClick={onNextClick}
				>
					Next Step
				</button>
			)}
		</div>
	);
};

export default ButtonNav;
