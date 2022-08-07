import { useState } from 'react'
import '../../CSS/FormInput.css'

const FormInput = (props) => {
    const [focused, setFocused] = useState(false)

    const handleFocused = (focused) => {
        setFocused(true)
    }
    return (
        <div className='formInput'>
            <label>{props.label}</label>
            <input placeholder={props.placeholder} type={props.type} 
            ref={props.refer} onChange={props.onChange} required
            onBlur={handleFocused} focused={focused.toString()}/>
            <span className="errorSpan">{props.errorMessage}</span>
        </div>
    )
}

export default FormInput