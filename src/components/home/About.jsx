import { FiExternalLink } from 'react-icons/fi'

export default function About({ isDark }) {
  return (
    <section id="about" className={`py-16 sm:py-20 border-t ${isDark ? 'border-slate-800' : 'border-gray-100'}`}>
      <div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-12">About Me</h2>
      <p className={`text-xl mb-10 max-w-3xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
        I'm a UX designer with 4 years of experience, focused on user-friendly designs. Crafting
        simple, impactful solutions that enhance user experiences.
      </p>
      <a
        href="#"
        className={`inline-flex items-center gap-2 border-2 px-6 py-3 rounded-xl font-medium transition ${isDark ? 'border-slate-300 text-slate-300 hover:bg-slate-900' : 'border-gray-900 text-gray-900 hover:bg-gray-50'}`}
      >
        Resume <FiExternalLink size={20} />
      </a>
      </div>
    </section>
  )
}
