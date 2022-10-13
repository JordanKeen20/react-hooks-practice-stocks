import React from "react";

function SearchBar({name, setName, price, setPrice, filter}) {

  function handleChange(e){
    if(e.target.value === 'Alphebetically'){
      setName(!name)
      setPrice(false)
    }else{
      setPrice(!price)
      setName(true)
    }
  }


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={name}
          onChange={handleChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={price}
          onChange={handleChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={ e => filter(e.target.value)}>
          <option value = 'All'> All </option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
