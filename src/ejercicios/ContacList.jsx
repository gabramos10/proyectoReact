import React, {useState} from 'react';
import { Contacto } from '../models/contactos.class.js';
import ContacComp from './Contac.jsx';
import ContactForm from './ContactForm.jsx';



const ContacList = () => {

    //const contacto1 = new Contacto('Gabriel', true)

    const contacto1 = {name:'gabriel', conect: true}
    const contacto2 = {name:'nicolas', conect: false}
    const contacto3 = {name:'matias', conect: false}

    const [contacto, setContacto] = useState([contacto1 , contacto2, contacto3]);


    function conectadoContac(contac){
        console.log('Contacto:', contac)
        const index = contacto.indexOf(contac);
        const tempTask = [...contacto];
        tempTask[index].conect = !tempTask[index].conect;
        //actualizaremos el estado del componente, adermas actualiza la iteracion y muesta la tarea actualizada
        setContacto(tempTask);

    }

    function eliminarContac(contac){
        console.log('Contacto eliminado:', contac)
        const index = contacto.indexOf(contac);
        const tempTask = [...contacto];
        tempTask.splice(index, 1);
        setContacto(tempTask);
    }

    function addContac(contac){
        console.log('New Contact:', contac)
        const index = contacto.indexOf(contac);
        const tempTask = [...contacto];
        tempTask.push(contac);
        setContacto(tempTask);
    }


    return (
        <div>
            <table style={{border: '1px solid black'}} >
                            <thead style={{border: '1px solid black'}}>
                                <tr>
                                    <th >Nombre</th>
                                    <th >Conectado</th>

                                </tr>
                            </thead>
                            <tbody style={{border: '1px solid black'}}>

                                {contacto.map((contacto, index) =>{                                    
                                    return(
                                    <ContacComp
                                        key={index}
                                        contac={contacto}
                                        conectados={conectadoContac}
                                        deleted={eliminarContac}
                                        >
                                    </ContacComp>
                                    )
                                })}
                            </tbody>    
                            {/* <tbody>
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
                                
                            {/* </tbody> */}
                        </table>

            <ContactForm add={addContac}></ContactForm>                         

        </div>
    );
}

export default ContacList;
