import { FiPhone, FiMail, FiLinkedin } from 'react-icons/fi'

export default function Connect({ isDark }) {
  return (
    <section id="connect" className={`py-16 sm:py-20 border-t ${isDark ? 'border-slate-800' : 'border-gray-100'}`}>
      <div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">Let's Connect</h2>
        <p className={`text-xl mb-16 leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
          Feel free to reach out for collaboration, inquiries, or more details - I'm happy to connect!
        </p>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 lg:gap-16 items-start sm:items-center flex-wrap">
          <a href="tel:+919619990942" className={`flex items-center gap-3 hover:opacity-70 transition ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
            <FiPhone size={28} />
            <span className="text-lg font-medium">+91-9619990942</span>
          </a>

          <a href="mailto:dollyagri@gmail.com" className={`flex items-center gap-3 hover:opacity-70 transition ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
            <FiMail size={28} />
            <span className="text-lg font-medium">dollygogri@gmail.com</span>
          </a>

          <a href="https://www.linkedin.com/in/dollygagri" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-3 hover:opacity-70 transition ${isDark ? 'text-slate-200' : 'text-gray-900'}`}>
            <FiLinkedin size={28} />
            <span className="text-lg font-medium">www.linkedin.com/in/dollygogri</span>
          </a>
        </div>
      </div>
    </section>
  )
}
