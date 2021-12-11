import { useEffect, useState, useRef } from 'react'

interface ContainerProps {
  coordX : number
  coordY : number
}

const Mapa: React.FC<ContainerProps> = (ContainerProps) => {
  return (
    <div>
      <p>{ContainerProps.coordX}</p>
      <p>{ContainerProps.coordY}</p>
    </div>
    
  )
}

export default Mapa;