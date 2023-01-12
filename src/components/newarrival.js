/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Toggle from './toogle'
import ProductList from './productlist'
import ShoppingCart from './shoppingcart'
import { useEffect } from 'react'
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', linkto: 'product', current: false },
    { name: 'New Arrival', linkto: 'newarrival', current: true },
    { name: 'Purchase History', linkto: 'purchasehistory', current: false },
    { name: 'About Us', linkto: 'aboutus', current: false },
]
const userNavigation = [
    { name: 'Your Profile', link: '#' },
    { name: 'Settings', link: '#' },
    { name: 'Sign out', link: '/' },
]
const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NewArrival() {
    const [isSelected, setisSelected] = useState(false)
    const [Productdata, setProductdata] = useState()


    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch(`http://localhost:3500/newarrival`, requestOptions)
            .then(response => response.json())
            .then(data => setProductdata(data));
    }, [])
    return (
        <>
            <div className="min-h-full">
                <Disclosure as="nav" className="bg-gray-800 ">
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
                                        <div className="hidden md:block">
                                            <div className="ml-10 flex items-baseline space-x-4">

                                                {navigation.map((item) => (
                                                    <Link to={`/${item.linkto}`} className={classNames(
                                                        item.current
                                                            ? 'bg-gray-900 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'px-3 py-2 rounded-md text-sm font-medium'
                                                    )}>{item.name}</Link>

                                                    // <a
                                                    //     key={item.name}
                                                    //     href={item.href}
                                                    //     className={classNames(
                                                    //         item.current
                                                    //             ? 'bg-gray-900 text-white'
                                                    //             : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    //         'px-3 py-2 rounded-md text-sm font-medium'
                                                    //     )}
                                                    //     aria-current={item.current ? 'page' : undefined}
                                                    // >
                                                    //     {item.name}
                                                    // </a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className=" md:block">

                                        <div className="ml-4 flex items-center md:ml-5">

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

                                                        {/* {userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {({ active }) => (

                                                            <a
                                                                href={item.href}
                                                                className={classNames(
                                                                active ? 'bg-gray-100' : '',
                                                                'block px-4 py-2 text-sm text-gray-700'
                                                                )}
                                                            >
                                                                {item.name}
                                                            </a>
                                                            )}
                                                        </Menu.Item>
                                                        ))} */}
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
                                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                'block px-3 py-2 rounded-md text-base font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>

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
                <div className='sticky h-[calc(100vh-64px)] overflow-y-auto'>

                    <header className="bg-white shadow dark:bg-gray-500 transition duration-150 ease-in-out">
                        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 ">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">New Arrival</h1>
                        </div>
                    </header>

                    <main className='dark:bg-gray-700 transition duration-150 ease-in-out'>
                        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8 ">
                            {/* Replace with your content */}
                            <div className="px-4 my-6 sm:px-0 ">
                                <div className="dark:bg-gray-500 rounded-lg border-4 border-dashed border-gray-200">
                                    <ShoppingCart check={isSelected} setCheck={setisSelected} />
                                    <div className="bg-[url('https://t4.ftcdn.net/jpg/02/92/36/69/360_F_292366989_6aUPestttHBB6wyZ1s34ClBEXqeb95I6.jpg')]  bg-no-repeat bg-cover bg-center h-[25rem] w-full rounded-t">
                                        <div className='w-full h-full text-center m-auto flex justify-center items-end'>
                                            <a href='#newarrival' className="animate-pulse font-bold bg-gray-700 shadow-xl shadow-indigo-500/50 p-2 rounded-lg mt-3 my-5">Shop New Arrival</a>
                                        </div>
                                    </div>
                                    <div id='newarrival'>
                                        <h1 className='pt-16 px-4 sm:px-6 lg:px-8 text-4xl font-bold tracking-tight'>Shop By Category</h1>
                                        <ProductList products={Productdata} />
                                    </div>




                                    {/* <div className="bg-deskimage bg-no-repeat bg-contain bg-white bg-center h-[25rem] w-full">
                                    <div className='w-full h-full text-center m-auto flex justify-center items-end'>
                                        <div>
                                            <h1>Level Up your desk</h1>
                                            <a href='#newarrival' className="animate-pulse font-bold bg-gray-700 shadow-xl shadow-indigo-500/50 p-2 rounded-lg mt-3 my-5">Shop New Arrival</a>
                                        </div>
                                    </div>
                                </div> */}
                                    <div id='newarrival'>
                                        <h1 className='pt-16 px-4 sm:px-6 lg:px-8 text-4xl font-bold tracking-tight'>Shop By Collection</h1>
                                        <ProductList products={Productdata} />
                                    </div>
                                </div>
                            </div>
                            {/* /End replace */}
                        </div>
                    </main>
                    <footer className='bg-gray-800 py-12 transition duration-150 ease-in-out'>
                        <div className="flex flex-row justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                            <div className='flex lg:flex-row justify-center lg:items-center items-start flex-col'>
                                <div className='lg:px-0 px-3 '>
                                    <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="" className="h-8 w-8" />
                                </div>
                                <ul className="flex lg:flex-row flex-col justify-center  pl-sm-0 m-0 lg:space-x-4 space-y-4 lg:space-y-0 lg:pl-5">
                                    <li><a href="#" className='cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white' >HOME</a></li>
                                    <li><a href="#" className='cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white' >ABOUT US</a></li>
                                    <li><a href="#" className='cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white' >SERVICE</a></li>
                                    <li><a href="#" className='cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white' >FOOD</a></li>
                                    <li><a href="#" className='cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white' >CONTACT</a></li>
                                    <li><a href="#" className='cursor-pointer px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white' >LOCATION</a></li>
                                </ul>

                            </div>
                            <div className="mt-3 flex lg:flex-row flex-col lg:space-y-0 lg:-space-x-2 space-x-1 space-y-2">
                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </>
    )
}
