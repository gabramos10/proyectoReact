import React from 'react';

import {useLocation, useNavigate} from 'react-router-dom'

const AboutPage = () => {

    const location = useLocation();
    // const navigacion  = useNavigate();

    console.log('route' , location.pathname);

    // const navigate = (path) => {
    //     navigacion.push(path);
    // }

    // const goBack = () => {
    //     navigacion.goBack();
    // }

    return (
        <div>
            <h1>
                About / FAQs 
            </h1>
            <div>
                {/* <button onClick={() => navigate('/')}>
                    Go to Home
                </button>
                <button onClick={goBack}>
                    GO Back
                </button> */}
            </div>
        </div>
    );
}

export default AboutPage;
