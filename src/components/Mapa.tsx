import { useEffect, useState, useRef } from 'react'
import './Mapa.css'

interface ContainerProps {
  coordX : number
  coordY : number
}

const Mapa: React.FC<ContainerProps> = (coordenadas) => {

  const tipo = 'search'
  const origen = ''
  const destino = ''
  const vista = 'satellite'

  return (
    //<iframe width="600" height="450" loading="lazy" src={`https://www.google.com/maps/embed/v1/directions?origin=${coordenadas.coordX}${coordenadas.coordY}&destination=-16.3479552-71.5622048&key=AIzaSyD1TBUdvLxAsChqd_ruQSjvQ1FkHLVdjG0`}></iframe>
    <iframe width="600" height="450" loading="lazy" src={`https://www.google.com/maps/embed/v1/${tipo}?q=${coordenadas.coordX}${coordenadas.coordY}&key=AIzaSyD1TBUdvLxAsChqd_ruQSjvQ1FkHLVdjG0&maptype=${vista}`}></iframe>
  )
}

export default Mapa;