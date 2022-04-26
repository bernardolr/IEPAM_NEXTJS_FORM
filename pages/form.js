import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

export default function form() {

    const schema = yup.object({
        firstName: yup.string().required().max(80),
        lastName: yup.string().required().max(100),
        Email: yup.string().required().email(),
        Message: yup.string().required(),
    }).required()

    const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema),
    mode:"onChange" });

    const onSubmit = data => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)} action='/' method='post'>
            <input type='text' placeholder='First name' id='first' {...register("firstName")} />

            {errors.firstName && 'First Name Required'}

            <input type='text' placeholder='Last name' id='last' {...register("lastName")} />

            {errors.lastName && 'Last Name Required'}

            <input type='email' placeholder='Email' id='email' {...register("Email")} />
            {errors.Email && 'Email Required'}
            <input type='textarea' placeholder='Message' id='message' {...register("Message")} />
            {errors.Message && 'Message Required'}
            <button type='submit'>Submit</button>

        </form>
    )
}