import React, { useState, useEffect } from 'react'
import useFetch from './useFetch'
import './App.css'
import Title from './components/Title'
import Search from './components/Search'
import CoinList from './components/CoinList'
import CoinConfig from './components/CoinConfig'
import Loader from './components/Loader'

function App() {
  const [search, setSearch] = useState('')
  const [apiConfig, setApiConfig] = useState({
    vs_currency: "usd",
    per_page: 100,
    order: "market_cap_desc",
    page: 1,
    sparkline: false,
  })

  const URLEncode = obj => {
    const urlEncoded = new URLSearchParams(obj)
    return urlEncoded.toString()
  }

  // const {data: coins, isLoading, error} = useFetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  const {data: coins, isLoading, error} = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?" + URLEncode(apiConfig)
  )
  let filteredCoins

  if (coins && !error) {
    filteredCoins = coins.filter(coin => 
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
  }

  return (
    <div className="App">
      <Title text="Crypto Price Tracker" />

      <div className="main-config">
        <CoinConfig coinConfig={apiConfig} setCoinConfig={setApiConfig} />
        <Search search={search} setSearch={setSearch} />
      </div>

      {error && <div className="error">{ error }</div>}
      {isLoading && <Loader />}
      {filteredCoins && <CoinList coins={filteredCoins} coinConfig={apiConfig} />}
    </div>
  )
}

export default App
