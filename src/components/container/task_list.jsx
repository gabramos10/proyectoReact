import React, { useState, useEffect } from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';




const TaskListComponent = () => {

    const defaultTask = new Task('Example', 'DEFAULT DESCRIPTION', false, LEVELS.NORMAL);

    //estado del componente
    const [tasks, setTasks] = useState(defaultTask);
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
            <div>
                your Task:
            </div>
            {/*todo: aplicar un for/map para renderizar una lista*/}
            <TaskComponent task={defaultTask} ></TaskComponent>    
        </div>
    );
};


export default TaskListComponent;
