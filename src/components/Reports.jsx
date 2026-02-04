const Reports = () => {
  const reports = [
    {
      id: 1,
      year: "2025",
      title: "Annual Impact Report 2025",
      description: "A comprehensive review of our achievements, challenges, and impact on women's political participation throughout 2025.",
      pages: 48,
      size: "3.2 MB",
      highlights: [
        "500+ women trained in leadership",
        "50 women elected to public office",
        "25 states reached nationwide"
      ],
      downloadUrl: "#"
    },
    {
      id: 2,
      year: "2024",
      title: "Annual Impact Report 2024",
      description: "Documenting our journey in empowering women leaders and the significant milestones achieved in 2024.",
      pages: 42,
      size: "2.8 MB",
      highlights: [
        "400+ women trained",
        "35 women elected",
        "20 states coverage"
      ],
      downloadUrl: "#"
    },
    {
      id: 3,
      year: "2023",
      title: "Annual Impact Report 2023",
      description: "Highlights from our foundation year and the groundwork laid for transforming women's political participation.",
      pages: 36,
      size: "2.5 MB",
      highlights: [
        "250+ women trained",
        "20 women elected",
        "15 states coverage"
      ],
      downloadUrl: "#"
    }
  ]

  const handleDownload = (year, title) => {
    // In a real application, this would trigger an actual PDF download
    alert(`Downloading ${title}...\n\nIn production, this would download the actual PDF file.`)
  }

  return (
    <section id="reports" className="relative py-24 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2400&auto=format&fit=crop)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-secondary-900/92 via-secondary-800/92 to-secondary-900/92"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 text-white">
              Annual Reports
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Download our comprehensive annual reports to see the impact we're making in advancing women's political participation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {reports.map((report) => (
              <div key={report.id} className="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-br from-secondary-600 to-secondary-700 p-8 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-6xl font-bold opacity-30">{report.year}</span>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{report.title}</h3>
                  <div className="flex items-center text-sm opacity-90">
                    <span>{report.pages} pages</span>
                    <span className="mx-2">•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {report.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {report.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-700">
                          <svg className="w-5 h-5 mr-2 text-secondary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button 
                    onClick={() => handleDownload(report.year, report.title)}
                    className="w-full bg-gradient-to-r from-secondary-600 to-secondary-700 text-white py-3 rounded-xl font-semibold hover:from-secondary-700 hover:to-secondary-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center group"
                  >
                    <svg className="w-5 h-5 mr-2 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Looking for More Reports?</h3>
            <p className="text-gray-200 mb-6">
              Access our complete archive of reports, research papers, and publications
            </p>
            <button className="bg-white text-secondary-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-lg">
              Browse Archive
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reports
