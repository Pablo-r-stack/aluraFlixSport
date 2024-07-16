import React from 'react'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-6xl font-bold mb-4">404</h1>
            <p className="text-2xl mb-8">Recurso no encontrado</p>
            <Link to="/" className="text-blue-500 hover:underline">
                Volver al inicio
            </Link>
        </div>
    );
}
