import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Toggle from './toogle'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import ShoppingCart from './shoppingcart'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: [
        'Hand cut and sewn locally',
        'Dyed with our proprietary colors',
        'Pre-washed & pre-shrunk',
        'Ultra-soft 100% cotton',
    ],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
    { name: 'Your Profile', link: '#' },
    { name: 'Settings', link: '#' },
    { name: 'Sign out', link: '/' },
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const reviews = { href: '#', average: 4, totalCount: 117 }


export default function CartDetail() {


    const [Productdata, setProductdata] = useState()
    const { id } = useParams();

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`http://localhost:3500/homepage/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => setProductdata(data));
    }, [])


    let add = 0;
    const addToBag = () => {

        if (add == 0) {
            alert("Product added to Cart")

            console.log("1122")
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: Productdata?.name, id: Productdata?.id, image: Productdata?.image, price: Productdata?.price })
            };
            fetch('http://localhost:3500/selectedproducts', requestOptions)
                .then(response => {
                    response.json()
                    add++
                }
            );
            

        }
        else{
            alert("Product was already added to Cart")

        }

    }


    const navigate = useNavigate();
    const [isSelected, setisSelected] = useState(false)
    const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState(product.sizes[2])

    return (
        <div className="min-h-full ">
            <Disclosure as="nav" className="bg-gray-800">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-8 w-8"
                                            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                            alt="Your Company"
                                        />
                                    </div>
                                    <button onClick={() => navigate(-1)} className="dark:text-white font-semibold animate-pulse bg-indigo-500 px-5 py-1.5 rounded-lg ml-3">Go Back</button>

                                    {/* <Link to="/product" className="animate-pulse bg-indigo-500 px-5 py-1.5 rounded-lg ml-3">Go Back</Link> */}
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">
                                        <Toggle />

                                        <button
                                            onClick={() => { setisSelected(true) }}
                                            type="button"
                                            className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                        >
                                            <span className="sr-only">View notifications</span>
                                            <BellIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="relative ml-3">
                                            <div>
                                                <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700">Your Profile</Link>
                                                    <Link to="/signup" className="block px-4 py-2 text-sm text-gray-700">Settings</Link>
                                                    <Link to="/" className="block px-4 py-2 text-sm text-gray-700">Sign out</Link>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">


                            <div className="border-t border-gray-700 pt-4 pb-3">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                        <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                    </div>
                                    <button
                                        type="button"
                                        className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>

            <ShoppingCart check={isSelected} setCheck={setisSelected} />

            <header className="bg-white shadow dark:bg-gray-500">
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Cart Detail</h1>
                </div>
            </header>
            <main className='dark:bg-gray-700'>
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

                    <div className="px-4 py-6 sm:px-0">

                        <div className="h-76 content-center rounded-lg border-4 border-dashed border-gray-200">
                            <div className="bg-white dark:bg-gray-500">
                                <div className="pt-6">

                                    <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                                        <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                                            <img
                                                src={Productdata?.image}
                                                alt='sddsddssd '
                                                className="h-full w-full object-cover object-center"
                                            />

                                        </div>
                                        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                                <img
                                                    src={Productdata?.image}
                                                    alt={Productdata?.image}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                                                <img
                                                    src={Productdata?.image}
                                                    alt={Productdata?.image}
                                                    className="h-full w-full object-cover object-center"
                                                />
                                            </div>
                                        </div>
                                        <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
                                            <img
                                                src={Productdata?.image}
                                                alt={Productdata?.image}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    </div>

                                    {/* Product info */}
                                    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">{Productdata?.name}</h1>
                                        </div>

                                        {/* Options */}
                                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                                            <h2 className="sr-only">Product information</h2>
                                            <p className="text-3xl tracking-tight text-gray-900 dark:text-white">{Productdata?.price}</p>

                                            {/* Reviews */}
                                            <div className="mt-6">
                                                <h3 className="sr-only">Reviews</h3>
                                                <div className="flex items-center">
                                                    <div className="flex items-center">
                                                        {[0, 1, 2, 3, 4].map((rating) => (
                                                            <StarIcon
                                                                key={rating}
                                                                className={classNames(
                                                                    reviews.average > rating ? 'text-gray-900 dark:text-white' : 'text-gray-200 dark:text-white',
                                                                    'h-5 w-5 flex-shrink-0'
                                                                )}
                                                                aria-hidden="true"
                                                            />
                                                        ))}
                                                    </div>
                                                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                                                    <a href={reviews.href} className="ml-3 text-sm dark:text-white font-medium text-indigo-600 hover:text-indigo-500">
                                                        {reviews.totalCount} reviews
                                                    </a>
                                                </div>
                                            </div>

                                            <div className="mt-10">
                                                {/* Colors */}
                                                <div>
                                                    <h3 className="text-sm font-medium text-gray-900 dark:text-white">Color</h3>

                                                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                                        <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                                                        <div className="flex items-center space-x-3">
                                                            {product.colors.map((color) => (
                                                                <RadioGroup.Option
                                                                    key={color.name}
                                                                    value={color}
                                                                    className={({ active, checked }) =>
                                                                        classNames(
                                                                            color.selectedClass,
                                                                            active && checked ? 'ring ring-offset-1' : '',
                                                                            !active && checked ? 'ring-2' : '',
                                                                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                                                        )
                                                                    }
                                                                >
                                                                    <RadioGroup.Label as="span" className="sr-only">
                                                                        {' '}
                                                                        {color.name}{' '}
                                                                    </RadioGroup.Label>
                                                                    <span
                                                                        aria-hidden="true"
                                                                        className={classNames(
                                                                            color.class,
                                                                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                                                        )}
                                                                    />
                                                                </RadioGroup.Option>
                                                            ))}
                                                        </div>
                                                    </RadioGroup>
                                                </div>

                                                {/* Sizes */}
                                                <div className="mt-10">
                                                    <div className="flex items-center justify-between">
                                                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">Size</h3>
                                                        <a href="#" className="  dark:text-white text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                            Size guide
                                                        </a>
                                                    </div>

                                                    <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                                        <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                                                        <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
                                                            {product.sizes.map((size) => (
                                                                <RadioGroup.Option
                                                                    key={size.name}
                                                                    value={size}
                                                                    disabled={!size.inStock}
                                                                    className={({ active }) =>
                                                                        classNames(
                                                                            size.inStock
                                                                                ? 'bg-white dark:bg-gray-600 shadow-sm text-gray-900 dark:text-white cursor-pointer'
                                                                                : 'bg-gray-50 dark:bg-gray-600 text-gray-200 dark:text-white cursor-not-allowed',
                                                                            active ? 'ring-2 ring-indigo-500' : '',
                                                                            'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                                                        )
                                                                    }
                                                                >
                                                                    {({ active, checked }) => (
                                                                        <>
                                                                            <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                                                            {size.inStock ? (
                                                                                <span
                                                                                    className={classNames(
                                                                                        active ? 'border' : 'border-2',
                                                                                        checked ? 'border-indigo-500' : 'border-transparent',
                                                                                        'pointer-events-none absolute -inset-px rounded-md'
                                                                                    )}
                                                                                    aria-hidden="true"
                                                                                />
                                                                            ) : (
                                                                                <span
                                                                                    aria-hidden="true"
                                                                                    className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                                >
                                                                                    <svg
                                                                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200 dark:text-white"
                                                                                        viewBox="0 0 100 100"
                                                                                        preserveAspectRatio="none"
                                                                                        stroke="currentColor"
                                                                                    >
                                                                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                                    </svg>
                                                                                </span>
                                                                            )}
                                                                        </>
                                                                    )}
                                                                </RadioGroup.Option>
                                                            ))}
                                                        </div>
                                                    </RadioGroup>
                                                </div>

                                                <button
                                                    onClick={() => { addToBag() }}
                                                    className="mt-10 dark:bg-gray-800 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                >
                                                    Add to bag
                                                </button>
                                            </div>
                                        </div>

                                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                                            {/* Description and details */}
                                            <div>
                                                <h3 className="sr-only">Description</h3>

                                                <div className="space-y-6">
                                                    <p className="text-base text-gray-900 dark:text-white">{Productdata?.productdetail}</p>
                                                </div>
                                            </div>

                                            <div className="mt-10">
                                                <h3 className="text-sm font-medium text-gray-900 dark:text-white">Highlights</h3>

                                                <div className="mt-4">
                                                    <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                                                        {product.highlights.map((highlight) => (
                                                            <li key={highlight} className="text-gray-400 dark:text-white">
                                                                <span className="text-gray-600 dark:text-white">{highlight}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="mt-10">
                                                <h2 className="text-sm font-medium text-gray-900 dark:text-white">Details</h2>

                                                <div className="mt-4 space-y-6">
                                                    <p className="text-sm text-gray-600 dark:text-white">{Productdata?.productdetail}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </div>

    )
}

















