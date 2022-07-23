import getRemoteImg, { makeSrcSet } from "@/utils/getImg"

const Img = ({ src, srcSet = [768, 1024, 1280, 1600, 1920], metadata }) => {
  return (
    <img
      src={getRemoteImg(src)}
      srcSet={makeSrcSet(src, srcSet)}
      alt={metadata?.alt}
      title={metadata?.title}
      width={metadata?.width}
      height={metadata?.height}
      loading="lazy"
    />
    // <picture>
    //   <source srcSet={makeSrcSet(src, srcSet)} type="image/webp" />
    //   <img src={getRemoteImg(src)} alt={metadata?.alt} />
    // </picture>
  )
}

export default Img