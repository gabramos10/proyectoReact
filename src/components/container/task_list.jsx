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
        setTimeout(() => {
            setLoading(false);
        },2000);
        
        return () => {
            console.log('TasksList component is going to unmount...');
        };
    }, [tasks]);
    

    function completeTask(task){
        console.log('complete this task:', task)
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].completed = !tempTask[index].completed;
        //actualizaremos el estado del componente, adermas actualiza la iteracion y muesta la tarea actualizada
        setTasks(tempTask);

    }

    function deleteTasks(task){
        console.log('complete this task:', task)
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);
    }

    function addTask(task){
        console.log('complete this task:', task)
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }



    const Table = () => {
        return(
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
                                        <TaskComponent 
                                            key={index} 
                                            task={task}
                                            complete={completeTask}
                                            deleted={deleteTasks}
                                            > 
                                        
                                        </TaskComponent>  
                                    )
                                })}

                                {/**iterar sobre una lista de tarea */}
                                
                            </tbody>                        
        </table>
        )
    }

    let tasksTable; 

    if(tasks.length > 0){
        tasksTable = <Table></Table>
    }else{
        tasksTable = (
            <div>
                <h3> There are no tasks to show</h3>
                <h4> please, create one</h4>
            </div>

        )
    }

    const loginStyle = {
        color: 'gray',
        fontSize:'30px',
        fontWeight: 'bold'
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
                        {/** add loading spinner */}
                        {loading ? (<p style={loginStyle}>Loading task...</p>) : tasksTable}
                    </div>
                    
                </div>            
            </div>
            {/*todo: aplicar un for/map para renderizar una lista*/}
            <TaskForm add={addTask} length={tasks.length}></TaskForm>
        </div>
    );
};


export default TaskListComponent;
