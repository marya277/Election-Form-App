"use client";

import { useState } from 'react';
import Swal from 'sweetalert2';
import Link from 'next/link';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validación de campos vacíos
        const isEmailValid = email.trim() !== '';
        const isPasswordValid = password.trim() !== '';
        let errorMessage = '';

        if (!isEmailValid || !email.includes('@')) {
            errorMessage += 'Por favor, ingresa un correo electrónico válido. ';
        }

        if (password.length < 6) {
            errorMessage += 'La contraseña debe tener al menos 6 caracteres. ';
            }
        
            if (errorMessage !== '') {
            Swal.fire('Error', errorMessage, 'error');
            return;
            }
        Swal.fire('Usuario logueado correctamente', '', 'success');

        // Redirigir a la página de datos
        window.location.href = '/data';
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="w-full max-w-sm bg-white  border border-gray-400 shadow-gray p-8 rounded-md">
                <h1 className="text-center mb-6 font-bold">TEST-ELECTIONS</h1>
                <form  className='' onSubmit={handleSubmit}>
                    <h3 className="text-center mb-4 font-extrabold">Sign in to start your session</h3>
                    <div>
                        <input
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            required
                            placeholder="Email"
                            className="w-full p-2 mt-2 border border-gray-400 rounded-md"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            placeholder="Password"
                            className="w-full p-2 mt-3 border border-gray-400 rounded-md"

                        />
                    </div>

                    <div className="text-center font-bold mt-4">
                        <Link href="/data" className="bg-indigo-600 text-white mt-3 py-3 px-4 rounded" onClick={handleSubmit}>

                            Sign In
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;