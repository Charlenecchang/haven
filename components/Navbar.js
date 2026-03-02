"use client"

import Link from "next/link" // Next.js Route Handler

export default function Navbar(){
    return(
        <nav style ={{padding: 20, borderBottom: "1px solid #FFFFFF"}}>
            <Link href="/">Landing Page</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/staff-directory">Staff Directory</Link>
            <Link href="/support-groups">Support Groups</Link>
        </nav>
    )
}