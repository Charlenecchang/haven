"use client"

import { useSession } from "next-auth/react"
export default function Dashboard() {
    const {data: session} = useSession()

    return(
        <div style={{padding:20}}>
            <h1 className="text-2xl font-bold">Welcome to Haven</h1><br></br>
            <p className="text-sm">Finding resources for your placement child? We&apos;re here to help.</p><br></br>
            <section>
                <h2>Child Profile & Personalization</h2>
                
                <p>Helping you find the best resources for your placement child</p>
                <select name="child-profile" id="child-profile">
                    <option>Henry Thompson</option>
                    <option>Maya Jackson</option>
                </select>
            </section>
        </div>
    )
}