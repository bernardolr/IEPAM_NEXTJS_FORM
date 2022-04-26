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
        File: yup.string().required(),
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
                <li class="mb-3">
                <input class='form-control' type='text' placeholder='Nombre' id='first' {...register("firstName")} name="firstName" />

                <div class="red">
                    {errors.firstName && '  Nombre es requerido'}
                </div>      

                </li>
                <li class="mb-3">
                    <input class='form-control' type='text' placeholder='Primer apellido' id='last' {...register("lastName")} name="lastName"/>

                    <div class="red">
                        {errors.lastName && '   Primer apellido es requerido'}
                    </div>

                </li>

                <li class="mb-3">
                    <input class='form-control' type='text' placeholder='Segundo apellido' id='second last' {...register("secondLastName")} name="secondLastName"/>

                    <div class="red">
                        {errors.secondLastName && ' Segundo apellido es requerido'}
                    </div>  
                    
                </li>

                <li class="mb-3">
                    <input class='form-control' type='email' placeholder='Correo electrónico' id='email' {...register("Email")} name="Email"/>

                    <div class="red">
                        {errors.Email && '  Correo es requerido'}
                    </div>
                    
                </li>

                <li class="mb-3">
                    <input class='form-control' type='textarea' placeholder='Mensaje' id='message' {...register("Message")} name="Message"/>


                    <div class="red">
                        {errors.Message && '    Mensaje es requerido'}

                    </div>
                </li>
                <li class="mb-3">
                    <div class="mb-3">
                        <label for="formFileMultiple" class="form-label">Elige uno o más archivos</label>
                        <input class="form-control" type="file" id="formFileMultiple" multiple/>
                        
                        <div class="red">
                            {errors.File && '    Archivos son requeridos'}
                        </div>
                        
                    </div>
                    
                </li>
                    
                

                <div class="text-end">
                    
                    <button type='submit' className='btn btn-primary'>Enviar</button>

                </div>
                

            </ul>

            

        </form>
    )
}