import React from 'react'
import Coin, { CoinHeader } from './Coin'

function CoinList({ coins, coinConfig }) {
	return (
		<div className="coins">
      <CoinHeader vsCurrency={coinConfig.vs_currency} />

			{coins.map(coin => (
	      <Coin 
	        key={coin.id}
	        name={coin.name}
	        image={coin.image}
	        symbol={coin.symbol}
	        price={coin.current_price}
	        volume={coin.total_volume}
	        priceChange={coin.price_change_percentage_24h}
	        mktCap={coin.market_cap}
	        vsCurrency={coinConfig.vs_currency}
	      />
    	))}
		</div>
	)
}

export default CoinList
