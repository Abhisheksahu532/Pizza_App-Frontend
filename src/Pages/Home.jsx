import React from 'react'
import ArrowRight from '../Components/Icons/ArrowRight'
import PizzaImage from "../assets/Images/pizza1.png"
import CookingImage from "../assets/Images/cooking.webp"
import IconPatchCheck from '../Components/Icons/IconPatchCheck'

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
        <section className="py-6 mt-6 bg-gradient-to-r from-amber-50 to-orange-400">
            
            <div className='conatiner flex flex-col md:flex-row'>

                <div className='flex flex-col items-center justify-center rounded-lg lg:w-1/2'>

                    <img
                        src ={CookingImage}
                        width ={500}
                        alt="Cooking"
                        className='rounded-lg'
                    />

                </div>

                <div className='flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-12 lg:text-left'>

                    <div className='flex flex-col items-center lg:items-start'>
                        <div>
                            <h2 className='mb-2 text-5xl font-extrabold text-transparent title-font bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text'>
                                Cooked by the best <br/> Chefs in the world
                            </h2>
                            <p className='text-base loading-relaxed text-[#6B7280]'> 
                                There are many benifites regarding to that But the main ones are:
                            </p>
                        </div>
                    </div>

                    <div className='w-full p-1'>
                        <div className='flex items-center h-full p-2 text-2xl rounded'>
                            <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                            <span className='font-bold title-font'>Perfect taste</span>
                        </div>

                    </div>
                    <div className='w-full p-1'>
                        <div className='flex items-center h-full p-2 text-2xl rounded'>
                            <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                            <span className='font-bold title-font'>Prepared Quickly</span>
                        </div>

                    </div>
                    <div className='w-full p-1'>
                        <div className='flex items-center h-full p-2 text-2xl rounded'>
                            <IconPatchCheck className="text-[#F38339] w-10 h-10 mr-4" />
                            <span className='font-bold title-font'>Food Hygiene Guaranted</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    </div>
  )
}

export default Home