import { useNavigate, useParams } from 'react-router-dom'

const Article = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  // Article data (in production, this would come from an API or database)
  const articles = {
    1: {
      id: 1,
      title: "Breaking Barriers: Women Leading the 2026 Elections",
      content: `
        <p class="lead-text">As Nigeria prepares for the 2026 elections, a remarkable shift is taking place in the political landscape. More women than ever before are stepping forward to run for public office, breaking traditional barriers and challenging the status quo.</p>

        <h2>A Historic Moment</h2>
        <p>The 2026 election cycle marks a turning point in Nigerian politics. According to recent data from the Independent National Electoral Commission (INEC), women constitute 35% of all registered candidates—a significant increase from the 20% recorded in 2023.</p>

        <p>This surge in women's political participation didn't happen by accident. It's the result of years of deliberate effort by organizations like electHER Nigeria, which has been working tirelessly to train, mentor, and support women aspiring to political leadership.</p>

        <h2>Overcoming Challenges</h2>
        <p>Despite the progress, women candidates still face significant challenges:</p>
        <ul>
          <li><strong>Financial Barriers:</strong> Campaign costs remain prohibitively high, with women often having less access to funding networks than their male counterparts.</li>
          <li><strong>Cultural Resistance:</strong> Deep-seated beliefs about women's roles in society continue to pose obstacles in certain regions.</li>
          <li><strong>Security Concerns:</strong> Women candidates and their supporters face heightened security risks during campaign activities.</li>
          <li><strong>Media Representation:</strong> Female candidates often receive less media coverage or face biased reporting compared to male candidates.</li>
        </ul>

        <h2>Success Stories</h2>
        <p>Among the inspiring stories emerging from this election cycle is that of Hauwa Tanko, a former participant in electHER Nigeria's leadership training program. Running for a seat in the Kaduna State House of Assembly, Hauwa's campaign has gained significant traction by focusing on education reform and women's economic empowerment.</p>

        <p>"The training I received from electHER Nigeria gave me not just the skills, but the confidence to believe I could make a difference," Hauwa shares. "Now I'm proving that a woman from a rural community can compete at the highest levels of politics."</p>

        <h2>The Road Ahead</h2>
        <p>As we move closer to election day, the momentum behind women's political participation continues to build. Political analysts predict that regardless of the election outcomes, this cycle will be remembered as a watershed moment for gender equality in Nigerian politics.</p>

        <p>The increased number of women candidates is already influencing political discourse, with issues like maternal healthcare, gender-based violence, and girls' education receiving unprecedented attention in campaign debates.</p>

        <h2>How You Can Support</h2>
        <p>There are several ways to support women candidates in the 2026 elections:</p>
        <ul>
          <li>Volunteer for campaigns of women candidates in your constituency</li>
          <li>Donate to organizations supporting women's political participation</li>
          <li>Use your social media platforms to amplify women candidates' messages</li>
          <li>Attend campaign rallies and town halls featuring women candidates</li>
          <li>Most importantly, exercise your right to vote</li>
        </ul>

        <blockquote>
          "When women participate in politics, we don't just add voices to the conversation—we transform the entire dialogue. Our presence brings new perspectives, priorities, and solutions that benefit everyone in society."
          <footer>— Dr. Ngozi Okonjo-Iweala, Former Finance Minister</footer>
        </blockquote>

        <h2>Conclusion</h2>
        <p>The 2026 elections represent more than just a political contest—they're a testament to the resilience and determination of Nigerian women who refuse to be sidelined in shaping their nation's future. As electHER Nigeria continues to train and support women candidates, we're not just preparing individuals for elections; we're building a more inclusive, representative democracy for all Nigerians.</p>

        <p>The journey toward equal political representation is far from over, but with each election cycle, we're moving closer to a Nigeria where women's leadership is not the exception, but the norm.</p>
      `,
      author: "Amina Okafor",
      date: "January 28, 2026",
      readTime: "8 min read",
      category: "Leadership",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2400&auto=format&fit=crop",
      tags: ["Elections", "Women in Politics", "Leadership", "2026"]
    },
    2: {
      id: 2,
      title: "Success Story: From Training to State Assembly",
      content: `
        <p class="lead-text">When Chidinma Eze enrolled in electHER Nigeria's Political Leadership Training Program in 2024, she had a dream but no clear path forward. Today, she serves as a member of the Enugu State House of Assembly, representing her constituency with distinction.</p>

        <h2>The Beginning of a Journey</h2>
        <p>Chidinma's story began in a small community in Enugu State, where she worked as a secondary school teacher. Despite her passion for community development and public service, the idea of running for political office seemed like an impossible dream.</p>

        <p>"I saw problems in my community every day—poor infrastructure, inadequate healthcare facilities, limited opportunities for young people—but I didn't know how to be part of the solution," Chidinma recalls. "That's when I learned about electHER Nigeria's training program."</p>

        <h2>The Training Experience</h2>
        <p>The six-month intensive training program covered everything from campaign management and public speaking to policy development and media relations. But more than just skills, Chidinma gained something invaluable: a network of like-minded women and the confidence to pursue her political aspirations.</p>

        <p>"The program was transformative," she explains. "We learned from experienced politicians, practiced debate techniques, developed policy proposals, and even participated in mock campaigns. By the end, I didn't just think I could run for office—I knew I could win."</p>

        <h2>The Campaign Trail</h2>
        <p>Armed with her new skills and the support of electHER Nigeria's mentorship network, Chidinma announced her candidacy for the State Assembly in 2025. The campaign was challenging:</p>

        <ul>
          <li>She faced skepticism from party leaders who doubted a woman could win in her constituency</li>
          <li>Fundraising proved difficult, with many potential donors preferring to support male candidates</li>
          <li>She encountered cultural resistance in certain parts of her constituency</li>
        </ul>

        <p>However, Chidinma's grassroots approach and clear policy platform resonated with voters. She focused on education reform, youth empowerment, and women's economic development—issues that mattered to her constituents.</p>

        <h2>Election Day Victory</h2>
        <p>On election day, Chidinma won her seat with 54% of the vote, defeating two male opponents. Her victory was celebrated not just in her constituency, but across Nigeria as a symbol of what's possible when women are given the tools and support to pursue political leadership.</p>

        <blockquote>
          "Winning was amazing, but what moved me most was the young girls who came to congratulate me. They said, 'If you can do it, we can too.' That's when I realized this victory was bigger than me."
          <footer>— Hon. Chidinma Eze, Member, Enugu State House of Assembly</footer>
        </blockquote>

        <h2>Making an Impact</h2>
        <p>Since taking office, Chidinma has sponsored three major bills:</p>
        <ul>
          <li>The Girls' Education Support Fund Bill, which provides scholarships to girls from low-income families</li>
          <li>The Youth Skills Acquisition Initiative, creating vocational training centers across the state</li>
          <li>The Women's Economic Empowerment Act, facilitating access to microloans for women entrepreneurs</li>
        </ul>

        <p>She's also known for her innovative approach to constituent engagement, holding monthly town halls and maintaining an active social media presence to stay connected with her constituents.</p>

        <h2>Paying It Forward</h2>
        <p>Chidinma hasn't forgotten where she started. She regularly mentors other women interested in politics and actively participates in electHER Nigeria's training programs as a guest speaker.</p>

        <p>"I want other women to know that if a teacher from a small community can make it to the State Assembly, they can achieve their political dreams too," she says. "The key is to get the right training, build your network, and never give up."</p>

        <h2>Lessons Learned</h2>
        <p>When asked about the most important lessons from her journey, Chidinma emphasizes:</p>
        <ul>
          <li><strong>Preparation is crucial:</strong> The training program gave her the foundation she needed</li>
          <li><strong>Authenticity matters:</strong> She won by being herself and addressing real issues</li>
          <li><strong>Support networks are essential:</strong> No one succeeds alone in politics</li>
          <li><strong>Resilience is key:</strong> Setbacks are inevitable, but persistence pays off</li>
        </ul>

        <h2>Looking Ahead</h2>
        <p>As Chidinma settles into her second year in office, she's already thinking about how to deepen her impact. She's working on new legislation addressing climate change adaptation for farming communities and improving maternal healthcare in rural areas.</p>

        <p>Her story continues to inspire countless women across Nigeria to consider political leadership as a viable path to creating the change they want to see in their communities.</p>
      `,
      author: "Chioma Nwosu",
      date: "January 15, 2026",
      readTime: "10 min read",
      category: "Success Stories",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=2400&auto=format&fit=crop",
      tags: ["Success Story", "Training", "State Assembly", "Mentorship"]
    },
    3: {
      id: 3,
      title: "Policy Advocacy: New Gender Equality Bill Gains Support",
      content: `
        <p class="lead-text">After months of intensive advocacy and stakeholder engagement, the Gender Equality in Political Representation Bill is gaining unprecedented support in the National Assembly, marking a potential breakthrough for women's political participation in Nigeria.</p>

        <h2>The Bill's Provisions</h2>
        <p>The proposed legislation, championed by electHER Nigeria and coalition partners, includes several groundbreaking provisions:</p>
        <ul>
          <li>Mandatory 35% quota for women in all elected and appointed political positions</li>
          <li>Special campaign funding for women candidates from underrepresented communities</li>
          <li>Legal protection against gender-based discrimination in political processes</li>
          <li>Penalties for political parties that fail to meet gender quotas</li>
        </ul>

        <h2>The Advocacy Journey</h2>
        <p>The journey to this point has been long and challenging. electHER Nigeria, along with partner organizations, has been working on this legislation for over three years, conducting research, building coalitions, and engaging with lawmakers across party lines.</p>

        <p>"We started by documenting the barriers women face in politics," explains Dr. Aisha Mohammed, Director of Policy at electHER Nigeria. "We then used this evidence to develop policy recommendations that could address these systemic challenges."</p>

        <h2>Building Support</h2>
        <p>The advocacy campaign has employed multiple strategies:</p>
        <ul>
          <li><strong>Research and Evidence:</strong> Publishing data on women's underrepresentation and its impact on governance</li>
          <li><strong>Stakeholder Engagement:</strong> Working with traditional leaders, religious organizations, and community groups</li>
          <li><strong>Lawmaker Education:</strong> Briefing sessions with members of the National Assembly</li>
          <li><strong>Public Mobilization:</strong> Social media campaigns and town halls to build grassroots support</li>
          <li><strong>International Partnerships:</strong> Learning from successful quota systems in other countries</li>
        </ul>

        <h2>Current Status</h2>
        <p>As of January 2026, the bill has secured support from:</p>
        <ul>
          <li>45 Senators (out of 109)</li>
          <li>158 House of Representatives members (out of 360)</li>
          <li>12 state governors</li>
          <li>Multiple civil society organizations and women's groups</li>
        </ul>

        <p>While these numbers are encouraging, advocates acknowledge that more work is needed to secure the two-thirds majority required for constitutional amendments.</p>

        <h2>Opposition and Challenges</h2>
        <p>The bill faces opposition from several quarters:</p>
        <ul>
          <li>Some argue that quotas undermine merit-based selection</li>
          <li>Others claim the bill conflicts with cultural and religious traditions</li>
          <li>Concerns about implementation and enforcement mechanisms</li>
        </ul>

        <p>electHER Nigeria and its partners have addressed these concerns through evidence-based advocacy, showing how quotas in other countries have actually improved governance quality and democratic outcomes.</p>

        <blockquote>
          "Quotas are not about choosing less qualified candidates; they're about ensuring qualified women get the opportunities they deserve. Research shows that when women participate in governance, entire communities benefit."
          <footer>— Dr. Aisha Mohammed, Director of Policy, electHER Nigeria</footer>
        </blockquote>

        <h2>International Context</h2>
        <p>Nigeria would be joining over 130 countries worldwide that have implemented some form of gender quotas in politics. Countries like Rwanda, where women hold 61% of parliamentary seats, demonstrate the transformative potential of such measures.</p>

        <h2>Next Steps</h2>
        <p>The advocacy campaign is entering a critical phase:</p>
        <ul>
          <li>Intensified engagement with undecided lawmakers</li>
          <li>Regional town halls to build grassroots pressure</li>
          <li>Media campaigns highlighting the bill's benefits</li>
          <li>Coalition building with other reform-minded groups</li>
        </ul>

        <h2>How Citizens Can Help</h2>
        <p>Public support is crucial for the bill's passage:</p>
        <ul>
          <li>Contact your representatives to express support</li>
          <li>Share information about the bill on social media</li>
          <li>Participate in advocacy events and campaigns</li>
          <li>Join electHER Nigeria's grassroots mobilization efforts</li>
        </ul>

        <h2>Looking Forward</h2>
        <p>If passed, this legislation would represent a historic milestone for Nigerian democracy. It would not only increase women's political representation but also send a powerful message about the country's commitment to gender equality.</p>

        <p>As the debate continues, one thing is clear: the conversation about women's political participation in Nigeria has fundamentally shifted. Win or lose, the advocacy campaign has already achieved something remarkable—making gender equality in politics a central issue in national discourse.</p>
      `,
      author: "Fatima Ibrahim",
      date: "January 10, 2026",
      readTime: "7 min read",
      category: "Advocacy",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=2400&auto=format&fit=crop",
      tags: ["Policy", "Advocacy", "Gender Equality", "Legislation"]
    },
    4: {
      id: 4,
      title: "Mentorship Matters: Building Tomorrow's Leaders Today",
      content: `
        <p class="lead-text">At the heart of electHER Nigeria's success in developing women political leaders is our mentorship program—a carefully designed initiative that pairs aspiring politicians with experienced women in public service.</p>

        <h2>The Power of Mentorship</h2>
        <p>Research consistently shows that mentorship is one of the most effective tools for developing leaders. In the political arena, where networks and insider knowledge can make the difference between success and failure, having an experienced mentor is invaluable.</p>

        <p>"Politics can be an intimidating and complex field," explains Grace Adeyemi, Director of the Mentorship Program. "A good mentor helps navigate this complexity, providing guidance, opening doors, and offering support during challenging times."</p>

        <h2>How the Program Works</h2>
        <p>The electHER Nigeria mentorship program operates on a structured 12-month cycle:</p>

        <h3>Month 1-2: Orientation and Matching</h3>
        <ul>
          <li>Mentees complete a comprehensive assessment of their political goals and needs</li>
          <li>Careful matching with mentors based on interests, location, and career stage</li>
          <li>Kickoff meeting to establish expectations and goals</li>
        </ul>

        <h3>Month 3-10: Active Mentorship</h3>
        <ul>
          <li>Monthly one-on-one meetings (in-person or virtual)</li>
          <li>Access to mentor's network and events</li>
          <li>Real-time guidance on campaigns or policy initiatives</li>
          <li>Quarterly group sessions with all mentor-mentee pairs</li>
        </ul>

        <h3>Month 11-12: Transition and Evaluation</h3>
        <ul>
          <li>Assessment of progress toward stated goals</li>
          <li>Development of post-program action plan</li>
          <li>Graduation ceremony and networking event</li>
        </ul>

        <h2>Meet Our Mentors</h2>
        <p>The program boasts an impressive roster of mentors, including:</p>
        <ul>
          <li>Serving and former members of the National Assembly</li>
          <li>State Assembly representatives and commissioners</li>
          <li>Local government chairpersons</li>
          <li>Successful women in party leadership positions</li>
          <li>Appointed officials in various government agencies</li>
        </ul>

        <h2>Success Stories</h2>
        <p>The impact of the mentorship program is evident in the success of its participants:</p>

        <h3>Blessing Okoro - Local Government Chairperson</h3>
        <p>"My mentor, a former state commissioner, taught me everything from how to build a campaign team to managing the demands of public office. When I faced opposition from within my party, she helped me navigate the politics without compromising my values."</p>

        <h3>Hadiza Bello - Party Youth Leader</h3>
        <p>"Being mentored by a senior party leader gave me insights I could never have gained from books or training alone. She introduced me to key people, invited me to important meetings, and helped me understand how decisions really get made."</p>

        <h2>What Makes It Effective</h2>
        <p>Several factors contribute to the program's success:</p>

        <h3>1. Careful Matching</h3>
        <p>We invest significant time in matching mentors and mentees based on compatibility, shared interests, and complementary strengths.</p>

        <h3>2. Structured Yet Flexible</h3>
        <p>While we provide a framework, pairs have flexibility to customize their mentorship relationship based on specific needs.</p>

        <h3>3. Support Systems</h3>
        <p>Program coordinators check in regularly, providing resources and addressing any challenges that arise.</p>

        <h3>4. Community Building</h3>
        <p>Beyond individual pairs, we create a community where all participants can network and learn from each other.</p>

        <h3>5. Long-term Focus</h3>
        <p>We encourage relationships that extend beyond the formal program period, creating lasting support networks.</p>

        <h2>Mentor Perspectives</h2>
        <p>Mentors also find the experience rewarding:</p>

        <blockquote>
          "Mentoring the next generation of women leaders is one of the most fulfilling things I do. I see myself in these young women—their passion, their challenges, their determination. Being able to make their journey a little easier brings me immense joy."
          <footer>— Hon. Dr. Amina Suleiman, Former Member of House of Representatives and Mentor</footer>
        </blockquote>

        <h2>Beyond Politics</h2>
        <p>While focused on political leadership, the mentorship program delivers benefits that extend beyond politics:</p>
        <ul>
          <li>Enhanced professional networks</li>
          <li>Improved leadership and communication skills</li>
          <li>Greater confidence in public speaking and advocacy</li>
          <li>Better understanding of policy and governance</li>
          <li>Lifelong friendships and support systems</li>
        </ul>

        <h2>Becoming a Mentor or Mentee</h2>
        <p>The program welcomes applications from:</p>

        <h3>Prospective Mentees:</h3>
        <ul>
          <li>Women interested in running for political office</li>
          <li>Those seeking party leadership positions</li>
          <li>Aspiring policy advocates and political activists</li>
          <li>Anyone committed to women's political empowerment</li>
        </ul>

        <h3>Prospective Mentors:</h3>
        <ul>
          <li>Women with experience in elected or appointed positions</li>
          <li>Party leaders and political strategists</li>
          <li>Former politicians with valuable insights to share</li>
          <li>Those passionate about developing the next generation of leaders</li>
        </ul>

        <h2>The Ripple Effect</h2>
        <p>Perhaps the most exciting aspect of the mentorship program is its multiplier effect. Many former mentees are now mentors themselves, creating a growing network of women supporting women in politics.</p>

        <p>"We're not just building individual leaders," Grace notes. "We're creating a movement—a sisterhood of women committed to transforming Nigerian politics from the inside out."</p>

        <h2>Join Us</h2>
        <p>Whether you're seeking guidance on your political journey or have wisdom to share with the next generation, the electHER Nigeria mentorship program offers a proven pathway to making a real difference.</p>

        <p>Applications for the next cohort open in March 2026. Visit our website or contact our program office for more information.</p>
      `,
      author: "Grace Adeyemi",
      date: "December 20, 2025",
      readTime: "9 min read",
      category: "Programs",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2400&auto=format&fit=crop",
      tags: ["Mentorship", "Leadership Development", "Programs", "Women in Politics"]
    }
  }

  const article = articles[id]

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Article Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="bg-secondary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary-700 transition"
          >
            Return to Home
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${article.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
        <div className="relative h-full container mx-auto px-6 flex items-end pb-12">
          <div className="text-white max-w-4xl">
            <span className="inline-block bg-secondary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {article.category}
            </span>
            <h1 className="text-5xl font-bold mb-4">{article.title}</h1>
            <div className="flex items-center text-gray-200 text-sm">
              <span>{article.author}</span>
              <span className="mx-3">•</span>
              <span>{article.date}</span>
              <span className="mx-3">•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-10 md:p-16">
            {/* Article Body */}
            <div 
              className="prose prose-lg max-w-none article-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className="bg-secondary-100 text-secondary-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Share this article</h3>
              <div className="flex gap-4">
                <button className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button className="bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button className="bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Back Button */}
            <div className="mt-12">
              <button 
                onClick={() => navigate('/')}
                className="inline-flex items-center text-secondary-600 font-semibold hover:text-secondary-700 transition group"
              >
                <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                Back to Articles
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles for Article Content */}
      <style>{`
        .article-content .lead-text {
          font-size: 1.25rem;
          line-height: 1.75;
          color: #4b5563;
          margin-bottom: 2rem;
          font-weight: 400;
        }
        .article-content h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #1f2937;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
        }
        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #374151;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .article-content p {
          font-size: 1.125rem;
          line-height: 1.875;
          color: #4b5563;
          margin-bottom: 1.5rem;
        }
        .article-content ul, .article-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
        }
        .article-content li {
          font-size: 1.125rem;
          line-height: 1.875;
          color: #4b5563;
          margin-bottom: 0.75rem;
        }
        .article-content blockquote {
          border-left: 4px solid #0284c7;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #374151;
          background: #f0f9ff;
          padding: 1.5rem;
          border-radius: 0.5rem;
        }
        .article-content blockquote footer {
          margin-top: 1rem;
          font-style: normal;
          font-weight: 600;
          color: #0284c7;
          font-size: 0.95rem;
        }
        .article-content strong {
          color: #1f2937;
          font-weight: 600;
        }
      `}</style>
    </div>
  )
}

export default Article
