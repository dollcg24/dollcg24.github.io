import { createContext, useContext } from 'react'

export const ThemeContext = createContext(false)

export function PageShell({ children, className = '' }) {
  const isDark = useContext(ThemeContext)
  return (
    <div className={`min-h-screen transition ${isDark ? 'bg-slate-950 text-white' : 'bg-white text-gray-900'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {children}
      </div>
    </div>
  )
}

export function CaseStudyContainer({ children, className = '' }) {
  return (
    <PageShell className={className}>
      <div className="max-w-4xl mx-auto py-12 sm:py-16 space-y-12">
        {children}
      </div>
    </PageShell>
  )
}

export function Section({ children, className = '' }) {
  return (
    <div className={`space-y-4 sm:space-y-6 ${className}`}>
      {children}
    </div>
  )
}

export function Subtitle({ children, className = '' }) {
  return (
    <h2 className={`text-lg sm:text-xl font-bold leading-tight ${className}`}>
      {children}
    </h2>
  )
}

export function SubSubtitle({ children, className = '' }) {
  return (
    <h3 className={`text-sm sm:text-base font-semibold leading-tight ${className}`}>
      {children}
    </h3>
  )
}

export function Paragraph({ children, className = '' }) {
  const isDark = useContext(ThemeContext)
  return (
    <div className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'} ${className}`}>
      {children}
    </div>
  )
}

export function BulletList({ children, className = '' }) {
  return (
    <ul className={`list-disc pl-5 space-y-2 ${className}`}>
      {children}
    </ul>
  )
}

export function ListItem({ title, description, className = '' }) {
  if (title) {
    return (
      <li className={className}>
        <span className="font-semibold">{title}: </span>
        <span>{description}</span>
      </li>
    )
  }
  return <li className={className}>{description}</li>
}

export function ImageFrame({ src, alt, className = '' }) {
  const isDark = useContext(ThemeContext)
  return (
    <div className={`rounded-2xl overflow-hidden border ${isDark ? 'border-slate-800 bg-slate-900' : 'border-gray-200 bg-gray-50'} p-4 ${className}`}>
      <img src={src} alt={alt || ''} className="w-full h-auto rounded-xl" />
    </div>
  )
}

export function DesignPlaceholder({ label }) {
  const isDark = useContext(ThemeContext)
  return (
    <div className={`rounded-2xl border-2 border-dashed flex items-center justify-center min-h-48 sm:min-h-64 ${isDark ? 'border-slate-700 bg-slate-900 text-slate-500' : 'border-gray-300 bg-gray-50 text-gray-400'}`}>
      <span className="text-xs sm:text-sm font-medium">{label}</span>
    </div>
  )
}

export function PersonaCard({ name, role, bgColor, image, items, goals, painPoints, quote }) {
  const painList = Array.isArray(painPoints) ? painPoints : [painPoints]
  const goalList = Array.isArray(goals) ? goals : [goals]

  return (
    <div className={`rounded-2xl ${bgColor} text-white px-6 sm:px-8 py-6`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

        {/* Left: identity */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-bold text-base sm:text-lg leading-tight">{name}</p>
            {role && <p className="text-xs opacity-70 mt-0.5">{role}</p>}
          </div>
          <img
            src={image}
            alt={name}
            className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24"
          />
          <ul className="space-y-1.5 text-xs sm:text-sm">
            {items.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-semibold whitespace-nowrap">{item.label}:</span>
                <span className="opacity-85">{item.description}</span>
              </li>
            ))}
          </ul>
          {quote && (
            <p className="italic opacity-70 text-xs leading-relaxed">"{quote}"</p>
          )}
        </div>

        {/* Right: pain points + goals */}
        <div className="flex flex-col gap-5 text-xs sm:text-sm">
          <div>
            <p className="font-bold text-sm sm:text-base mb-2">Pain Points:</p>
            <ul className="space-y-1.5">
              {painList.map((point, i) => (
                <li key={i} className="flex gap-2 opacity-90">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-white flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold text-sm sm:text-base mb-2">Goals:</p>
            <ul className="space-y-1.5">
              {goalList.map((goal, i) => (
                <li key={i} className="flex gap-2 opacity-90">
                  <span className="mt-1.5 w-1 h-1 rounded-full bg-white flex-shrink-0" />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </div>
  )
}
