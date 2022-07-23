function getRemoteImg() {
  let url
  if (process.env.NODE_ENV === 'development') {
    url = new URL(`../assets/img/`, import.meta.url).href
  } else {
    url = new URL("https://grupo-beltran.mo.cloudinary.net/media/").href;
  }

  return function (name, width) {
    if (width) {
      const search = "tx=c_scale," + "w_" +width;
      return new URL(name, url).href + "?" + search;
    }
    return new URL(name, url).href + "?tx=c_scale,w_auto";
  };
}

export function makeSrcSet(name, widths) {
  return widths.map((width) => {
    return `${getRemoteImg()(name, width)} ${width}w`;
  }).join(", ");

}


export default getRemoteImg()