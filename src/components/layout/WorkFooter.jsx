import { FiPhone, FiMail, FiLinkedin } from 'react-icons/fi'

export default function WorkFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <span className="text-lg font-medium whitespace-nowrap">Connect with me</span>
        <div className="flex items-center gap-8 sm:gap-12">
          <a href="tel:+919619990942" className="hover:opacity-70 transition" aria-label="Phone">
            <FiPhone size={22} />
          </a>
          <a href="mailto:dollygogri@gmail.com" className="hover:opacity-70 transition" aria-label="Email">
            <FiMail size={22} />
          </a>
          <a href="https://www.linkedin.com/in/dollygogri" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition" aria-label="LinkedIn">
            <FiLinkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}
