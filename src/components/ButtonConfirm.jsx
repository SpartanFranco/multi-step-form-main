import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const ButtonConfirm = () => {
	const { state, setState } = useContext(AppContext);
	const { plan, arrOns } = state;

	const handleConfirm = () => {
		if (plan.title.length > 0 && arrOns.length > 0) {
			setState({ ...state, isConfirm: true });
			navigate('/multi-step-form-main/confirm');
		} else return;
	};
	const navigate = useNavigate();
	return (
		<div className='buttonNav__container'>
			<button
				className='buttonNav__back'
				onClick={() => navigate(-1)}
			>
				Go Back
			</button>

			<button
				className='buttonNav__confirm'
				type='submit'
				onClick={handleConfirm}
			>
				Confirm
			</button>
		</div>
	);
};

export default ButtonConfirm;
