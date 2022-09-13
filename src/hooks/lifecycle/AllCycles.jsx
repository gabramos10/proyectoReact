import React, {useEffect} from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('componente creado')

        const intervalID = setInterval(() => {
            document.title= '${new Date()'
            console.log('actualizacion del componente')
        }, 1000)


        return () => {
            console.log('componewnte va a desaparecer');
            document.title= 'tiempo detenido';
            clearInterval(intervalID);
        };
    }, []);

    return (
        <div>
            
        </div>
    );
}

export default AllCycles;
