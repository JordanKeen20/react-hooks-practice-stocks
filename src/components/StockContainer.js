import React from "react";
import Stock from "./Stock";

function StockContainer({Exchange, stockList, portfolio}) {
  return (
    <div>
      <h2>Stocks</h2>
      {stockList.map(stock=>
      <Stock 
        key={stock.id}
        stock={stock} 
        portfolio={portfolio} 
        Exchange={Exchange}
         />)}
    </div>
  );
}

export default StockContainer;
