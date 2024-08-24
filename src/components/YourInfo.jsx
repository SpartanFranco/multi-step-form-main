import ButtonNav from './ButtonNav';

import { useFormContext } from 'react-hook-form';

const YourInfo = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useFormContext();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className='container'>
			<h1>Personal info</h1>
			<p className='text'>
				{' '}
				Please provide your name, email address, and phone number.
			</p>

			<form
				className='yourinfo__form'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='yourinfo__divInputs name'>
					<label htmlFor='name'>Name</label>
					{errors.name && <p>{errors.name.message}</p>}
					<input
						type='text'
						id='name'
						{...register('name', {
							required: {
								value: true,
								message: 'This field is required',
							},
							minLength: {
								value: 3,
								message: 'El nombre debe tener mas de 3 caracteres',
							},
							maxLength: {
								value: 30,
								message: 'El nombre debe máximo 30 caracteres',
							},
						})}
						placeholder='e.g. Stephen King'
					/>
				</div>

				<div className='yourinfo__divInputs'>
					<label htmlFor='email'>Email Address</label>

					{errors.email && <p>This not an email</p>}
					<input
						id='email'
						type='email'
						{...register('email', {
							required: true,
							pattern: {
								value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
							},
						})}
						placeholder=' e.g. stephenking@lorem.com'
					/>
				</div>

				<div className='yourinfo__divInputs'>
					<label htmlFor='tel'>Phone Number</label>
					{errors.phone_number && <p>{errors.phone_number.message}</p>}
					<input
						type='tel'
						id='tel'
						{...register('phone_number', {
							required: {
								value: true,
								message: 'This field is required',
							},
							validate: (value) => !isNaN(value) || "You can't put text here",
						})}
						placeholder='e.g. +1 234 567 890'
					/>
				</div>

				<ButtonNav
					next={`select_plan`}
					isValid={isValid}
				/>
			</form>
		</div>
	);
};

export default YourInfo;
