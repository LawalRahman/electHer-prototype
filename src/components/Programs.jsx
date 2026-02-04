const Programs = () => {
  const programs = [
    {
      title: "Leadership Training",
      icon: "📚",
      description: "Comprehensive training programs that equip women with essential political leadership skills, campaign strategies, and governance knowledge.",
      highlights: ["Campaign Management", "Public Speaking", "Policy Development"]
    },
    {
      title: "Mentorship Program",
      icon: "👥",
      description: "Connect aspiring women leaders with experienced politicians and public servants who provide guidance and support throughout their political journey.",
      highlights: ["One-on-One Mentoring", "Networking Events", "Career Guidance"]
    },
    {
      title: "Advocacy & Research",
      icon: "📊",
      description: "Conduct research on women's political participation and advocate for policies that promote gender equality in governance and leadership.",
      highlights: ["Policy Research", "Legislative Advocacy", "Gender Mainstreaming"]
    },
    {
      title: "Campaign Support",
      icon: "🎤",
      description: "Provide financial, technical, and strategic support to women candidates running for political office at local, state, and national levels.",
      highlights: ["Fundraising Support", "Media Training", "Strategic Planning"]
    },
    {
      title: "Civic Education",
      icon: "🗳️",
      description: "Educate women and communities about their political rights, electoral processes, and the importance of women's participation in democracy.",
      highlights: ["Voter Education", "Rights Awareness", "Community Outreach"]
    },
    {
      title: "Women's Network",
      icon: "🌐",
      description: "Build a strong network of women leaders across Nigeria to share experiences, resources, and support each other's political aspirations.",
      highlights: ["Networking Forums", "Resource Sharing", "Collaboration Platforms"]
    }
  ]

  return (
    <section id="programs" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2400&auto=format&fit=crop)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/97 via-gray-50/97 to-white/97"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 md:mb-4 text-gray-800">
            Our Programs
          </h2>
          <p className="text-center text-base sm:text-lg text-gray-600 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
            We offer comprehensive programs designed to support women at every stage of their political journey
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6">{program.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">{program.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">{program.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <ul className="space-y-2">
                    {program.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 mr-2 text-secondary-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Programs
