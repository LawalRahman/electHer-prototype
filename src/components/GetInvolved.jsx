const GetInvolved = () => {
  const ways = [
    {
      title: "Volunteer",
      icon: "🙋‍♀️",
      description: "Join our team of dedicated volunteers and contribute your time and skills to support women in politics.",
      action: "Sign Up to Volunteer"
    },
    {
      title: "Donate",
      icon: "💝",
      description: "Support our programs and help us reach more women across Nigeria with your generous contributions.",
      action: "Make a Donation"
    },
    {
      title: "Partner",
      icon: "🤝",
      description: "Partner with us as an organization to amplify our impact and create lasting change together.",
      action: "Become a Partner"
    },
    {
      title: "Participate",
      icon: "✨",
      description: "Join our training programs, workshops, and events designed to build your political leadership skills.",
      action: "Explore Programs"
    }
  ]

  return (
    <section id="get-involved" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2400&auto=format&fit=crop)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-gray-50/95 to-white/95"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 text-gray-800">
            Get Involved
          </h2>
          <p className="text-center text-base sm:text-lg text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            Be part of the movement to empower women in Nigerian politics. There are many ways to support our mission.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {ways.map((way, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-2xl p-6 sm:p-8 hover:border-secondary-600 transition-all hover:shadow-2xl transform hover:-translate-y-2">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 text-center">{way.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800 text-center">{way.title}</h3>
                <p className="text-gray-600 mb-5 sm:mb-6 text-center text-sm sm:text-base">{way.description}</p>
                <button className="w-full bg-gradient-to-r from-secondary-600 to-secondary-700 text-white py-3 sm:py-3.5 rounded-full font-semibold hover:from-secondary-700 hover:to-secondary-800 transition-all shadow-lg hover:shadow-xl text-sm sm:text-base min-h-[48px]">
                  {way.action}
                </button>
              </div>
            ))}
          </div>
          <div className="mt-12 sm:mt-16 md:mt-20 bg-gradient-to-r from-secondary-600 via-secondary-700 to-secondary-600 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-white text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Make a Difference?</h3>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 px-4">
              Join hundreds of women and allies who are working to create a more inclusive political landscape in Nigeria.
            </p>
            <button className="bg-white text-secondary-600 px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-all shadow-2xl hover:shadow-3xl transform hover:scale-105 min-h-[48px]">
              Join Our Community
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInvolved
