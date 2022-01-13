import {Field} from "formik";
import React from "react";
import './styles.scss';

function TextField({name, label, errors, touched, ...props}) {
    const notValid = errors[name] && touched[name];

    return (
        <div className={notValid ? 'text-field not-valid' : 'text-field'}>
            <div className="text-field__label">{label}</div>
            <Field name={name} {...props} />
            <div className="text-field__helper-text">
                { notValid ? errors[name] : '' }
            </div>
        </div>
    )
}

export default TextField;