const About = () => {
  return (
    <section id="about" className="relative py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2400&auto=format&fit=crop)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/95 to-white/95"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            About electHER Nigeria
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <p className="text-lg text-gray-700 mb-6">
                electHER Nigeria is a non-governmental organization dedicated to transforming the political landscape by empowering women to take leadership roles in governance and public service.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We believe that inclusive leadership and equal representation are fundamental to building a stronger, more prosperous Nigeria.
              </p>
              <p className="text-lg text-gray-700">
                Through advocacy, training, and support programs, we're creating pathways for women to participate actively in politics and decision-making processes at all levels.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-2xl p-10 shadow-2xl border border-secondary-200">
              <h3 className="text-2xl font-bold text-secondary-700 mb-4">Our Impact</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-secondary-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mr-4">
                    500+
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Women Trained</p>
                    <p className="text-sm text-gray-600">In political leadership</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-secondary-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mr-4">
                    50+
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Women Elected</p>
                    <p className="text-sm text-gray-600">To public office</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-secondary-600 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-xl mr-4">
                    25
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">States</p>
                    <p className="text-sm text-gray-600">Across Nigeria</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
