import { useEffect, useState, useRef } from 'react'

interface ContainerProps {
  coordX : number
  coordY : number
}

const Mapa: React.FC<ContainerProps> = (coordenadas) => {
  return (
    <div>
      <p>{coordenadas.coordX}</p>
      <p>{coordenadas.coordY}</p>
    </div>
    
  )
}

export default Mapa;