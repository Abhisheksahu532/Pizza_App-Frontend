import Layout from '../../Layouts/Layout'
function AddProduct() {
  return (
    <Layout>
        <section className='py-12'>

            <div className='max-w-md mx-auto mt-8 bg-white p-7'>
                <h2 className='mb-4 text-2xl font-semibold'>
                    Add Product
                </h2>

                <form>
                    {/* Product Name */}
                    <div className='mb-4'>
                        <label 
                            htmlFor="productName" 
                            className='block'>
                            Product Name <span className='text-red-500'>*</span>
                        </label>
                        <input 
                            type="text" 
                            name="productName"
                            id="productName"
                            required
                            minLength={5}
                            maxLength={20}
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-300 focus:border-indigo-500 sm:text-sm' />
                    </div>
                    
                    {/* Description*/}
                    <div className='mb-4'>
                        <label 
                            htmlFor="description" 
                            className='block text-sm font-medium text-gray-700'>
                            Description<span className='text-red-500'>*</span>
                        </label>
                        <input 
                            type="text" 
                            name="description"
                            id="description"
                            required
                            minLength={5}
                            maxLength={60}
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-300 focus:border-indigo-500 sm:text-sm' />
                    </div>

                    {/* Price */}
                    <div className='mb-4'>
                        <label 
                            htmlFor="price" 
                            className='block text-sm font-medium text-gray-700'>
                            Prouduct Price<span className='text-red-500'>*</span>
                        </label>
                        <input 
                            type="number"
                            name='price' 
                            id="price"
                            required
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-300 focus:border-indigo-500 sm:text-sm' />
                    </div>

                    {/* quantity */}
                    <div className='mb-4'>
                        <label 
                            htmlFor="quantity" 
                            className='block text-sm font-medium text-gray-700'>
                            Prouduct Quantity<span className='text-red-500'>*</span>
                        </label>
                        <input 
                            type="number"
                            name='quantity' 
                            id="quantity"
                            required
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-300 focus:border-indigo-500 sm:text-sm' />
                    </div>

                    {/* Category */}
                    <div className='mb-4'>
                        <label
                            htmlFor="category"
                            className='block text-sm font-medium text-gray-700'>
                             Select Category<span className='text-red-500'>*</span>
                        </label>
                        <select
                            name="category"
                            id="category"
                            required
                            className='mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-300 focus:border-indigo-500 sm:text-sm'>
                            <option value="veg">veg</option>
                            <option value="non-veg">Non-Vegetarian</option>
                            <option value="drinks">Soft drinks</option>
                            <option value="sides">Sides</option>
                            <option value="other">Other</option>
                        </select>

                    </div>

                    {/* image */}
                    <div className="mb-4">
                        <label 
                            htmlFor="productImage" 
                            className="block text-sm font-medium text-gray-700"
                        >
                            Product image <span className="text-red-600">(.jpg, .png, .jpeg)</span>
                        </label>
                        <input 
                            type="file" 
                            required
                            name="productImage" 
                            id="productImage" 
                            accept=".jpg, .jpeg, .png"
                            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                            
                        /> 
                    </div>


                    <button
                        type="submit"
                        className="w-full bg-yellow-500 text-white p-2 rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50 transition duration-300 ease-in-out"
                    >
                        Add product
                    </button>


                    
                </form>
            </div>

        </section>
    </Layout>
  )
}

export default AddProduct