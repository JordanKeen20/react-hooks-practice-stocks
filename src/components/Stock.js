import React from "react";

function Stock({stock, Exchange}) {

  const {ticker, name, price} = stock

  return (
    <div>
      <div className="card">
        <div onClick = {e => Exchange(e, stock)}className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker} : {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
