import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../components/Main';
import YourInfo from '../components/YourInfo';
import SelectPlan from '../components/SelectPlan';
import AddOns from '../components/AddOns';
import Summary from '../components/Summary';

import Confirm from '../components/Confirm';
const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/multi-step-form-main'
					element={<Main />}
				>
					<Route
						path='/multi-step-form-main'
						element={<YourInfo />}
					/>
					<Route
						path='/multi-step-form-main/select_plan'
						element={<SelectPlan />}
					/>
					<Route
						path='/multi-step-form-main/add_ons'
						element={<AddOns />}
					/>
					<Route
						path='/multi-step-form-main/summary'
						element={<Summary />}
					/>
					<Route
						path='/multi-step-form-main/confirm'
						element={<Confirm />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default AppRouter;
