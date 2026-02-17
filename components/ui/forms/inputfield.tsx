import React from 'react'
import { cn } from '@/lib/utils';import { InputFieldProps } from '@/types/form';

const InputField = ({name,label,type="text",placeholder,register,errors,validation,disabled,value}:FormInputProps) => {
    
  return (
    <div>
        <label htmlFor={name} className='form-label'> {label} </label>
        <input type={type} id={name} placeholder={placeholder} disabled={disabled} value={value} {...register(name,validation)} className={cn('form-input',{'opacity-50 cursor not cursor-not-allowed':disabled})} />
        {errors && <p className='text-red-500 text-sm'>{errors.message}</p>}
    </div>
  )
}

export default InputField