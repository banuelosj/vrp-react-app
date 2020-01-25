import React from 'react';
import { Field } from 'formik';
import SelectInput from './SelectInput';

const InputField = (props) => {
    const type = props.type;
    const name = props.name;


    switch(type) {
        case 'input':
            return <Field name={name} />;
        case 'textarea':
            return <Field name={name} as={type} className="form-input" />;
        case 'select':
            if(props.name === "uturn_policy") {
                return (
                    <Field name={name} as={type}>
                        <option value="">select uturn-policy</option>
                        <option value="Allowed">Allowed</option>
                        <option value="Not Allowed">Not Allowed</option>
                        <option value="Allowed only at Intersections and Dead Ends">Allowed only at Intersections and Dead Ends</option>
                        <option value="Allowed only at Dead Ends">Allowed only at Dead Ends</option>
                    </Field> 
                )
            } else if(props.name === "time_units") {
                return (
                    // <SelectInput name={name} type={type}></SelectInput>
                    <Field name={name} as={type}>
                        <option value="">select time units</option>
                        <option value="Minutes">Minutes</option>
                        <option value="Hours">Hours</option>
                        <option value="Days">Days</option>
                        <option value="Seconds">Seconds</option>
                    </Field>
                );
            } else {
                //distance units
                return (
                    // <SelectInput name={name} type={type}></SelectInput>
                    <Field name={name} as={type}>
                        <option value="">select distance units</option>
                        <option value="Miles">Miles</option>
                        <option value="Kilometers">Kilometers</option>
                        <option value="Feet">Feet</option>
                        <option value="Meters">Meters</option>
                        <option value="Yards">Yards</option>
                        <option value="NauticalMiles">NauticalMiles</option>
                    </Field>
                );
            }   
        default:
            return <Field name={name} className="form-input" placeHolder="No input type assigned"/>;
    }
}

export default InputField;