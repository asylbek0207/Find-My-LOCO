import {Field} from "formik";
import React from "react";
import './styles.scss';

function TextField({name, label, errors, touched, ...props}) {
    return (
        <div className="text-field">
            <div className="text-field__label">{label}</div>
            <Field name={name} {...props} />
            <div className="text-field__helper-text">
                {errors[name] && touched[name] ? errors[name] : ''}
            </div>
        </div>
    )
}

export default TextField;