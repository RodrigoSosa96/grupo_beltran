export function getLocalImg(name) {
  return new URL(`./img/${name}`, import.meta.url).href
}


