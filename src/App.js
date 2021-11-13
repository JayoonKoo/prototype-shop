import Header from './components/Header'
import Prototypes from './components/Prototypes'
import Orders from './components/Orders'
import Footer from './components/Footer'
import AppStateContext from './contexts/AppStateContext'
import Reducer from './reducer/AppReducer'
import { useMemo, useReducer } from 'react'
import prototypes from './data/mockPrototypeData'

const initailState = {
	prototypes, 
	orders: []
}

function App() {
	const [state, dispatch] = useReducer(Reducer, initailState)
	const {prototypes, orders} = state

	const value = useMemo(() => ({prototypes, orders, dispatch}), [prototypes, orders])
	
  return (
		<AppStateContext.Provider value={value} >
			<Header />
			<div className="container">
				<Prototypes />
				<Orders />
				<Footer />
			</div>
		</AppStateContext.Provider>
  );
}

export default App;
