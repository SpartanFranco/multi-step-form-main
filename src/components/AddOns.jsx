import React from 'react';
import ButtonNav from './ButtonNav';
import Add_OnsChecks from './Add_OnsChecks';

const AddOns = () => {
	return (
		<div className='container'>
			<h1>Pick add-ons</h1>
			<p className='text'>Add-ons help enhance your gaming experience.</p>
			<div className='addOns__container'>
				<Add_OnsChecks
					title={'Online service'}
					text={'Access to multiplayer games'}
					priceTime={1}
				/>
				<Add_OnsChecks
					title={'Larger storage'}
					text={'Extra 1TB of cloud save'}
					priceTime={2}
				/>
				<Add_OnsChecks
					title={'Customizable Profile'}
					text={'Custom theme on your profile'}
					priceTime={2}
				/>
			</div>

			<ButtonNav
				back={true}
				nextStep={true}
				next={'summary'}
			/>
		</div>
	);
};

export default AddOns;
