/**
 * ejemplo de uso del metodo de ciclo de vida 
 * en componente clase y el hook de ciclo de vida en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('antes que el componente sea añadido al Dom(renderice)')
    }


    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}




export const DidMountHokk = () => {

    useEffect(() => {
        console.log('antes que el componente sea añadido al Dom(renderice)')
        
    }, []);//[] solo una vez

    return (
        <div>
            <h1>DidMount</h1>
        </div>
    );
}



