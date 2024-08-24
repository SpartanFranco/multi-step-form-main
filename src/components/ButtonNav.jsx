import { useNavigate } from 'react-router-dom';

const ButtonNav = ({ back, next, isValid, nextStep }) => {
	const navigate = useNavigate();

	const onNextClick = () => {
		if (nextStep) return navigate(`/multi-step-form-main/${next}`);
		else if (isValid) return navigate(next);
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
			<button
				className='buttonNav__next'
				type='submit'
				onClick={onNextClick}
			>
				Next Step
			</button>
		</div>
	);
};

export default ButtonNav;
