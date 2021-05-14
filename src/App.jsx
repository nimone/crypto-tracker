import React, { useState, useEffect } from 'react'
import './App.css'
import Coin from './components/Coin'

function App() {
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => res.json())
      .then(data => {
        setCoins(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])

  const handleSearch = e => {
    e.preventDefault
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="App">
      <h1>Crypto Price Tracker</h1>
      <div className="coin-search">
        <input 
          type="text" 
          placeholder="Search" 
          className="coin-input"
          onChange={handleSearch}
        />
      </div>
      <div className="coins">
        {filteredCoins.map(coin => (
          <Coin 
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            price={coin.current_price}
            volume={coin.total_volume}
          />
        ))}
      </div>
    </div>
  )
}

export default App
