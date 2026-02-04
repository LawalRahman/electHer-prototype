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
      <nav className="container mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.svg" alt="electHER Nigeria" className="h-8 sm:h-10" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-secondary-600 transition font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-secondary-600 transition font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('mission')} className="text-gray-700 hover:text-secondary-600 transition font-medium">
              Mission
            </button>
            <button onClick={() => scrollToSection('programs')} className="text-gray-700 hover:text-secondary-600 transition font-medium">
              Programs
            </button>
            <button onClick={() => scrollToSection('team')} className="text-gray-700 hover:text-secondary-600 transition font-medium">
              Team
            </button>
            <button onClick={() => scrollToSection('articles')} className="text-gray-700 hover:text-secondary-600 transition font-medium">
              Articles
            </button>
            <button onClick={() => scrollToSection('reports')} className="text-gray-700 hover:text-secondary-600 transition font-medium">
              Reports
            </button>
            <button onClick={() => scrollToSection('get-involved')} className="text-gray-700 hover:text-secondary-600 transition font-medium">
              Get Involved
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-secondary-600 transition font-medium">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
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
          <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 pt-4">
            <button onClick={() => scrollToSection('hero')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-secondary-50 hover:text-secondary-600 transition rounded-lg font-medium">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-secondary-50 hover:text-secondary-600 transition rounded-lg font-medium">
              About
            </button>
            <button onClick={() => scrollToSection('mission')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-secondary-50 hover:text-secondary-600 transition rounded-lg font-medium">
              Mission
            </button>
            <button onClick={() => scrollToSection('programs')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-secondary-50 hover:text-secondary-600 transition rounded-lg font-medium">
              Programs
            </button>
            <button onClick={() => scrollToSection('team')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-secondary-50 hover:text-secondary-600 transition rounded-lg font-medium">
              Team
            </button>
            <button onClick={() => scrollToSection('articles')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-secondary-50 hover:text-secondary-600 transition rounded-lg font-medium">
              Articles
            </button>
            <button onClick={() => scrollToSection('reports')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-secondary-50 hover:text-secondary-600 transition rounded-lg font-medium">
              Reports
            </button>
            <button onClick={() => scrollToSection('get-involved')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-secondary-50 hover:text-secondary-600 transition rounded-lg font-medium">
              Get Involved
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-secondary-50 hover:text-secondary-600 transition rounded-lg font-medium">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
