import React from 'react'
import './Search.css'

function Search({ search, setSearch }) {
	return (
	<div className="search">
    <input 
      type="text" 
      placeholder="Search" 
      className="search-input"
      value={search}
      onChange={e => setSearch(e.target.value)}
    />
  </div>
  )
}

export default Search