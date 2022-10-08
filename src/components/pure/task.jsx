import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';

//importamos la hoja de estilo de task
import '../../styles/task.scss';
import { LEVELS } from '../../models/levels.enum';


const TaskComponent = ({ task, complete, deleted }) => {

    // useEffect(() => {
    //     console.log('tarea creada');
    //     return () => {
    //     console.log(`task: ${task.name} is going to unmount`);
    //     };
    // }, [task]);

    /**
     * funcion that return a badge
     * dependiendo  de un level o otro
     */
    function taskLevelBadge(){
        switch (task.level) {
            case LEVELS.NORMAL:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-primary'>
                        {task.level}
                    </span>
                </h6>)
            
            case LEVELS.URGENT:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-warning'>
                        {task.level}
                    </span>
                </h6>)

            case LEVELS.BLOCKING:
                return(
                <h6 className='mb-0'>
                    <span className='badge bg-danger'>
                        {task.level}
                    </span>
                </h6>)
        
            default:
                break;
        }
    }


    function taskCompleted(){
        if (task.completed) {
            return(<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>) 
        }else{
            return(<i onClick={() => complete(task)} className='bi-toggle-on task-action' style={{color: 'grey'}}></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{task.name}</span>
            </th>
            <td className='align-middle'>
                <span >{task.description}</span>
            </td>
            <td className='align-middle'>
                {/**ejecucion de funcion badge */}
                {taskLevelBadge()}
            </td>
            <td className='align-middle'>
                {/**sustituir por iconos */}
                {taskCompleted()}

                {/* <span >{task.completed ? 'completed' : 'pending'}</span> */}
                <i className='bi-trash task-action' onClick={() => deleted(task)} style={{color: 'tomato'}}></i>
            </td>

        </tr>



        // <div>
        //     <h2 className='task-name'>
        //         Nombre: {task.name}
        //     </h2>
        //     <h3>
        //         Descripcion: { task.description }
        //     </h3>
        //     <h4>
        //         Level: { task.level } 
        //     </h4>
        //     <h5>
        //         this task is: { task.completed ? 'COMPLETED':'PENDING' }
        //     </h5>
        // </div>
    );
};


TaskComponent.propTypes = {
    task: PropTypes.instanceOf( Task ).isRequired,
    complete: PropTypes.func.isRequired,
    deleted: PropTypes.func.isRequired

};


export default TaskComponent;
