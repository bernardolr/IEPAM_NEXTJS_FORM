import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers'
import * as yup from 'yup'

export default function form() {

    const schema = yup.object({
        firstName: yup.string().required().max(80),
        lastName: yup.string().required().max(100),
        Email: yup.string().required().max(80),
        Message: yup.string().required().max(80),
    }).required()

    const { register, handleSubmit, formState: { errors } } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} action='/' method='post'>
            <input type='text' placeholder='First name' id='first' {...register("firstName", { required: true, maxLength: 80 })} />

            {errors.firstName && 'First Name Required'}

            <input type='text' placeholder='Last name' id='last' {...register("lastName", { required: true, maxLength: 100 })} />

            {errors.lastName && 'Last Name Required'}

            <input type='email' placeholder='Email' id='email' {...register("Email", { required: true, pattern: /^\S+@\S+$/i })} />
            {errors.Email && 'Email Required'}
            <input type='textarea' placeholder='Message' id='message' {...register("Message", { required: true })} />
            {errors.Message && 'Message Required'}
            <button type='submit'>Submit</button>

        </form>
    )
}