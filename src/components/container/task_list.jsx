import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskForm from '../pure/forms/taskForm';
import TaskComponent from '../pure/task';




const TaskListComponent = () => {

    const defaultTask1 = new Task('Example1', 'DESCRIPTION1', false, LEVELS.NORMAL);
    const defaultTask2 = new Task('Example2', 'DESCRIPTION2', true, LEVELS.URGENT);
    const defaultTask3 = new Task('Example3', 'DESCRIPTION3', false, LEVELS.BLOCKING);

    //estado del componente
    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
    const [loading, setLoading] = useState(true);

    //control de ciclo de vida
    useEffect(() => {

        console.log('Tasks State has benn modified');
        setLoading(false)
        return () => {
            console.log('TasksList component is going to unmount...');
        };
    }, [tasks]);
    

    const changeComplete = (id) =>{
        console.log('todo: cambiar estado de una tarea')
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    {/**card header {title} */}
                    <div className='card-header p-3'>
                        <h5>
                            Your Task:
                        </h5>
                    </div>
                    {/**card body {cintent} */}
                    <div className='card-body' data-mdb-perfect-scrollbar='true' style={{position: 'relative', height:'400px'}}>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Title</th>
                                    <th scope='col'>Description</th>
                                    <th scope='col'>Priority</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>    
                            <tbody>
                                { tasks.map((task, index) => {
                                    return(
                                        <TaskComponent key={index} task={task}> </TaskComponent>  
                                    )
                                })}

                                {/**iterar sobre una lista de tarea */}
                                
                            </tbody>                        
                        </table>
                    </div>
                    <TaskForm></TaskForm>
                </div>            
            </div>
            {/*todo: aplicar un for/map para renderizar una lista*/}
              
        </div>
    );
};


export default TaskListComponent;
