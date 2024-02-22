import Banner from "./components/layouts/Banner"
import Blog from "./components/layouts/Blog"
import Client from "./components/layouts/Client"
import Creative from "./components/layouts/Creative"
import Footer from "./components/layouts/Footer"
import Navbar from "./components/layouts/Navbar"
import Our from "./components/layouts/Our"
import Who from "./components/layouts/Who"
import Work from "./components/layouts/Work"



function App() {
  

  return (
    <>
     <Navbar/>
      <Banner/>
      <Our/>
      <Who/>
      <Work/>
      <Creative/>
      <Client/>
      <Blog/>
      <Footer/>
    </>
  )
}

export default App
