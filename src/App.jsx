import Navbar from "./components/Navbar/navbar"
import Intro from "./components/intro/Intro"
import Skills from "./components/skills/Skills"
import Works from "./components/works/Works"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
