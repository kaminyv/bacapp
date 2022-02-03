import React from 'react';
import { Form } from 'react-bootstrap';

const Select = ({ options, defaultValue, value, onChange }) => {
    return (
        <Form.Select
            className='form__style'
            size="lg"
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option value="" disabled>
                {defaultValue}
            </option>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            ))}
        </Form.Select>
    );
};
export default Select
