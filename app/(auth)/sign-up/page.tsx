'use client'
import React from 'react'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import InputField from '@/components/ui/forms/inputfield'
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES, RISK_TOLERANCE_OPTIONS } from '@/lib/constants'
import SelectField from '@/components/ui/forms/selectfield'
import { CountrySelect } from '@/components/ui/forms/countryselect'
import { SignUpFormData } from '@/types/form'
import FooterLink from '@/components/ui/forms/footerlink'

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
                // TODO: Implement sign-up logic here
            }catch(e){
                console.error('Sign up error:', e);
            }
        }
  return (
    <>
        <h1 className='form-title'>Sign Up & Personalize</h1>
        <form onSubmit={handleSubmit(OnSubmit)} className='space-y-5'>
            <InputField 
            name='fullName'
            label='Full Name'
            placeholder='Your Name'
            register={register}
            error={errors.fullName}
            validation={{required:"Full name is required",minLength:2}}
            />  
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
            placeholder='Create Password'
            type='password'
            register={register}
            error={errors.password}
            validation={{required:"Password is required",minLength:8,pattern:{
                value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                message:"Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
            }}}
            />  
            
            <Controller
                name="country"
                control={control}
                rules={{ required: "Country is required" }}
                render={({ field }) => (
                    <CountrySelect 
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.country}
                    />
                )}
            />

            
            <SelectField 
            name="investmentGoals"
            label="Investment Goals"
            placeholder="Select your investment goals"
            options={INVESTMENT_GOALS}
            control={control}
            error={errors.investmentGoals}
            validation={{required:"Investment goals is required"}}
            />
            <SelectField 
            name="riskTolerance"
            label="Risk Tolerance"
            placeholder="Select your risk tolerance"
            options={RISK_TOLERANCE_OPTIONS}
            control={control}
            error={errors.riskTolerance}
            validation={{required:"Risk tolerance is required"}}
            />
            <SelectField 
            name="preferredIndustry"
            label="Preferred Industry"
            placeholder="Select your preferred industry"
            options={PREFERRED_INDUSTRIES}
            control={control}
            error={errors.preferredIndustry}
            validation={{required:"Preferred industry is required"}}
            />
            <button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
                {isSubmitting ? 'Creating account...' : 'Start Your Investing Journey'}
            </button>
            <FooterLink
            text="Already have an account?"
            linkText="Sign In"
            href="/sign-in"
            /> 
        </form>
    </>
  )
}

export default SignUp