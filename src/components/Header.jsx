import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="electHER Nigeria" className="h-10" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-secondary-600 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-secondary-600 transition">
              About
            </button>
            <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-secondary-600 transition">
              Mission
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-secondary-600 transition">
              Programs
            </button>
            <button onClick={() => scrollToSection('articles')} className="text-gray-700 hover:text-secondary-600 transition">
              Articles
            </button>
            <button onClick={() => scrollToSection('reports')} className="text-gray-700 hover:text-secondary-600 transition">
              Reports
            </button>
            <button onClick={() => scrollToSection('get-involved')} className="text-gray-700 hover:text-secondary-600 transition">
              Get Involved
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-secondary-600 transition">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <button onClick={() => scrollToSection('hero')} className="block text-gray-700 hover:text-secondary-600 transition">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block text-gray-700 hover:text-secondary-600 transition">
              About
            </button>
            <button onClick={() => scrollToSection('mission')} className="block text-gray-700 hover:text-secondary-600 transition">
              Mission
            </button>
            <button onClick={() => scrollToSection('programs')} className="block text-gray-700 hover:text-secondary-600 transition">
              Programs
            </button>
            <button onClick={() => scrollToSection('articles')} className="block text-gray-700 hover:text-secondary-600 transition">
              Articles
            </button>
            <button onClick={() => scrollToSection('reports')} className="block text-gray-700 hover:text-secondary-600 transition">
              Reports
            </button>
            <button onClick={() => scrollToSection('get-involved')} className="block text-gray-700 hover:text-secondary-600 transition">
              Get Involved
            </button>
            <button onClick={() => scrollToSection('contact')} className="block text-gray-700 hover:text-secondary-600 transition">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
