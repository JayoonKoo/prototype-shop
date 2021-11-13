import React from 'react'

const AppStateContext = React.createContext({
	orders: [],
	prototypes: [],
	dispatch: () => {}
})

export default AppStateContext
