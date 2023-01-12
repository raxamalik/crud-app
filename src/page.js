import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import { useRef } from 'react'
import { Dialog } from '@headlessui/react'

import { Link } from "react-router-dom";

// const navigation = [
//     { name: 'Product', link: 'product' },
//     { name: 'Features', link: 'features' },
//     { name: 'Marketplace', link: 'marketplace' },
//     { name: 'Company', link: 'company' },
// ]

export default function HomePage() {
    
    const [Modalcheck, setModalcheck] = useState(false);
    const submitlButtonRef = useRef(null)
    // let navigate = useNavigate();
    // const routeChange = () => {
    //     let path = `/product`;
    //     navigate(path);
    // }

    const HandleCheck = () => {
        setModalcheck(true)
    }
    return (
        <>
            <div className="relative overflow-hidden bg-white">
                <div className="mx-auto max-w-7xl">
                    <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                        <svg
                            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
                            fill="currentColor"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                            aria-hidden="true"
                        >
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>

                        <Popover>
                            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                                <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                    <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                                        <div className="flex w-full items-center justify-between md:w-auto">
                                            <a href="#">
                                                <span className="sr-only">Your Company</span>
                                                <img
                                                    alt="Your Company"
                                                    className="h-16 w-auto sm:h-14"
                                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                />
                                            </a>
                                            <div className="-mr-2 flex items-center md:hidden">
                                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Open main menu</span>
                                                    <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                                        {/* {navigation.map((item) => (

                                            <a key={item.name} className="cursor-pointer font-medium text-gray-500 hover:text-gray-900">
                                                <Link to={`/${item.link}`}>{item.name}</Link>
                                            </a>
                                        ))} */}

                                        <a onClick={() => { HandleCheck() }}
                                            className="cursor-pointer text-4xl font-bold tracking-tight  sm:text-5xl md:text-4xl text-indigo-600 hover:text-indigo-500">
                                            Log in
                                        </a>
                                    </div>
                                </nav>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="duration-150 ease-out"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="duration-100 ease-in"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Popover.Panel
                                    focus
                                    className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                                >
                                    <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">

                                        <div className="flex items-center justify-between px-5 pt-4">
                                            <div>
                                                <img
                                                    className="h-8 w-auto"
                                                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="-mr-2">
                                                <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                    <span className="sr-only">Close main menu</span>
                                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                </Popover.Button>
                                            </div>
                                        </div>
                                        {/* <div className="space-y-1 px-2 pt-2 pb-3">
                                            {navigation.map((item) => (
                                                <a
                                                    key={item.name}
                                                    className="cursor-pointer block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                                >
                                                    <Link to={`/${item.link}`}>{item.name}</Link>

                                                </a>
                                            ))}
                                        </div> */}
                                        <a
                                            onClick={() => { HandleCheck() }}
                                            className="cursor-pointer block w-full bg-gray-50 px-5 py-3 text-center font-medium text-indigo-600 hover:bg-gray-100"
                                        >
                                            Log in
                                        </a>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                            <div className="sm:text-center lg:text-left">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                                    <span className="block xl:inline">Data to enrich your</span>{' '}
                                    <span className="block text-indigo-600 xl:inline">online business</span>
                                </h1>
                                
                                <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                                    fugiat veniam occaecat fugiat aliqua.
                                </p>
                                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                    <div className="rounded-md shadow">
                                        <Link to="/product" className="cursor-pointer flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Get started</Link>
                                    </div>


                                </div>
                            </div>
                        </main>
                    </div>
                </div>
                <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                    <img
                        className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                        alt=""
                    />
                </div>
                <Transition.Root show={Modalcheck} as={Fragment}>
                    <Dialog as="div" className="relative z-10" initialFocus={submitlButtonRef} onClose={setModalcheck}>
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                        </Transition.Child>

                        <div className="fixed inset-0 z-10 overflow-y-auto">
                            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                >
                                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-lg sm:max-w-lg">
                                        <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                            <div className="sm:flex sm:items-start">
                                                <form className=' w-full'>
                                                    <label className="block ">
                                                        <span className="block text-sm font-medium  after:content-['*'] after:ml-0.5 after:text-red-500">Username</span>
                                                        <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                                        disabled:bg-slate-50 disabled:text-white disabled:border-slate-200 disabled:shadow-none
                                                        invalid:border-pink-500 invalid:text-pink-600
                                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 
                                                    "/>
                                                    </label>
                                                    <label className="block pt-5">
                                                        <span className="block text-sm font-medium ">Email</span>
                                                        <input type="email" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                                        disabled:bg-slate-50 disabled:text-white disabled:border-slate-200 disabled:shadow-none
                                                        invalid:border-pink-500 invalid:text-pink-600
                                                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer
                                                    "/>
                                                        <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
                                                            Please provide a valid email address.
                                                        </p>
                                                    </label>

                                                    <label className=" block pt-5">
                                                        <span className="sr-only ">Choose profile photo</span>
                                                        <input type="file" className="block w-full text-sm 
                                                        file:mr-4 file:py-2 file:px-4
                                                        file:rounded-full file:border-0
                                                        file:text-sm file:font-semibold
                                                        file:bg-violet-50 file:text-violet-700
                                                        hover:file:bg-violet-100
                                                    "/>
                                                    </label>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="button"
                                                className=" inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => setModalcheck(false)}
                                                ref={submitlButtonRef}
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                                onClick={() => setModalcheck(false)}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            </div>

        </>


    )
}
