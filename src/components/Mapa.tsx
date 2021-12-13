import { useEffect, useState, useRef } from 'react'

interface ContainerProps {
  tipo : string
  o_lat : number
  o_lon : number
  d_lat : number
  d_lon : number
}

const Mapa: React.FC<ContainerProps> = (props) => {

  var flag = true
  switch (props.tipo) {
    case 'search':
      flag = true;
      break;
    case 'directions':
      flag = false;
      break;
  }
  const vista = 'satellite'

  return (
    flag?
    <iframe width="600" height="450" loading="lazy" src={`https://www.google.com/maps/embed/v1/search?q=${props.o_lat}${props.o_lon}&key=AIzaSyD1TBUdvLxAsChqd_ruQSjvQ1FkHLVdjG0&maptype=satellite`}></iframe>
    : <iframe width="600" height="450" loading="lazy" src={`https://www.google.com/maps/embed/v1/directions?origin=${props.o_lat}${props.o_lon}&destination=${props.d_lat}${props.d_lon}&key=AIzaSyD1TBUdvLxAsChqd_ruQSjvQ1FkHLVdjG0&maptype=satellite`}></iframe>
  )
}

export default Mapa;