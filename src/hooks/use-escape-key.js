import {useEffect} from "react"

export const useEscapeKey = (callback) =>{
    useEffect(() => {

        const escapeKeyPressed = (e) => {
          if(e.key === "Escape") {
            callback();
           }
        }
    
        window.addEventListener("keydown", e => escapeKeyPressed(e))
    
        return(() => {
          window.removeEventListener("keydown", e=> escapeKeyPressed(e));
        })
    }, [callback])

}