import React from 'react'
import ArrowRight from '../Components/Icons/ArrowRight'
import PizzaImage from "../assets/Images/pizza1.png"

const Home = () => {
  return (
    <div>
        {/** Hero Section */}
        <section className=' flex flex-col-reverse items-center justify-center py-5 md:flex-row md:gap-7 bg-gradient-to-r from-amber-50 to-orange-400'>
        
        {/** Services Section */}

            <div className='w-4/6 ml-4 text-center md:w-2/6 md:text-left'>

                <div className='flex justify-center text-4xl md:justify-normal'>

                    <h1 className='pb-5 font-bold text-transparent bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text'>
                        Enjoy the Slice {'...'}
                    </h1>
                    <h1>
                        🤤
                    </h1>
                    
                </div>

                <p className='pb-4 text-[#687280]'>
                    The pizza app lets you order your favorite pizza, and you can also see the pizza you ordered.
                </p>

                <button className='flex items-center px-4 py-2 text-white bg-yellow-500 rounded-md hover:bg-yellow-600 group'>
                    Order Now

                   <span className='inline-block ml-2 transition-transform ease-in-out group-hover:translate-x-2'>
                       <ArrowRight/>
                   </span>
                </button>
                

            </div>

            <div>
                <img
                    src={PizzaImage}
                    alt="Pizza Image"
                    height = {600}
                    width={600}

                />
            </div>

        </section>

        {/** Services Section */}
        <section className>

        </section>
    </div>
  )
}

export default Home