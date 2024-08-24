import React from 'react';

const Confirm = () => {
	return (
		<div className='confirm__Container'>
			<img
				src='/src/assets/images/icon-thank-you.svg'
				alt='icon-thank-you'
			/>
			<h1>Thank you!</h1>
			<p>
				Thanks for confirming your subscription! We hope you have fun using our
				platform. If you ever need support, please feel free to email us at
				support@loremgaming.com.
			</p>
		</div>
	);
};

export default Confirm;
