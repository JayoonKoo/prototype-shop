import React, { useContext, useMemo } from 'react'
import AppStateContext from '../contexts/AppStateContext'
import Order from './Order'
import Total from './Total'

export default function Orders() {
	const {orders, prototypes} = useContext(AppStateContext)
	const totalPrice = useMemo(() => {
		return orders.map((order) => {
			const {id, quantity} = order
			const prototype = prototypes.find(p => p.id === id)
			return prototype.price * quantity
		}).reduce((l, r) => l + r, 0)
	}, [orders, prototypes])
	return (
		<>
		{
			orders.length === 0 ? 
			<aside>
				<div className="empty">
					<div className="title">You don't have any orders</div>
					<div className="subtitle">Click on a + to add an order</div>
				</div>
			</aside> :
			<aside>
				<div className="order">
					<div className="body">
						{orders.map(order => {
							return <Order key={order.id} id={order.id} quantity={order.quantity} />
						})}
					</div>
					<Total totalPrice={totalPrice} />
				</div>
			</aside>
		}
		</>
	)
}
