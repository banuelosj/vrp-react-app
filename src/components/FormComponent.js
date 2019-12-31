import React from 'react';
//import TextAreaLarge from './TextAreaLarge';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import './FormStyle.css';

const FormComponent = (props) => {
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
                {/* <label htmlFor="orders">Orders</label>
                <Field name="orders" as="textarea" className="form-input"/>
                <ErrorMessage component={redError} name="orders"/>
                <label htmlFor="depots">Depots</label>
                <Field name="depots" as="textarea" className="form-input"/>
                <ErrorMessage component={redError} name="depots" />
                <label htmlFor="routes">Routes</label>
                <Field name="routes" as="textarea" className="form-input" />
                <ErrorMessage name="routes" component={redError} /> */}
                
                {props.inputArr.map((myinput, idx) => (
                    <div key={`myinput + #${idx + 1}`}>
                        <label htmlFor={myinput.name}>{myinput.name}</label>
                        <Field name={myinput.name} as="textarea" className="form-input" />
                        {errorChecker(myinput.name)}
                    </div>
                ))}
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



const errorChecker = (inputName) => {
    if(inputName === "orders" || inputName === "routes" || inputName === "depots"){
        return (
            <ErrorMessage name={inputName} component={redError} />
        );
    }
}

// const FormComponent = () => {
//     return (
//         <div>
//             <TextAreaLarge id="orders" label="Orders:"/>
//         </div>
//     );
// }

export default FormComponent;