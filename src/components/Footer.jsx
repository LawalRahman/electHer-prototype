const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-secondary-400">electHER Nigeria</h3>
            <p className="text-gray-300 text-sm">
              Empowering women to lead and transform Nigeria's political landscape.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-secondary-400 transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('programs').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-secondary-400 transition">
                  Programs
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('get-involved').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-secondary-400 transition">
                  Get Involved
                </button>
              </li>
              <li>
                <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="text-gray-300 hover:text-secondary-400 transition">
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-300 hover:text-secondary-400 transition">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary-400 transition">News</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary-400 transition">Research</a></li>
              <li><a href="#" className="text-gray-300 hover:text-secondary-400 transition">Publications</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-3">
              Stay updated with our latest news and programs.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 rounded-l-lg text-gray-800 focus:outline-none text-sm"
              />
              <button className="bg-secondary-600 px-4 py-2 rounded-r-lg hover:bg-secondary-700 transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} electHER Nigeria. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-secondary-400 transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-secondary-400 transition">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-secondary-400 transition">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
