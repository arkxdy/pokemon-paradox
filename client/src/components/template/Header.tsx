import { Link } from 'react-router-dom';
import logo from '../../../public/main.png'
import SearchUser from '../SearchUser';

const Header = () => {
    return (
        <>
        <header>
            <div className='bg-gray-100 border-b border-gray-200'>
                <div className='px-4 mx-auto sm:px-6 lg:px-8'>
                    <nav className='relative flex items-center justify-between h-16 lg:h-20'>
                        <div className="hidden lg:flex lg:items-center lg:space-x-6">
                            <a href="#" title="" className="text-base font-medium text-black"> All Pokemons </a>
                            <a href="#" title="" className="text-base font-medium text-black"> Play Game </a>
                            <a href="#" title="" className="text-base font-medium text-black"> About Us </a>
                            {/* <a href="#" title="" className="text-base font-medium text-black"> Search </a> */}
                            <SearchUser/>
                        </div>
                        <div className="flex lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
                            <img src={logo} className='w-8 h-8'></img>
                            <span className='font-bold text-m'>Pokemon Paradox</span>
                        </div>
                        <div className="hidden lg:flex lg:items-center lg:space-x-10">
                            <Link to='/signin' className="text-base font-medium text-black">Sign in</Link>
                            <Link to='/signup' className="text-base font-medium text-black">Sign up</Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;