import { BrowserRouter as Router } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GetInvolved from './components/GetInvolved'
import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import Programs from './components/Programs'
import RecentArticles from './components/RecentArticles'
import Reports from './components/Reports'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-fixed bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2400&auto=format&fit=crop)' }}>
        <div className="min-h-screen flex flex-col bg-white/95 backdrop-blur-sm">
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Mission />
          <Programs />
          <RecentArticles />
          <Reports />
          <GetInvolved />
          <Contact />
        </main>
        <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App
