"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from "next/navigation";
import Image from 'next/image';

const Navbar = () => {
    const pathname = usePathname()
    const showNavbar = ["/", "/generate"].includes(pathname)

    return (<>{showNavbar && <nav className='bg-white w-[80vw] flex justify-between fixed top-10 right-[10vw] rounded-full p-5 px-7'>
        <div className="logo flex gap-20 items-center">
            <Link href={"/"}>
                <div className='flex'>
                    <h1
                        className="font-bold tracking-tight"
                        style={{
                            fontSize: "2.5rem",
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            color: "#222", 
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.25rem",
                        }}
                    >
                        bit
                        <span style={{ color: "#00C853" }}>Tree</span>
                    </h1>

                    <Image
                        width={60}
                        height={40}
                        src="/logo.png"
                        alt="logo"
                        priority
                    />
                </div>
            </Link>

            <ul className='flex gap-10'>
                <Link href="/"><li>Templates </li></Link>
                <Link href="/"><li>Marketplace</li></Link>
                <Link href="/"><li>Discover</li></Link>
                <Link href="/"><li>Pricing</li></Link>
                <Link href="/"><li>Learn</li></Link>
            </ul>
        </div>

        <div className='flex gap-3'>
            <button className="login bg-gray-400 p-4 rounded-lg font-bold">Log in</button>
            <button className="signup bg-gray-900 text-white font-bold p-4 rounded-full"> Sign up free</button>
        </div>
    </nav>}
    </>

    )
}

export default Navbar