import { Link } from 'react-router-dom';
import errorIcon from '../../assets/error-icon.png'
const PokemonNotFound = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <img 
                src={errorIcon} 
                alt="Pokémon not found" 
                className="w-64 h-64 mb-8"
            />
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Pokémon Not Found</h1>
            <p className="text-lg text-gray-600">The Pokémon you are looking for does not exist.</p>
            <Link
                className="mt-6 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                to={'/'}
            >
                Go Back to Home
            </Link>
        </div>
        </>
    )
}

export default PokemonNotFound;