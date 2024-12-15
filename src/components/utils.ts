export const getCharacterLink = (url: string) => {
  return `/character/${url.split("/").slice(-2, -1)[0]}`
}
