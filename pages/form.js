import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from 'next/router'

export default function form() {
    const router = useRouter()

    const schema = yup.object({
        firstName: yup.string().required().max(80),
        lastName: yup.string().required().max(100),
        secondLastName: yup.string().required().max(100),
        Email: yup.string().required().email(),
        Message: yup.string().required(),
    }).required()

    const { register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema),
    mode:"onChange" });

    const onSubmit = (data) => {
        fetch('/api/formdata', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data) 
        })
        alert(`Es tu nombre: ${data.firstName}?`);
        router.push('/thankyou');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {console.log(errors)}

            <input type='text' placeholder='Nombre' id='first' {...register("firstName")} name="firstName" />

            {errors.firstName?.message}

            <input type='text' placeholder='Primer apellido' id='last' {...register("lastName")} name="lastName"/>

            {errors.lastName?.message}

            <input type='text' placeholder='Segundo apellido' id='second last' {...register("lastName")} name="secondLastName"/>

            {errors.secondLastName?.message}

            <input type='email' placeholder='Correo electrónico' id='email' {...register("Email")} name="Email"/>

            {errors.Email?.message}

            <input type='textarea' placeholder='Mensaje' id='message' {...register("Message")} name="Message"/>

            {errors.Message?.message}

            
            <button type='submit'>Submit</button>

        </form>
    )
}