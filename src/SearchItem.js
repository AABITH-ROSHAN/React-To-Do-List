import React from 'react'
import { ImSearch } from "react-icons/im";

const SearchItem = ({search,setsearch}) => {
  return (
    <form  onSubmit={(e)=>e.preventDefault()}>
      <div className="searchform">
        <div className="input-container">
          <input
            className="inputsearch"
            type="text"
            required
            placeholder="Search Items..."
            value={search}
            onChange={(e) => setsearch(e.target.value)}
            list="search"
          />
          <button id="search" className="searchbutton">
            <ImSearch   role="button"  />
          </button>
        </div>
      </div>

    </form>
  )
}

export default SearchItem
