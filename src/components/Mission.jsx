const Mission = () => {
  return (
    <section id="mission" className="relative py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2400&auto=format&fit=crop)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/90 via-secondary-800/90 to-secondary-900/90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white text-gray-800 rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg opacity-90">
                To promote and support women's active participation in politics and governance by providing training, resources, and advocacy that empowers women to become effective leaders and decision-makers in Nigeria.
              </p>
            </div>
            <div className="bg-white text-gray-800 rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
              <div className="text-6xl mb-6">👁️</div>
              <h3 className="text-3xl font-bold mb-6 text-secondary-700">Our Vision</h3>
              <p className="text-lg leading-relaxed text-gray-700">
                A Nigeria where women have equal representation and voice in all political and governance structures, leading to more inclusive, equitable, and prosperous communities for all.
              </p>
            </div>
          </div>
          <div className="mt-16 bg-white/95 backdrop-blur-sm rounded-2xl p-10 shadow-2xl">
            <h3 className="text-3xl font-bold mb-8 text-gray-800 text-center">Core Values</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-4xl">💪</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-lg">Empowerment</h4>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-4xl">🤝</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-lg">Inclusion</h4>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-4xl">⚖️</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-lg">Equality</h4>
              </div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-4xl">✨</span>
                </div>
                <h4 className="font-semibold text-gray-800 text-lg">Integrity</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission
