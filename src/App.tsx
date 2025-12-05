import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import NowShowing from './pages/NowShowing'
import ComingSoon from './pages/ComingSoon'
import MovieDetail from './pages/MovieDetail'
import Locations from './pages/Locations'
import LocationDetail from './pages/LocationDetail'
import Loyalty from './pages/Loyalty'
import GiftCards from './pages/GiftCards'
import SpecialEvents from './pages/SpecialEvents'
import PrivateHire from './pages/PrivateHire'
import Blog from './pages/Blog'
import Careers from './pages/Careers'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/now" element={<NowShowing />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/locations/:id" element={<LocationDetail />} />
        <Route path="/loyalty" element={<Loyalty />} />
        <Route path="/gift-cards" element={<GiftCards />} />
        <Route path="/events" element={<SpecialEvents />} />
        <Route path="/private-hire" element={<PrivateHire />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
