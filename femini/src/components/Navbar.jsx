import React, { useState } from "react";

import { MenuIcon, XIcon } from '@heroicons/react/outline'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)


    return (
        <nav className="w-screen h-[80px] absolute  z-10 bg-white">
            <div className="px-2 flex flex-wrap justify-between items-center  drop-shadow-lgw-full h-full mb-1">

                <h1 className="font-bold mx-4 text-3xl md:text-4xl xl:text-5xl">FEMINI</h1>
                <ul className="hidden lg:flex items-center  justify-between">
                    <li className="hover:text-pink-300">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="hover:text-pink-300">
                        <NavLink to="/calendar">Calendar</NavLink>
                    </li>
                    <li className="hover:text-pink-300">
                        <NavLink to="/appointment">Appointment </NavLink>
                    </li>
                    <li className="hover:text-pink-300">
                        <NavLink to="/about">About</NavLink>
                    </li>
                </ul>


                <div className="hidden lg:flex pr-4">
                    <button className="bg-transparent hover:bg-pink-500 hover:text-white px-8 py-3 text-black mr-4 rounded-full border-2 border-pink-500">
                        <NavLink to="/login">Login</NavLink>
                    </button>
                    <button className="px-8 py-3 rounded-full">
                        <NavLink to="/signup">Signup</NavLink>
                    </button>
                </div>
                <div className="lg:hidden block" onClick={handleClick}>
                    {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}

                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'} >
                <li className="border-b-2 border-zinc-300 w-full">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="border-b-2 border-zinc-300 w-full">
                    <NavLink to="/calendar">Calendar</NavLink>
                </li>
                <li className="border-b-2 border-zinc-300 w-full">
                    <NavLink to="/appointment">Appointment</NavLink>
                </li>
                <li className="border-b-2 border-zinc-300 w-full">
                    <NavLink to="/about">About</NavLink>
                </li>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-indigo-600 px-7 py-3 mb-3 ">
                        <NavLink to="/login">Login</NavLink>
                    </button>
                    <button className="px-7 py-3">
                        <NavLink to="/signup">Signup</NavLink>
                    </button>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar;