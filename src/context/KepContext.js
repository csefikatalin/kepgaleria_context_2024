/*  */
import { lista } from '../adat';
import { createContext, useState } from "react";

export const KepContext=createContext("")

export const KepProvider=({children})=>{
    /* state lesz az index */
    const [index,setIndex]=useState(0)
   
    function bal(){
        /* index értékét egyel csökkentjük */
    }
    function jobb(){
        /* index értékét növeljük */
        let sv=index+1
        if (sv>=lista.length){
            sv=0
        }
        setIndex(sv)
    }
    function kepKivalszt(id){
        setIndex(id)
    }
    return (<KepContext.Provider value={{lista, index,jobb,bal, kepKivalszt}}>
        {children}
    </KepContext.Provider>)
}