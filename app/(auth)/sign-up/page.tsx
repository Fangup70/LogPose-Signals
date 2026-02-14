'use client'
import React from 'react'
import { useForm, type SubmitHandler } from 'react-hook-form'

const SignUp = () => {
    const{
        register, handleSubmit, control, formState: {errors, isSubmitting}} = useForm<SignUpFormData>({
            defaultValues:{
                fullName:"",
                email:"",
                password:"",
                country:"India",
                investmentGoals:"Growth",
                riskTolerance:"Medium",
                preferredIndustry:"Technology",
            },
            mode:'onBlur'

        },);
        const OnSubmit=async(data:SignUpFormData)=>{
            try{
                console.log(data);
            }
            catch(e){
                console.error(e);
            }
        }
  return (
    <>
        <h1 className='form-title'>Sign Up and personalize your trading experience</h1>
        <form onSubmit={handleSubmit(OnSubmit)} className='space-y-5'>
            <button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                {isSubmitting ? 'Creating account...' : 'Start Your Investing Journey'}
            </button>
        </form>
    </>
  )
}

export default SignUp