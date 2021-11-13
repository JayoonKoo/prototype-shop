import React, { useCallback, useContext  } from "react";
import AppStateContext from "../contexts/AppStateContext";
import { REMOVE } from "../reducer/AppReducer";

export default function Order({ id, quantity }) {
  const { prototypes, dispatch } = useContext(AppStateContext);
  const prototype = prototypes.find((p) => p.id === id);
  const clickRemove = useCallback(
    () => dispatch({ type: REMOVE, payload: { id } }),
    [dispatch, id]
  );

  return (
    <div className="item">
      <div className="img">
        <video src={prototype.thumbnail} />
      </div>
      <div className="content">
        <p className="title">
          {prototype.title} x {quantity}
        </p>
      </div>
      <div className="action">
        <p className="price">$ {prototype.price * quantity}</p>
        <button className="btn btn--link" onClick={clickRemove}>
          <i className="icon icon--cross"></i>
        </button>
      </div>
    </div>
  );
}
