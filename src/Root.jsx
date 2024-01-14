import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'

export const Root = ({ store }) => (
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<App />}>
					<Route path=':filter' element={<App />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</Provider>
)
