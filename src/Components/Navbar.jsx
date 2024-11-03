import { useDispatch, useSelector} from 'react-redux';
import Pizzalogo from '../assets/Images/pizzalogo.png'
import { Link } from 'react-router-dom';
import { logout } from '../Redux/Slices/AuthSlice';



function Navbar(){

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)
    const dispatch = useDispatch();
    async function handleLogout(e){
        e.preventDefault();
        dispatch(logout());
        
    }
    return(
        <nav className="flex items-center justify-around h-16 text-[#6B7280] font-mono border-none shadow-md">
            
            <div className="flex items-center justify-center">
                <p>Pizza App</p>
                <img 
                    
                    src={Pizzalogo} 
                    alt="Pizza logo" 
                />

            </div>

            <div className='hidden md:block'>
                <ul className='flex gap-4'>
                    <li className='hover:text-[#FF9110]'>
                        {'  '}
                        <p className=''>Menu {'  '}</p>
                    </li>

                    <li className='hover:text-[#FF9110]'>
                        {'  '}
                        <p className=''>Services {'  '}</p>
                    </li>

                    <li className='hover:text-[#FF9110]'>
                        {'  '}
                        <p className=''>About {'  '}</p>
                    </li>

                </ul>
            </div>

            <div>
                <ul className='flex gap-4'>
                    <li className='hover:text-[#F9110]'>
                        {isLoggedIn ? (
                            <Link onClick={handleLogout}>Logout</Link>
                        ) : (
                            <Link to={'/auth/login'}>Login</Link>
                        ) }

                    </li>
                </ul>
            </div>

        </nav>
    );
}

export default Navbar;