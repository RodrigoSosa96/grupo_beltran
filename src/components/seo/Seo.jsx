import { Helmet } from 'react-helmet'

export const Seo = ({ title, description, image, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Grupo Beltran" />
      <meta property="og:locale" content='es_AR' />
      {
        image &&
        <>
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={image} />
          <meta property="og:url" content={url} />
        </>
      }
    </Helmet>
  )

}