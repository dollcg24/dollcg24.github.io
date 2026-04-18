const SITE_URL = 'https://dollcg24.github.io'
const DEFAULT_DESCRIPTION = 'UX Designer with 4 years of experience crafting simple, user-friendly digital solutions. Explore my portfolio of design case studies.'
const DEFAULT_IMAGE = `${SITE_URL}/images/shared/hero.png`

export default function SEO({ title, description, path = '', image }) {
  const fullTitle = title
    ? `${title} | Dolly Gogri – UX Designer`
    : 'Dolly Gogri — UX Designer Portfolio'
  const metaDescription = description || DEFAULT_DESCRIPTION
  const metaImage = image ? `${SITE_URL}${image}` : DEFAULT_IMAGE
  const canonical = `${SITE_URL}${path}`

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={metaImage} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </>
  )
}
