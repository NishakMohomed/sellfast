import Nav from '../components/navBar'
import Search from '../components/search'
import Items from '../components/item'
import Banner from '../components/banner'
import Link from '../components/link'
import About from '../components/about'
import Footer from '../components/footer'

const Home = () => {
  return (
    <>
      <Nav/>
      <Search/>
      <Items/>
      <Banner/>
      <Link/>
      <About/>
      <Footer/>
    </>
  )
}

export default Home