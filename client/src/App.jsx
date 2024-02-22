import Header from "./components/Header"
import ScrollToTop from "./pages/Scrooltop"
import About from "./pages/about"
import Child from "./pages/child-labour-s"
import Home from "./pages/home"
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Womenunemployement from "./pages/women-unemployement"
import Politicalservice from "./pages/political-s"
import Abortionsservice from "./pages/abortions-service"
import Contact from "./pages/contact"
import Blogs from "./pages/Blogs"
import Blogpreview from "./pages/Blogview"
import Donatenow from "./pages/donatenow"
import Becomeamember from "./pages/becomeamember"
import Vasavi from "./components/Admin/Product"
// import WomenBlogs from "./pages/Blogs"

function App() {

  return (
    <>
      <BrowserRouter>
        {/* <FloatingWhatsApp phoneNumber='7734947734' accountName='Lana Exports' avatar={profile}/> */}
        <ScrollToTop /> 
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blogs' element={<Blogs/>}/>
          <Route path='/blogview' element={<Blogpreview/>}/>
          <Route path='/childlabour' element={<Child/>}/>
          <Route path='/donate' element={<Donatenow/>}/>
          <Route path='/becomeamember' element={<Becomeamember/>}/>
          <Route path='/womenunemployement' element={<Womenunemployement/>}/>
          <Route path='/politicalservice' element={<Politicalservice/>}/>
          <Route path='/abortionsservice' element={<Abortionsservice/>}/>
          <Route path='/vasaviadmin' element={<Vasavi/>}/>
        </Routes>
        {/* <Footer/> */}
    </BrowserRouter>
    </>
  )
}

export default App
