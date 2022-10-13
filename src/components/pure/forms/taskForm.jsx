import React, {useRef} from 'react';
import PropTypes from 'prop-types'
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';

const TaskForm = ({add, length}) => {

    const nameRef =  useRef('');
    const descripcionRef =  useRef('');
    const levelRef =  useRef(LEVELS.NORMAL);

   function addTask(e){
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            descripcionRef.current.value,
            false,
            levelRef.current.value
        );
        add(newTask);
   } 

   const normalStyle = {
        color: 'blue',
        fontWeight: 'bold'
   }

   const urgentStyle = {
    color: 'yellow',
    fontWeight: 'bold'
    }

    const blockingStyle = {
        color: 'tomato',
        fontWeight: 'bold'
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center mb-4'>
            <div className='form-outline flex-fill'>

                <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Task Name' />

                <input ref={descripcionRef} id='inputDescrip' type='text' className='form-control form-control-lg' required placeholder='Task Description'  />

                {/* <label htmlFor='selectLevel' className='sr-only' >Prioridad</label> */}

                <select className='form-control form-control-lg' ref={levelRef} defaultValue={LEVELS.NORMAL} id='selectLevel'>
                    <option style={normalStyle} value={LEVELS.NORMAL} >Normal</option>
                    <option style={urgentStyle} value={LEVELS.URGENT} >URGENTE</option>
                    <option style={blockingStyle} value={LEVELS.BLOCKING} >Blocking</option>
                </select>

                <button className='btn btn-success btn-lg ms-2' type='submit' >
                    {length > 0 ? 'ADD New Task' : 'Create your firt task'}
                </button>

            </div>
        </form>
    );
}

TaskForm.protoTypes = {
    add: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired
}

export default TaskForm;
