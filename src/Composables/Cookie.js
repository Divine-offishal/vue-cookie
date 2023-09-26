export const useCookie = () => {

  const findCookie = (cookieName) => {
    let searchName = `${cookieName}=` 
    let decodeCookie = decodeURIComponent(document.cookie)
    const splitResult = decodeCookie.split(';')

    for (let index = 0; index < splitResult.length; index++) {
      let mainCookie = splitResult[index];
      while (mainCookie.charAt(0) == ' ') {
        mainCookie = mainCookie.substring(1)
      }

      if (mainCookie.indexOf(searchName) == 0) {
        console.log('It was found')
        return mainCookie.substring(searchName.length, mainCookie.length)
      }
    }
    return null
  }

  return { findCookie }

}