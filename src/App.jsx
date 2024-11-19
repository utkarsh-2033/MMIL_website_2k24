import { useState } from 'react'
import { Hero } from '../components/Hero'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { OurEvents} from '../components/OurEvents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero/>
      <OurEvents></OurEvents>
    </>
  )
}

export default App
