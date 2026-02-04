const Hero = () => {
  return (
    <section id="hero" className="relative bg-secondary-600 text-white py-16 md:py-24 lg:py-32 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2400&auto=format&fit=crop)' }}>
      <div className="absolute inset-0 bg-secondary-600/90"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Empowering Women in Politics
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 opacity-90 px-4">
            Promoting women's political participation and inclusive leadership across Nigeria
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
            <button
              onClick={() => document.getElementById('get-involved').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-secondary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg text-base sm:text-lg min-h-[48px]"
            >
              Get Involved
            </button>
            <button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-secondary-600 transition text-base sm:text-lg min-h-[48px]"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
