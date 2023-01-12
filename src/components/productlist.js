import React from "react"
import { Link } from "react-router-dom"


export default function ProductList(props) {

    return (

        
        <div className="">
            <div className="mx-auto max-w-2xl py-12 px-4 sm:py-12 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {props.products?.map((product,index) => (
                        <Link key={product.id} to={`/cartdetail/${index+1}`} className="block px-4 py-2 text-sm text-gray-700"><div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                            <img
                                src={product.image}
                                alt='sdfsdf'
                                className="h-full w-full object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                            <h3 className="mt-4 dark:text-white text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 dark:text-white text-lg font-medium text-gray-900">{product.price}</p>
                        </Link>

                    ))}
                </div>
                
            </div>
        </div>
    )
}