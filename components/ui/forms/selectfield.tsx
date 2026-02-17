import React from 'react'
import { SelectFieldProps } from '@/types/form';
import { Controller } from 'react-hook-form';
import { Select,SelectTrigger,SelectValue,SelectContent,SelectItem } from '@/components/ui/select';
const SelectField = ({name,label,placeholder,options,control,error,required=false}:SelectFieldProps) => {
  return (
    <div className='space-y-2'>
        <label htmlFor={name} className='form-label'> {label} </label>
        <Controller 
        name={name} 
        control={control} 
        rules={{
            required:required? `Please Select ${label.toLowerCase()}`:false,
        }}
        render={({field})=>(
            <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger className='select-trigger'>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className='bg-gray-800 border-gray-600 text-white'>
                        {options.map((option:any)=>(<SelectItem key={option.value} value={option.value} className='focus:bg-gray-600 focus:text-white'>{option.label}</SelectItem>))}
                </SelectContent>
            </Select>
        )}
        />
        {error && <p className='text-red-500 text-sm'>{error.message}</p>}
    </div>
  )
}

export default SelectField