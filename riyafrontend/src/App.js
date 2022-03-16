import React from 'react'

import {
  About,
  Achievement,
  Experience,
  Footer,
  Header,
  Skills,
  Testimonial,
  Timeline,
  Work,
} from './container'
import { Navbar } from './components'
import './App.scss'

const App = () => (
  <div className='app'>
    <Navbar />
    <div className='app__border'>
      <Header />
      <Skills />
      <About />

      <Work />

      <Achievement />
      <Experience />
      {/* <Testimonial /> */}
      <Footer />
    </div>
  </div>
)

export default App
