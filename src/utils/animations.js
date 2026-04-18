const ease = [0.25, 0.46, 0.45, 0.94]
const pop = [0.22, 1, 0.36, 1]

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: pop } }
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease } }
}

export const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: pop } }
}

export const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: pop } }
}

// Used for images — blur gives a "photo developing" quality without being distracting
export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, filter: 'blur(6px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: pop } }
}

export const stagger = (delay = 0.1, childDelay = 0) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay, delayChildren: childDelay } }
})
