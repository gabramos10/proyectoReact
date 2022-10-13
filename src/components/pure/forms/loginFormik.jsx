import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';


const loginEsquema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('email is required'),

        password: Yup.string()
                    .required('password is required')

    }
)

const LoginFormik = () => {

    const initialCredentials={
        email: '',
        password:''
    }

    return (
        <di>
            <h4>Login Formik</h4>

            <Formik
                //**initial values that the form */
                initialValues={initialCredentials}
                //*** Yup validaciones */
                validationSchema= {loginEsquema}
                //**on submit event */
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                    // guardamos los datos en la localstorage
                    localStorage.setItem('credentials', values)
                }}
            >
                {/** obtenemos prop de formik */}

                {props =>{
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                        
                    } = props

                    return(
                        <Form>
                            <label htmlFor="email">email :</label>
                            <Field id="email" type='email' name="email" placeholder="example@gmail.com" />

                            {/** error email */}
                            {
                                errors.email && touched.email && 
                                (
                                    <div className='error'>
                                        <p>{errors.email}</p>
                                    </div>
                                )
                            }

                            {/** error password */}
                            {
                                errors.password && touched.password && 
                                (
                                    <div className='error'>
                                        <p>{errors.password}</p>
                                    </div>
                                )
                            }

                            

                            <label htmlFor="password">password :</label>
                            <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                            />
                            <button type="submit">Login</button>

                            {isSubmitting ? (<p>Login your credential..</p>) : null }


                        </Form>
                    )
                }}

                
            

            </Formik>

        </di>

    );
}

export default LoginFormik;
