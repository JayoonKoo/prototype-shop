
export const ADD_TO_ORDER = 'ADD_TO_ORDER';
export const REMOVE = 'REMOVE'
export const REMOVE_ALL = 'REMOVE_ALL'


const reducer = (state, {type, payload}) => {
	switch(type) {
		case ADD_TO_ORDER: {
			const {id} = payload
			const finded = state.orders.find(order => order.id === id);
			if (!finded) {
				return {
					...state,
					orders: [...state.orders, {id, quantity: 1}]
				}
			} else {
				const newOrders = state.orders.map(order => {
					if (order.id === id) {
						return {
							id,
							quantity: order.quantity + 1
						}
					}
					return order
				})
				return {
					...state,
					orders: newOrders
				}
			}
		}
		case REMOVE: {
			const {id} = payload
			const nextOrder = state.orders.filter((order) => order.id !== id)
			return {
				...state,
				orders: nextOrder
			}
		}
		case REMOVE_ALL: {
			return {
				...state,
				orders: []
			}
		}
		default:
			return {
				...state
			}
	}
}

export default reducer
