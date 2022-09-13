/**
 * Ejemplo de uso de metodo componentDidUpdate en componente clase
 * y uso de hook en funcional
 */

import React, { Component, useEffect } from 'react'

export class DidUpdate extends Component {

  componentDidUpdate(){
    console.log('comportamiento cuandoel compo recibe nuevos props o cambia en su estado privado')
  }  
  render() {
    return (
      <div><h1>DidUpdate</h1></div>
    )
  }
}




export function DidUpdateHook() {

    useEffect(() => {
        console.log('comportamiento cuandoel compo recibe nuevos props o cambia en su estado privado ')
    });


  return (
    <div><h1>DidUpdate</h1></div>
  )
}


