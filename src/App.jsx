import React from 'react'
import './App.css'
import Navbar from './assets/Navbar'
import Card from './assets/Card'
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
        <Card
            key={item.id}
            {...item}
            
        />
    )
  })        
  return (
    <div className="App">
        <Navbar />
        <section>
          {cards}
        </section>
    </div>
  )
}

export default App