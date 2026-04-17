import { useNavigate } from 'react-router-dom'

const projects = [
  {
    title: 'Sports Auction Application: Case Study',
    date: 'Oct 2024 - Feb 2025',
    image: '/images/sports-auction/thumbnail.png',
    background: 'bg-[#F2de04]',
    pageId: 'sports-auction'
  },
  {
    title: 'Overhauling Teacher Dashboard in LMS',
    date: 'Aug 2024 - Nov 2024',
    image: '/images/teacher-dashboard/thumbnail.png',
    background: 'bg-[#D5824A]',
    pageId: 'teacher-dashboard'
  },
  {
    title: 'Integrating AI in Teacher Evaluation in LMS',
    date: 'Jun 2024 - Aug 2024',
    image: '/images/ai-teacher-evaluation/thumbnail.png',
    background: 'bg-[#9cfc27]',
    pageId: 'ai-teacher-evaluation'
  },
  {
    title: 'Crime Investigation Virtual Labs',
    date: 'Sep 2020 - Jan 2021',
    image: '/images/crime-labs/thumbnail.png',
    background: 'bg-[#644F7E]',
    pageId: 'crime-labs'
  }
]

export default function Work({ isDark }) {
  const navigate = useNavigate()
  return (
    <section id="work" className={`py-16 sm:py-20 border-t ${isDark ? 'border-slate-800' : 'border-gray-100'}`}>
      <div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">My Work</h2>
      <p className={`text-lg mb-16 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>Select the cards to read more.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => project.pageId && navigate(`/${project.pageId}`)}
            className={`rounded-2xl overflow-hidden shadow-lg flex flex-col transition hover:shadow-2xl ${project.pageId ? 'cursor-pointer' : 'cursor-default'}`}
          >
            {/* Top: colored header with title and date */}
            <div className={`px-6 py-10 flex flex-col gap-3 backdrop-blur-md relative ${project.background}`}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover absolute inset-0 blur-3xl"
              />
              <h3 className="text-2xl sm:text-3xl z-2 text-white font-bold leading-tight h-[3.75rem] sm:h-[4.6875rem] overflow-hidden line-clamp-2">{project.title}</h3>
              <div className="bg-white/60 backdrop-blur-md border border-white inline-flex items-center self-start px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-base sm:text-lg font-semibold">
                {project.date}
              </div>
            </div>

            {/* Bottom: project image */}
            <div className="overflow-hidden h-[450px]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}
