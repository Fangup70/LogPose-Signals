'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import FooterLink from '@/components/ui/forms/footerlink'
import InputField from '@/components/ui/forms/inputfield'

type SignInFormData = {
    email: string
    password: string
}

const SignIn = () => {
    const {
        register, 
        handleSubmit, 
        formState: { errors, isSubmitting }
    } = useForm<SignInFormData>({
        defaultValues: {
            email: "",
            password: ""
        },
        mode: 'onBlur'
    })

    const onSubmit = async (data: SignInFormData) => {
        try {
            // TODO: Implement sign-in logic here
        } catch (e) {
            console.error('Sign in error:', e);
        }
    }

    return (
        <div>
            <h1 className='form-title'>Sign In Your Account</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
                <InputField 
                    name='email'
                    label='Email'
                    placeholder='Your Email address'
                    register={register}
                    error={errors.email}
                    validation={{required:"Email is required",pattern:{
                        value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message:"Invalid email address"
                    }}}
                />  
                <InputField 
                    name='password'
                    label='Password'
                    placeholder='Enter your password'
                    type='password'
                    register={register}
                    error={errors.password}
                    validation={{required:"Password is required"}}
                />  
                <button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                    {isSubmitting ? 'Signing in...' : 'Sign In'}
                </button>
                <FooterLink
                    text="Don't have an account?"
                    linkText="Sign Up"
                    href="/sign-up"
                /> 
            </form>
        </div>  
    )
}

export default SignIn