import AppContextProvider from './context/AppContext';
import AppRouter from './router/AppRouter';

function App() {
	return (
		<AppContextProvider>
			<AppRouter />
		</AppContextProvider>
	);
}

export default App;
