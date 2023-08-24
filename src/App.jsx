import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainNav from './components/MainNav'
import Header from './components/Header'
import Main from './components/Main'
import Newsletter from './components/NewsLetter'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MainNav />
      <Header />
      <Main />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
