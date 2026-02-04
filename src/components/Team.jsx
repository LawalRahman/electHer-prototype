const Team = () => {
  const team = [
    {
      name: "Dr. Amina Suleiman",
      role: "Executive Director",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      bio: "Leading electHER with over 15 years of experience in women's empowerment and political advocacy.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Blessing Okafor",
      role: "Program Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
      bio: "Oversees all training programs and mentorship initiatives across Nigeria.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Fatima Abdullahi",
      role: "Policy & Advocacy Lead",
      image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=800&auto=format&fit=crop",
      bio: "Champions policy reforms and advocates for women's political participation at all levels.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Chioma Nwosu",
      role: "Communications Manager",
      image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=800&auto=format&fit=crop",
      bio: "Manages all communications, media relations, and digital outreach initiatives.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Aisha Mohammed",
      role: "Research & Development",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800&auto=format&fit=crop",
      bio: "Leads research initiatives and data analysis to drive evidence-based programming.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Grace Eze",
      role: "Training Coordinator",
      image: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?q=80&w=800&auto=format&fit=crop",
      bio: "Coordinates leadership training workshops and skill development programs nationwide.",
      linkedin: "#",
      twitter: "#"
    }
  ]

  return (
    <section id="team" className="py-20 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2400&auto=format&fit=crop)' }}>
      <div className="absolute inset-0 bg-secondary-900/90"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet Our Team</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Dedicated professionals working together to empower women and transform Nigeria's political landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-secondary-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                
                <div className="flex space-x-4">
                  <a 
                    href={member.linkedin} 
                    className="text-secondary-600 hover:text-secondary-700 transition"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a 
                    href={member.twitter} 
                    className="text-secondary-600 hover:text-secondary-700 transition"
                    aria-label="Twitter"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
