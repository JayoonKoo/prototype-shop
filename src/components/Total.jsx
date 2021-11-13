import React, { useCallback, useContext } from 'react'
import AppStateContext from '../contexts/AppStateContext'
import {REMOVE_ALL} from '../reducer/AppReducer'

export default function Total({totalPrice}) {
	const {dispatch} = useContext(AppStateContext)

	const clickRemoveAll = useCallback(() => {
		dispatch({type: REMOVE_ALL})
	}, [dispatch])
	return (
		<div className="total">
			<hr />
			<div className="item">
				<div className="content">Total</div>
				<div className="actoin">
					<div className="price">$ {totalPrice}</div>
				</div>
				<button className="btn btn--link" onClick={clickRemoveAll}>
					<i className="icon icon--delete"></i>
				</button>
			</div>
			<button 
				className="btn btn--secondary" 
				style={{ width: "100%", marginTop: 10}}>
				Checkout
			</button>
		</div>
	)
}
