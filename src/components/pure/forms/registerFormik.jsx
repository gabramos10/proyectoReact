import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup';

//models

import {User} from '../../../models/user.class'
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', // to confirm password
        role: ROLES.USER
    }


    const registerSchema = Yup.object().shape(
        {   
            username: Yup.string()
                .min(6, 'UserName mas largo')
                .max(12, 'Username mas corto')
                .required('username requerido'),

            email: Yup.string()
                .email('Invalid email format')
                .required('email is required'),

            role: Yup.string()
                .oneOf([ROLES.USER, ROLES.ADMIN], 'you must select a role: User / Admin')
                .required('role is required'),
                
            password: Yup.string()
                .min(8,'password mas larga')
                .required('password is required'),

            confirm: Yup.string()
                .when("password", {
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'password must match!'
                    )
                }).required('you confirm the password')
            
        }

    )



    const submit = () =>{
        alert('register user')
    }

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues={initialValues}
                validationSchema= {registerSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));                    
                }}
            >
            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="username">Username :</label>
                            <Field id="username" type='text' name="username" placeholder="Your username" />

                            {/** error eusername */}
                            {
                                errors.username && touched.username && 
                                (
                                    <ErrorMessage name='username' component='div'></ErrorMessage>
                                )
                            }


                            <label htmlFor="email">email :</label>
                            <Field id="email" type='email' name="email" placeholder="example@gmail.com" />

                            {/** error email */}
                            {
                                errors.email && touched.email && 
                                (
                                    <ErrorMessage name='email' component='div'></ErrorMessage>
                                )
                            }

                            {/** error password */}
                            {
                                errors.password && touched.password && 
                                (
                                    <ErrorMessage name='password' component='div'></ErrorMessage>
                                )
                            }

                            

                            <label htmlFor="password">password :</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                            />


                             {/** error password */}
                             {
                                errors.confirm && touched.confirm && 
                                (
                                    <ErrorMessage name='confirm' component='div'></ErrorMessage>
                                )
                            }

                            

                            <label htmlFor="confirm">Confirm :</label>
                            <Field
                                id="confirm"
                                name="confirm"
                                placeholder="confirm password"
                                type="password"
                            />
                            <button type="submit">Register New User</button>

                            {isSubmitting ? (<p>sending your credential..</p>) : null }


                        </Form>
                    )
            }



            </Formik>
        </div>
    );
}

export default RegisterFormik;
