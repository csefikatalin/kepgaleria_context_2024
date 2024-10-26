import React from 'react'
import KisKep from './KisKep'

function KisKepek(props) {
  return (
    <>
    {
        props.lista.map((kep,i)=>{
            return(
                <KisKep kep={kep} key={i} index={i}/>
            )
        })
    }
    </>
  )
}

export default KisKepek