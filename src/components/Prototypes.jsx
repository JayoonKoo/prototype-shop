import React, { useContext } from 'react'
import AppStateContext from '../contexts/AppStateContext'
import Prototype from './Prototype'

export default function Prototypes() {
	const {prototypes} = useContext(AppStateContext)
	return (
		<main>
			<div className="prototypes">
				{prototypes.map((prototype) => {
					const {id, title, thumbnail, price, pieUrl, desc} = prototype
					return <Prototype key={id} id={id} title={title} thumbnail={thumbnail} price={price} pieUrl={pieUrl} desc={desc} /> })}
			</div>
		</main>
	)
}
