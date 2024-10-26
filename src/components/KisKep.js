import React, { useContext } from 'react'
import { KepContext } from '../context/KepContext'

function KisKep(props) {
  const {kepKivalszt} = useContext(KepContext)
  
  return (
    <div className='kiskep' onClick={()=>{kepKivalszt(props.index)}}>
        <img src={props.kep.src} alt={props.kep.cim}  />
    </div>
  )
}

export default KisKep