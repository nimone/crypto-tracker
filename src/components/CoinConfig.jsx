import React from 'react'
import './CoinConfig.css'

function CoinConfig({ coinConfig, setCoinConfig }) {
	return (
		<div className="config">
	    <select 
	    	className="config-currency"
	      value={coinConfig.vs_currency}
	      onChange={e => setCoinConfig({...coinConfig, vs_currency: e.target.value})}
	    >
	      <option value="usd">USD</option>
	      <option value="inr">INR</option>
	    </select>
{/*	    <input 
	      type="number" 
	      min={1}
	      max={250}
	      value={coinConfig.per_page}
	      onChange={e => setCoinConfig({...coinConfig, per_page: e.target.value})}
	    />*/}
  	</div>
  )
}

export default CoinConfig