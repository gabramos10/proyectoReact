import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';




const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'DEFAULT DESCRIPTION', false, LEVELS.NORMAL);

    const changeState = (id) =>{
        console.log('todo: cambiar estado de una tarea')
    }

    return (
        <div>
            <div>
                your Task:
            </div>
            {/*todo: aplicar un for/map para renderizar una lista*/}
            <TaskComponent task={defaultTask} ></TaskComponent>    
        </div>
    );
};


export default TaskListComponent;
