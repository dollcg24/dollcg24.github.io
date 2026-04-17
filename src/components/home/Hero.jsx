export default function Hero({ isDark }) {
  return (
    <section id="home" className="py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
            Hi, I'm <span className="font-cherry">Dolly.</span>
          </h1>
          <p className={`text-xl sm:text-2xl mb-3 ${isDark ? 'text-slate-300' : ''}`}>
            I'm a <span className="font-bold">UX Designer</span>, dedicated
          </p>
          <p className={`text-xl sm:text-2xl ${isDark ? 'text-slate-300' : ''}`}>
            to creating <span className="font-bold">simple, user-friendly</span> digital solutions.
          </p>
        </div>
        <div>
          <img
            src="/images/shared/hero.png"
            alt="Dolly"
            className="w-full h-auto mx-auto max-w-lg rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  )
}
