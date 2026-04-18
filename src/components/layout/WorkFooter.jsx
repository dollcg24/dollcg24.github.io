import { FiPhone, FiMail, FiLinkedin } from 'react-icons/fi'

const contacts = [
  { href: 'tel:+919619990942', icon: FiPhone, label: '+91 9619 990 942' },
  { href: 'mailto:dollygogri@gmail.com', icon: FiMail, label: 'dollygogri@gmail.com' },
  { href: 'https://www.linkedin.com/in/dollygogri', icon: FiLinkedin, label: 'LinkedIn', external: true },
]

export default function WorkFooter() {
  return (
    <footer style={{ background: '#1F130A' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <p className="text-xs font-semibold tracking-widest uppercase" style={{ color: 'rgba(242,230,210,0.3)' }}>
            Dolly Gogri · UX Designer
          </p>
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-8">
            {contacts.map(({ href, icon: Icon, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="flex items-center gap-2 text-xs font-medium transition-colors duration-200"
                style={{ color: 'rgba(242,230,210,0.45)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#CF7A3E')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(242,230,210,0.45)')}
              >
                <Icon size={13} className="flex-shrink-0" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
