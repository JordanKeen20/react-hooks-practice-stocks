import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  let sorted = ''
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortedName, setSortedName] = useState(false);
  const [sortedPrice, setSortedPrice] = useState(false);
  const [filter, setFilter] = useState('All');
  const stockExchange = document.querySelector('.col-8')
  const stocksPortfolio = document.querySelector('.col-4')

  useEffect(()=>{
    fetch('http://localhost:3001/stocks')
      .then(r => r.json())
      .then(data => setStocks(data))
  },[])

  function handleStockExchange(e, stock){
    if(stockExchange.contains(e.target)){
      const newPortfolio = [...portfolio, stock]
        setPortfolio(newPortfolio)
    } else if (stocksPortfolio.contains(e.target)){
      const newPortfolio = portfolio.filter((co)=>co.id !== stock.id)
        setPortfolio(newPortfolio)
    }
  }

  if(sortedName === true){
    sorted = [...stocks].sort((a,b)=> a.price-b.price)
  } else {
    sorted = [...stocks]
  }

  const filterList = sorted.filter((stock)=>{
    if(filter === "All"){
      return true
    }else{
      return stock.type === filter
    }
  })

  return (
    <div>
      <SearchBar
     name = {sortedName}
     setName = {setSortedName}
     price = {sortedPrice}
     setPrice = {setSortedPrice}
     filter = {setFilter}
      />
      <div className="row">
        <div className="col-8">
          <StockContainer Exchange = {handleStockExchange} stockList = {filterList} />
        </div>
        <div className="col-4">
          <PortfolioContainer Exchange = {handleStockExchange} portfolio = {portfolio}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
