import React from "react"

import "./App.css";
import Demo from './components/Demo'
import Hero from './components/Hero'
const App = () => {
  return (
    <div>
      <main>
        <div className = "main">
          <div className="gradient"></div>

        </div>
        <div className="app">
          <Hero />
          <Demo />
        </div>
      </main>
    </div>
  )
}

export default App