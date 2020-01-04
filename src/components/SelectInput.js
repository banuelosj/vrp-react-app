import React from 'react';
import { Field } from 'formik';

const SelectInput = (props) => {
    const name = props.name;
    const type = props.type;
    let selectOptions = [];

    fetch(process.env.PUBLIC_URL + './vrp-select-options.json')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            selectOptions = data.parameters.map((parameter) => {
                return parameter.param;
            });
            console.log(selectOptions);
        })
        .catch((err) => {
            console.log("failed to fetch select options: ", err);
        });

    switch (name) {
        case 'time_units':
            return (
                <Field name={name} as={type}>
                    <option value="">select time units</option>
                    <option value="Minutes">Minutes</option>
                    <option value="Hours">Hours</option>
                    <option value="Days">Days</option>
                    <option value="Seconds">Seconds</option>
                </Field>
            );
        case 'uturn_policy':
            return (
                <Field name={name} as={type}>
                    <option value="">select uturn-policy</option>
                    <option value="Allowed">Allowed</option>
                    <option value="Not Allowed">Not Allowed</option>
                    <option value="Allowed only at Intersections and Dead Ends">Allowed only at Intersections and Dead Ends</option>
                    <option value="Allowed only at Dead Ends">Allowed only at Dead Ends</option>
                </Field>
            );
        case 'distance_units':
            return (
                <Field name={name} as={type}>{selectOptions}</Field>
            );
        default:
            return (
                <Field name={name} as={type}>
                    <option>No name found</option>
                </Field>
            );
    }
}

export default SelectInput;