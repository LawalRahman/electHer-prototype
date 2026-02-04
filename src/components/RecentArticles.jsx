import { Link } from 'react-router-dom'

const RecentArticles = () => {
  const articles = [
    {
      id: 1,
      title: "Breaking Barriers: Women Leading the 2026 Elections",
      excerpt: "A comprehensive look at the increasing number of women candidates in Nigeria's upcoming elections and their impact on political discourse.",
      date: "January 28, 2026",
      author: "Amina Okafor",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
      category: "Leadership"
    },
    {
      id: 2,
      title: "Success Story: From Training to State Assembly",
      excerpt: "Meet the women who completed our leadership program and successfully won seats in their local state assemblies.",
      date: "January 15, 2026",
      author: "Chioma Nwosu",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=800&auto=format&fit=crop",
      category: "Success Stories"
    },
    {
      id: 3,
      title: "Policy Advocacy: New Gender Equality Bill Gains Support",
      excerpt: "How electHER Nigeria's advocacy efforts are influencing legislative changes for women's political participation.",
      date: "January 10, 2026",
      author: "Fatima Ibrahim",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=800&auto=format&fit=crop",
      category: "Advocacy"
    },
    {
      id: 4,
      title: "Mentorship Matters: Building Tomorrow's Leaders Today",
      excerpt: "An inside look at our mentorship program connecting aspiring leaders with experienced women politicians.",
      date: "December 20, 2025",
      author: "Grace Adeyemi",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop",
      category: "Programs"
    }
  ]

  return (
    <section id="articles" className="relative py-12 sm:py-16 md:py-20 lg:py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2400&auto=format&fit=crop)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/97 via-gray-50/97 to-white/97"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-gray-800">
              Latest News & Articles
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Stay informed with our latest stories, insights, and updates on women's political empowerment across Nigeria
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {articles.map((article) => (
              <Link to={`/article/${article.id}`} key={article.id}>
              <article className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 sm:h-56 md:h-64 bg-cover bg-center" style={{ backgroundImage: `url(${article.image})` }}>
                  <div className="h-full bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6">
                    <span className="bg-secondary-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6 md:p-8">
                  <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                    <span>{article.date}</span>
                    <span className="mx-2">•</span>
                    <span>{article.author}</span>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3 hover:text-secondary-600 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  <button className="text-secondary-600 font-semibold hover:text-secondary-700 transition-colors inline-flex items-center group">
                    Read More
                    <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </article>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <button className="bg-gradient-to-r from-secondary-600 to-secondary-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:from-secondary-700 hover:to-secondary-800 transition-all shadow-xl hover:shadow-2xl transform hover:scale-105 min-h-[48px]">
              View All Articles
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentArticles
