import { useEffect } from "react"


 function useTitle(tittle) {

    useEffect(()=> {
        document.title = `${tittle} `
    },[tittle])
  return null 
  
}
export default useTitle