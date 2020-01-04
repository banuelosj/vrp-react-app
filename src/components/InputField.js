import React from 'react';
import { Field } from 'formik';
import SelectInput from './SelectInput';

const InputField = (props) => {
    const type = props.type;
    const name = props.name;

    switch(type) {
        case 'textarea':
            return <Field name={name} as={type} className="form-input" />;
        case 'select':
            return (
                <SelectInput name={name} type={type}></SelectInput>
            );
        default:
            return <Field name={name} className="form-input" placeHolder="No input type assigned"/>;
    }
}

export default InputField;