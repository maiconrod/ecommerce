import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import AOS from "aos" // import do AOS para efeito nos produtos
import "aos/dist/aos.css" //Efeito nos produtos
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Subscribe from './components/Subscribe/Subscribe'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup'

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false)
  const handlerOrderPopup = () => {
    setOrderPopup(!orderPopup)
  }

  //useEffect para o efeito na sessão dos pordutos
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh()
  }, [])

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
      <Navbar handlerOrderPopup={handlerOrderPopup}/>
      <Hero handlerOrderPopup={handlerOrderPopup}/>
      <Products />
      <TopProducts handlerOrderPopup={handlerOrderPopup}/>
      <Banner />
      <Subscribe />
      <Products />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  )
}

export default App