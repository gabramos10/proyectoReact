/**
 * ejemplo de componenter tipo clase que dispone de 
 * los metodos de ciclo de vida
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class lifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR: cuando se instancia el componente')
    }

    componentWillMount() {
        console.log('WillMount: antes del montaje del componente')
    }

    componentDidMount() {
        console.log('DidMount: justo al acabar el montaje del compopnete, antes de pintarlo')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps : si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * sirve para controlar si el componente debe o no actualizarse
         */
        //return true / false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate : justo antes de actualizarse')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate : justo despues de actualizarse')
    }
    }

    componentWillUnmount() {
        console.log('WillUnmount : justo antes de desaparecer')
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

lifeCycle.propTypes = {

};

export default lifeCycle;