import React, {useRef} from 'react';
import PropTypes from 'prop-types'
import { Contacto } from '../models/contactos.class.js';

const ContactForm = ({add}) => {

    const nameRef = useRef('');

    function addTask(e){
        e.preventDefault();
        const newContac = new Contacto(
            nameRef.current.value,
            true
        );
        add(newContac);
   } 

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>

                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contac Name' />


                <button className='btn btn-success btn-lg ms-2' type='submit' >ADD CONTACTO</button>

            </div>
        </form>
    );

}

ContactForm.protoTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;
