import React from 'react';
import { createContext, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
	const [state, setState] = useState({
		plan: { title: '', price: 0 },
		isPlan: false,
		errorMessage: undefined,
		monthly: true,
		isConfirm: false,
		arrOns: [],
	});

	const methods = useForm({
		defaultValues: {
			name: '',
			email: '',
			phone_number: '',
			'Online service': false,
			'Larger storage': false,
			'Customizable Profile': false,
		},
	});

	const data = {
		state,
		setState,
	};

	return (
		<AppContext.Provider value={data}>
			<FormProvider {...methods}>{children}</FormProvider>
		</AppContext.Provider>
	);
};

export { AppContext };
export default AppContextProvider;
