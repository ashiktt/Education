import React from 'react'
import { InputProp } from '..'

function Input({ type, name, value, onChange, className, lable }: InputProp) {
    return (
        <div>
            <label className="block text-gray-700">{lable}</label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={className}
            />
        </div>
    )
}

export default Input