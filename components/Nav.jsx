'use client'

import React from 'react'
import { IoIosMenu, IoIosClose } from 'react-icons/io'
import { useState } from 'react'
import Link from 'next/link'

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (e) => {
        document.body.classNameList.toggle('no-scroll')
        setIsOpen(!isOpen)
    }
    return (
        <>
            <nav className="w-full flex items-center justify-between sm:px-32 px-10 py-2 bg-orange-500 text-white stroke">
                <Link href="/">
                    <p className="text-white font-bold text-4xl sm:text-5xl ">csea</p>
                </Link>
                <IoIosMenu onClick={(e) => handleClick(e)} className="sm:hidden text-2xl" />
                <div className="hidden sm:flex flex-row">
                    <ul>
                        <li>
                            <Link href="/" className="pr-5">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="pr-5">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <a href="https://csea-careerportal.prosple.com/" className="pr-5">
                                Internship Portal
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* Mobile menu */}
            {isOpen && (
                <div className="flex flex-col justify-center  h-screen w-screen top-0 z-10 bg-white fixed text-3xl">
                    <IoIosClose onClick={(e) => handleClick(e)} className="absolute right-5 top-5" />
                    <div className=" text-center h-32 flex self-center ">
                        <ul>
                            <li>
                                <Link href="/" onClick={(e) => handleClick(e)}>
                                    Home
                                </Link>
                            </li>
                            <li className="mt-10">
                                <Link href="/about" onClick={(e) => handleClick(e)}>
                                    About Us
                                </Link>
                            </li>
                            <li className="mt-10">
                                <a href="https://csea-careerportal.prosple.com/" onClick={(e) => handleClick(e)}>
                                    Internship Portal
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </>
    )
}

export default Nav
