import React from 'react';

const ContacComp = ({contac, conectados, deleted}) => {


    function conectado(){
        if (contac.conect) {
            return(<i onClick={() => conectados(contac)} className='bi-toggle-on task-action' style={{color: 'green'}}></i>) 
        }else{
            return(<i onClick={() => conectados(contac)} className='bi-toggle-on task-action' style={{color: 'grey'}}></i>)
        }
    }




    return (
        
            <tr style={{border: '1px solid black'}} >
                <td>
                    <span>{contac.name}</span>
                </td>            
                <td style={{align:'center', border: '1px solid black'}}>
                    {conectado()}   
                    <i className='bi-trash task-action' onClick={() => deleted(contac)} style={{color: 'tomato'}}></i>             
                </td>
            </tr>

            



        
    );
}

export default ContacComp;
