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

    //{errors.firstName?.message}
    // {errors.lastName?.message}
    // {errors.secondLastName?.message}
    // {errors.Email?.message}
    // {errors.Message?.message}



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {console.log(errors)}
            <ul>
                <li class=''>
                <input type='text' placeholder='Nombre' id='first' {...register("firstName")} name="firstName" />

                {errors.firstName && '  Nombre es requerido'}

                </li>
                <li>
                    <input type='text' placeholder='Primer apellido' id='last' {...register("lastName")} name="lastName"/>


                    {errors.lastName && '   Primer apellido es requerido'}

                </li>

                <li>
                    <input type='text' placeholder='Segundo apellido' id='second last' {...register("secondLastName")} name="secondLastName"/>


                    {errors.secondLastName && ' Segundo apellido es requerido'}
                    
                </li>

                <li>
                    <input type='email' placeholder='Correo electrónico' id='email' {...register("Email")} name="Email"/>


                    {errors.Email && '  Correo es requerido'}
                    
                </li>

                <li>
                    <input type='textarea' placeholder='Mensaje' id='message' {...register("Message")} name="Message"/>


                    {errors.Message && '    Mensaje es requerido'}
                    
                </li>
                

                




                <div class="text-end">
                    
                    <button type='submit' className='btn btn-primary'>Enviar</button>

                </div>
                

            </ul>

            

        </form>
    )
}