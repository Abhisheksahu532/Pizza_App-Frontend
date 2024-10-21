import Pizzalogo from '../assets/Images/pizzalogo.png'


function Navbar(){
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

        </nav>
    );
}

export default Navbar;