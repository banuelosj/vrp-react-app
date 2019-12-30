import React from 'react';
//import TextAreaLarge from './TextAreaLarge';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import './FormStyle.css';

const FormComponent = () => {
    return (
        <div className="my-form" style={{paddingLeft: '30px'}}>
        <Formik
            initialValues = {{
                orders: '',
                depots: '',
                routes: ''
            }}
            validationSchema = {Yup.object({
                orders: Yup.string()
                    .required('Required'),
                depots: Yup.string()
                    .required('Required'),
                routes: Yup.string()
                    .required('Required')
            })}
            onSubmit = {(values, {setSubmitting }) => {
                setTimeout( ()=> {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            <Form>
                <label htmlFor="orders">Orders</label>
                <Field name="orders" as="textarea" className="form-input"/>
                <ErrorMessage component={redError} name="orders"/>
                <label htmlFor="depots">Depots</label>
                <Field name="depots" as="textarea" className="form-input"/>
                <ErrorMessage component={redError} name="depots" />
                <label htmlFor="routes">Routes</label>
                <Field name="routes" as="textarea" className="form-input" />
                <ErrorMessage name="routes" component={redError} />
                <br />
                <button type="submit">Submit</button>
            </Form>
        </Formik>
        </div>
    );
};

const redError = styled.p`
    color: #D12B27
`;

// const FormComponent = () => {
//     return (
//         <div>
//             <TextAreaLarge id="orders" label="Orders:"/>
//         </div>
//     );
// }

export default FormComponent;