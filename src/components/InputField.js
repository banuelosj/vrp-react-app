import React from 'react';
import { Field } from 'formik';

const InputField = (props) => {
    const type = props.type;
    const name = props.name;

    switch(type) {
        case 'textarea':
            return <Field name={name} as={type} className="form-input" />;
        case 'select':
            return (
                <Field name={name} as={type}>
                    <option value="">Select a Team</option>
                    <option value="Cowboys">Cowboys</option>
                    <option value="Patrios">Patriots</option>
                    <option value="Chiefs">Chiefs</option>
                    <option value="Giants">Giants</option>
                    <option value="Chargers"></option>
                </Field>
            );
        default:
            return <Field name={name} className="form-input" placeHolder="No input type assigned"/>;
    }
}

export default InputField;