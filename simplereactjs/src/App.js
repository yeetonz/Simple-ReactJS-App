import './styling.css'
import { useState, useEffect } from 'react';
import Coins from './components/Coins'
import Axios from 'axios'

function App() {
  const [coinList, SetCoinList] = useState([])
  const [searchQuery, SetSearchQuery] = useState("")
  const filteredList = coinList.filter((coin) => {
    return coin.name.toLowerCase().includes(searchQuery) || coin.symbol.toLowerCase().includes(searchQuery)
  })
  useEffect(() => {
    Axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false').then((response) => {
      SetCoinList(response.data)
    })
  }, [])
  return (
    <div className="App">
      <div className='top-header'>
      <h2>Simple ReactJS (w/ Crypto API)</h2>
        <input type="text" className="searchbox" onChange={(e) => {
          SetSearchQuery(e.target.value.toLowerCase())
        }} placeholder="Search for supported coins (Coinbase)"></input>
      </div>
      <div className='coins'>
        {filteredList.map((coin) => {
          return Coins(coin.name, coin.current_price, coin.image, coin.symbol)
        })}
      </div>
    </div>
  );
}

export default App;
