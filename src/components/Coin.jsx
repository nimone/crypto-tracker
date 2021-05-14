import React from 'react'
import './Coin.css'

function Coin({ name, image, symbol, price, volume, priceChange, mktCap, vsCurrency }) {
	const currSymbols = {usd: '$', 'inr': '₹'}

	return (
		<div className="coin-container">
			<div className="coin-row">
				<div className="coin">
					<img src={ image } alt="crypto" />
					<h2>{ name }</h2>
					<p className="coin-symbol">{ symbol }</p>
				</div>
				<div className="coin-data">
					<p className="coin-price">
						{currSymbols[vsCurrency]}{price.toLocaleString()}
					</p>
					<p className="coin-volume">
						{currSymbols[vsCurrency]}{volume.toLocaleString()}
						</p>
					<p className={`coin-percent ${priceChange > 0 ? "green" : "red"}`}>
						{ priceChange.toFixed(2) }%
					</p>
					<p className="coin-marketcap">
						{currSymbols[vsCurrency]}{mktCap.toLocaleString()}
					</p>
				</div>
			</div>
		</div>
	)
}

function CoinHeader({ vsCurrency }) {
	vsCurrency = vsCurrency.toUpperCase()
	return (
		<div className="coin-header-container">
			<div className="coin-header-row">
				<ul className="coin-header">
					<li>Coin</li>
				</ul>
				<ul className="coin-data-header">
					<li>Price ({ vsCurrency })</li>
					<li>Volume ({ vsCurrency })</li>
					<li>Change (24h)</li>
					<li>Mkt. Cap ({ vsCurrency })</li>
				</ul>
			</div>
		</div>
	)
}

export { CoinHeader }
export default Coin