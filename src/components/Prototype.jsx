import React, { useCallback, useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";
import {ADD_TO_ORDER} from '../reducer/AppReducer'

export default function Prototype({id, pieUrl, thumbnail, price, desc, title}) {
	const {dispatch} = useContext(AppStateContext)
	const clickAddOrder = useCallback(() => dispatch({type: ADD_TO_ORDER, payload: {id}}), [dispatch, id])
  return (
    <div className="prototype">
      <a href={pieUrl} target="_blank" rel="noreferrer">
        <div
          style={{
            padding: "25px 0 33px 0",
          }}
        >
          <video
            autoPlay
            loop
            playsInline
            className="prototype__artwork prototype__edit"
            src={thumbnail}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </a>

      <div className="prototype__body">
        <div className="prototype__title">
          <div className="btn btn--primary float--right" onClick={clickAddOrder}>
            <i className="icon icon--plus"></i>
          </div>
          {title}
        </div>
        <p className="prototype__price">$ {price}</p>
        <p className="prototype__desc">{desc}</p>
      </div>
    </div>
  );
}
