const Mission = () => {
  return (
    <section id="mission" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2400&auto=format&fit=crop)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/90 via-secondary-800/90 to-secondary-900/90"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-12 text-white">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white text-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="text-4xl sm:text-5xl mb-4">🎯</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Our Mission</h3>
              <p className="text-base sm:text-lg opacity-90">
                To promote and support women's active participation in politics and governance by providing training, resources, and advocacy that empowers women to become effective leaders and decision-makers in Nigeria.
              </p>
            </div>
            <div className="bg-white text-gray-800 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">👁️</div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6 text-secondary-700">Our Vision</h3>
              <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                A Nigeria where women have equal representation and voice in all political and governance structures, leading to more inclusive, equitable, and prosperous communities for all.
              </p>
            </div>
          </div>
          <div className="mt-8 md:mt-12 lg:mt-16 bg-white/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-center">Core Values</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <span className="text-2xl sm:text-3xl lg:text-4xl">💪</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">Empowerment</h4>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <span className="text-2xl sm:text-3xl lg:text-4xl">🤝</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">Inclusion</h4>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <span className="text-2xl sm:text-3xl lg:text-4xl">⚖️</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">Equality</h4>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg">
                  <span className="text-2xl sm:text-3xl lg:text-4xl">✨</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base lg:text-lg">Integrity</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
