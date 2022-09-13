/**
 * ejemplo de uso del metodo componentwillunmount para componente clase y
 * para hook para funcional
 * (componente va a desaparecer)
 */


import React, { Component, useEffect } from 'react'

export  class WillUnMount extends Component {

    componentWillUnmount(){
        console.log('comportamiento antes del que componente desaparezca')
    }
  render() {
    return (
      <div><h1>WillUnMount</h1></div>
    )
  }
}





export const WillUnMountHook = () => {

    useEffect(() => {
        //nada
        return () => {
            console.log('comportamiento antes del que componente desaparezca')
        };
    }, []);


    return (
        <div>
            
        </div>
    );
}



