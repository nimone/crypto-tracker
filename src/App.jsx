import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [coins, setCoins] = useState([])

  useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then(res => res.json())
      .then(data => {
        setCoins(data)
        console.log(data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>Crypto Price Tracker</h1>
    </div>
  )
}

export default App
