import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router'



type Profile = {
    firstname: string
    lastname: string
    secondlastname: string
    email: string
    age: number

}

function Form() {
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<Profile>()

    const onSubmit = handleSubmit((data) => {
        fetch('/api/formdata', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        alert(`Es tu nombre: ${data.firstname}?`);
        router.push('/thankyou');
    })

    return (
        <main>
            <div className='min-h-screen bg-gray-50 flex flex-col justify-center '>
                <div className='max-w-md w-full mx-auto'>
                    <div className='text-center'>
                        <img className="mx-auto" src='../images/iepamLogo.png' alt='iepamlogo'/>
                    </div>
                    <div className='text-3xl font-bold text-gray-900 mt-2 text-center'>Formulario</div>
                </div>
                <div className='max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300'>
                    <form onSubmit={onSubmit} className='space-y-6'>
                        <div>
                            <label htmlFor="firstname" className='text-sm font-bold text-gray-600 block'>Nombre</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('firstname', { required: true, minLength: 4, maxLength: 20 })} id="firstname" name="firstname" type="text" />
                            {
                                errors.firstname && <div className="red">Ingresa tu nombre</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="lastname" className='text-sm font-bold text-gray-600 block'>Apellido</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('lastname', { required: true, minLength: 4, maxLength: 20 })} id="lastname" name="lastname" type="text" />
                            {
                                errors.lastname && <div className="red">Ingresa tu apellido</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="secondlastname" className='text-sm font-bold text-gray-600 block'>Segundo Apellido</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('secondlastname', { required: true, minLength: 4, maxLength: 20 })} id="secondlastname" name="secondlastname" type="text" />
                            {
                                errors.lastname && <div className="red">Ingresa tu segundo apellido</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="email" className='text-sm font-bold text-gray-600 block'>Correo electrónico</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('email', { required: true, minLength: 4, maxLength: 20, })} id="email" name="email" type="text" />
                            {
                                errors.firstname && <div className="red">Ingresa tu correo</div>
                            }
                        </div>
                        <div>
                            <label htmlFor="age" className='text-sm font-bold text-gray-600 block'>Edad</label>
                            <input className='w-full p-2 border border-gray-300 rounded mt-1' {...register('age', { required: true, minLength: 2, maxLength: 3 })} id="age" name="age" type="text" />
                            {
                                errors.age && <div className="red">Ingresa tu edad</div>
                            }
                        </div>
                        <div>
                            <button className='w-full py-2 px-4 bg-[#6F206A] hover:bg-blue-700 rounded-md text-white text-sm' type="submit">Enviar</button>
                        </div>

                    </form>
                </div>

            </div>

        </main>
    );
}

export default Form;