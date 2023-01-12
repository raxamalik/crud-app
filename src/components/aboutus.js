/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import Toggle from './toogle'
import { useNavigate } from 'react-router-dom'
const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Team', href: '#', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
    { name: 'Your Profile', link: '#' },
    { name: 'Settings', link: '#' },
    { name: 'Sign out', link: '/' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function AboutUs() {
    const navigate = useNavigate();
    return (
        <>

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
                                        <button onClick={() => navigate(-1)} className="animate-pulse dark:text-white font-semibold bg-indigo-500 px-5 py-1.5 rounded-lg ml-3">Go Back</button>
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-4 flex items-center md:ml-6">
                                            <Toggle />

                                            <button
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
                <div className='sticky h-[calc(100vh-64px)] overflow-y-auto'>

                    <header className="bg-white shadow dark:bg-gray-500 transition duration-150 ease-in-out">
                        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl font-bold tracking-tight text-gray-900">About us</h1>
                        </div>
                    </header>
                    <main className='dark:bg-gray-700'>
                        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

                            <div className="px-4 py-6 sm:px-0">

                                <div className="h-76 dark:bg-gray-500 rounded-lg border-4 border-dashed border-gray-200 relative">
                                    <div className="pt-4 lg:pb-3">
                                        <div className="flex  md:flex-row flex-col items-start px-5">
                                            <div className="flex-shrink-0 p-5 pr-12">
                                                <img className="h-26 w-26 rounded-full" src={user.imageUrl} alt="" />
                                            </div>
                                            <div className="ml-3 w-2/4">
                                                <p className='text-4xl pb-7 font-bold dark:text-white'>How we work</p>
                                                <p className='text-lg text-slate-500 dark:text-white '>Oh feel if up to till like. He an thing rapid these after going drawn or. Timed she his law the spoil round defer. In surprise concerns informed betrayed he learning is ye. Ignorant formerly so ye blessing. Quick can manor smart money hopes worth too. Comfort produce husband boy her had hearing. Law others theirs passed but wishes. You day real less till dear read. Considered use dispatched melancholy sympathize discretion led. Oh feel if up to till like.</p>
                                                <p className='font-bold text-lg text-slate-900  pt-12 dark:text-white'>He as spoke avoid given downs money on we. Of properly carriage shutters ye as wandered up repeated moreover.</p>
                                            </div>
                                        </div>
                                        <div className='mt-3 sm:block block hidden'>
                                            <div className=" flex flex-col space-y-5 absolute top-4 right-4 rounded-lg bg-gray-300 p-3">
                                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                                <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white cursor-pointer" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className='flex justify-around py-12'>
                                        <div className='flex flex-row items-center'>
                                            <div className='bg-gray-400 rounded-tl-3xl rounded-br-3xl'>
                                                <i class="fa-solid fa-location-dot dark:hover:text-black  dark:text-white hover:text-white cursor-pointer text-6xl   p-6"></i>
                                            </div>
                                            <p className='text-lg text-slate-500 ml-5 dark:text-white '>Click here to get our location.</p>
                                        </div>
                                        <div className='flex flex-row items-center'>
                                            <div className='bg-gray-400 rounded-tl-3xl rounded-br-3xl'>
                                                <i class="fa-solid fa-people-line dark:hover:text-black dark:text-white hover:text-white cursor-pointer text-6xl  py-6 px-2 "></i>
                                            </div>
                                            <p className='text-lg text-slate-500 ml-5 dark:text-white '>Here is our location</p>
                                        </div>
                                    </div>


                                </div>

                            </div>

                            {/* /End replace */}
                        </div>
                    </main>
                    <footer className='bg-gray-800 py-12'>
                        <div class="flex flex-row justify-between items-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                            <div className='flex lg:flex-row justify-center lg:items-center items-start flex-col'>
                                <div className='lg:px-0 px-3 '>
                                    <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="" className="h-8 w-8" />
                                </div>
                                <ul class="flex lg:flex-row flex-col justify-center pl-sm-0 m-0 lg:space-x-4 lg:space-y-0 space-y-4 lg:pl-5">
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
