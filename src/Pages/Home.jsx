import React, { useEffect } from 'react'
import ArrowRight from '../Components/Icons/ArrowRight'
import IconPatchCheck from '../Components/Icons/IconPatchCheck'
import PizzaImage from "../assets/Images/pizza1.png"
import CookingImage from "../assets/Images/cooking.webp"
import OrderFood from '../assets/Images/orderFood.png';
import Pickup from '../assets/Images/pickup.png';
import Enjoy from '../assets/Images/enjoy.png';
import Layout from '../Layouts/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../Redux/Slices/ProductSlice'
import { Link } from 'react-router-dom'


const Home = () => {

    const dispatch = useDispatch();

    const { productsData } = useSelector((state) => state.product);

    useEffect(() => {
        //This will be called when the component mounts
        dispatch(getAllProducts());
    }, []);
    return (
    <Layout>
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
                    width={800}

                />
            </div>

        </section>

        {/** Services Section */}
        <section className="py-6 mt-6 bg-gradient-to-r from-amber-50 to-orange-300">
            
            <div className='conatiner flex flex-col md:flex-row'>

                <div className='flex flex-col items-center justify-center rounded-lg lg:w-1/2'>

                    <img
                        src ={CookingImage}
                        width ={600}
                        alt="Cooking"
                        className='rounded-lg'
                    />

                </div>

                <div className='flex flex-col flex-wrap text-center lg:py-6 lg:w-1/2 lg:pl-10 lg:text-left'>

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

                    <div className='px-5 py-4 mx-auto'>

                        <div className='flex justify-center py-4'>

                            <div className='inline-flex w-16 h-1 bg-yellow-500 rounded-full'></div>
                        
                        </div>
                        
                    <div className='flex flex-wrap space-y-6 md:space-y-0'>

                        <div className='flex flex-col items-center text-center p-4 md:w-1/3'>
                            <div>
                                <img
                                    src ={OrderFood}
                                />
                            </div>
                            <div className='flex-grow'>
                                <h2 className='mb-3 text-lg font-medium text-gray-900 title-font'>
                                    Order Food 
                                </h2>
                                <p className='text-base leading-relaxed'>
                                    As easy as 1,2,3. Just select your Pizza and place your order
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center text-center p-4 md:w-1/3'>
                            <div>
                                <img
                                    src ={Pickup}
                                />
                            </div>
                            <div className='flex-grow'>
                                <h2 className='mb-3 text-lg font-medium text-gray-900 title-font'>
                                    Pickup Food 
                                </h2>
                                <p className='text-base leading-relaxed'>
                                    Pickup your food from the nearest store or get it delivered at your doorstep
                                </p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center text-center p-4 md:w-1/3'>
                            <div>
                                <img
                                    src ={Enjoy}
                                />
                            </div>
                            <div className='flex-grow'>
                                <h2 className='mb-3 text-lg font-medium text-gray-900 title-font'>
                                    Enjoy Food 
                                </h2>
                                <p className='text-base leading-relaxed'>
                                    As soon as you get your order, enjoy the delicious pizza with your loved ones. 
                               </p>
                            </div>
                        </div>                      

                    </div>


                    </div>

                </div>

            </div>

        </section>


        <div className='mx-auto'>
            <div className='flex flex-wrap justify-center'>

                {productsData.map((item) => {
                    return (
                        item.inStock && (
                            <div className='p-4 md:w-1/3' key = {item._id}>

                                <Link to={`/product/${item._id}`}>
                                    <div className='overflow-hidden border rounded-lg border-opacity-60'>

                                        <img
                                            src={item?.productImage}
                                            className='object-cover object-center w-full h-55'
                                        />
                                        <div className='p-6 border'>
                                            <h2 className='text-xs font-medium tracking-widest text-gray-400 title-font'>
                                                {item?.category}
                                            </h2>
                                            <h1 className='mb-3 text-lg font-medium text-gray-900'>
                                                {item?.productName}
                                            </h1>
                                            <p className='mb-3 leading-relaxed'>
                                                {item?.description}
                                            </p>

                                            <p>
                                                <span className='text-lg font-medium text-gray-900'>
                                                    ${item?.price}
                                                </span>
                                            </p>
                                            
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        )
                    )
                })}

            </div>
        </div>
    </div>
    </Layout>
  )
}

export default Home