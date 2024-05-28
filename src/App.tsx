import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div>
    <Header/>
    <div className="px-8 md:px-12 lg:px-20">
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
