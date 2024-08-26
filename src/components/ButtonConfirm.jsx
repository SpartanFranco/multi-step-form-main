import React from 'react';

import { useNavigate } from 'react-router-dom';

const ButtonConfirm = () => {
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
				onClick={() => navigate('/multi-step-form-main/confirm')}
			>
				Confirm
			</button>
		</div>
	);
};

export default ButtonConfirm;
