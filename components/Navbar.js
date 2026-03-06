"use client"

import Link from "next/link" // Next.js Client side route navigation
import {usePathname} from "next/navigation" // To style the active link in nav bar
import Image from "next/image"
export default function Navbar(){
    const pathname = usePathname() // Read current path for active link
    return(
        <nav className="bg-[#faf6ee] border-b border-[#ede8df] px-8 flex items-center h-[80px] gap-8 sticky top-0 z-50">
            {/* Landing Page */}
            <Link href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
                <Image src="/logo.png" alt="Haven logo" width={50} height={38} />
                <span className="font-bold text-4xl text-[#1a2e1a] font-serif">Haven</span>
            </Link>
            {/* Needs sign-in: Dashboard, Staff-Directory, Support Groups */}
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/staff-directory">Staff Directory</Link>
            <Link href="/support-groups">Support Groups</Link>
        </nav>
    )
}